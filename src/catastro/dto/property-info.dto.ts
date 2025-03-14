import { IsString, IsOptional } from 'class-validator';

export class PropertyInfoDto {
  @IsString()
  reference: string; // Referencia catastral

  @IsString()
  @IsOptional()
  provincia?: string; // Provincia (opcional)

  @IsString()
  @IsOptional()
  municipio?: string; // Municipio (opcional)
}