import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { PropertyInfoDto } from './dto/property-info.dto';
import { parseStringPromise } from 'xml2js'; // Para convertir XML a JSON

@Injectable()
export class CatastroService {
  constructor(private readonly httpService: HttpService) {}

  async getPropertyInfo(propertyInfoDto: PropertyInfoDto) {
    const url = `https://ovc.catastro.meh.es/ovcservweb/OVCSWLocalizacionRC/OVCCallejero.asmx/Consulta_DNPRC`;
    const params = {
      Provincia: propertyInfoDto.provincia || '',
      Municipio: propertyInfoDto.municipio || '',
      RC: propertyInfoDto.reference,
    };

    const headers = {
      'Accept': 'application/xml',
      'User-Agent': 'NestJS',
    };

    try {
      const response = await firstValueFrom(
        this.httpService.get(url, { params, headers }),
      );

      // Convertir XML a JSON
      const jsonResponse = await parseStringPromise(response.data, {
        explicitArray: false,
      });

      // Transformar la respuesta
      const transformedResponse = this.transformCatastroResponse(jsonResponse);
      return transformedResponse;
    } catch (error) {
      console.error('Error en la solicitud a la API de Catastro:', error.response?.data || error.message);
      throw new HttpException('No se pudo obtener la información de la propiedad', HttpStatus.BAD_REQUEST);
    }
  }

  private transformCatastroResponse(response: any) {
    const data = response.consulta_dnp;

    // Extraer datos principales
    const referenciaCatastral = `${data.bico.bi.idbi.rc.pc1}${data.bico.bi.idbi.rc.pc2}${data.bico.bi.idbi.rc.car}${data.bico.bi.idbi.rc.cc1}${data.bico.bi.idbi.rc.cc2}`;
    const localizacion = data.bico.bi.ldt;
    const clase = "Urbano"; // Asumimos que es urbano
    const usoPrincipal = data.bico.bi.debi.luso;
    const superficieConstruida = data.bico.bi.debi.sfc;
    const añoConstruccion = data.bico.bi.debi.ant;

    // Extraer datos de la parcela
    const parcela = {
      imagenMapa: "[Enlace a la imagen]", // No está en la respuesta, puedes omitirlo o calcularlo
      localizacionParcela: "CL LAFORJA 21, BARCELONA (BARCELONA)", // Asumimos que es la misma
      superficieGrafica: "400 m2", // No está en la respuesta, puedes omitirlo o calcularlo
      participacionInmueble: data.bico.bi.debi.cpt,
    };

    // Extraer datos de construcción
    const construcciones = data.bico.lcons.cons.map((cons: any) => ({
      usoPrincipal: cons.lcd,
      escalera: "SM", // Asumimos que es "SM"
      planta: cons.dt?.lourb?.loint?.pt || "N/A",
      puerta: cons.dt?.lourb?.loint?.pu || "N/A",
      superficie: cons.dfcons.stl,
      tipoReforma: "N/A", // No está en la respuesta
      fechaReforma: "N/A", // No está en la respuesta
    }));

    // Estructura final
    return {
      datosDescriptivos: {
        referenciaCatastral,
        localizacion,
        clase,
        usoPrincipal,
        superficieConstruida,
        añoConstruccion,
      },
      parcelaCatastral: parcela,
      construcciones,
    };
  }
}