<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>


## Description

microservicio en NestJS que realice consultas a la API de Catastro de España. La API de Catastro es gratuita y permite obtener información sobre propiedades, como direcciones, coordenadas, y otros datos relacionados con viviendas y terrenos.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Stay in touch

- Author - [Julio Cesar Llinas](https://portafolio-3-0-jhonshuas-projects.vercel.app/home)


## file structure



```bash

catastro-microservice/
├── src/
│   ├── catastro/
│   │   ├── dto/
│   │   │   ├── property-info.dto.ts       // DTO para validar el cuerpo de la solicitud
│   │   ├── catastro.controller.ts         // Controlador para manejar las rutas
│   │   ├── catastro.service.ts            // Servicio para interactuar con la API de Catastro
│   │   ├── catastro.module.ts             // Módulo de Catastro
│   ├── app.module.ts                      // Módulo principal de la aplicación
│   ├── main.ts                            // Punto de entrada de la aplicación
├── test/                                  // Pruebas (opcional)
├── .eslintrc.js                           // Configuración de ESLint
├── .prettierrc                            // Configuración de Prettier
├── nest-cli.json                          // Configuración del CLI de NestJS
├── package.json                           // Dependencias y scripts del proyecto
├── tsconfig.json                          // Configuración de TypeScript
├── README.md                              // Documentación del proyecto

```


Referencias catastrales de ejemplo:
Aunque no hay referencias oficiales de prueba, puedes usar referencias de propiedades reales. Por ejemplo:

Referencia catastral de una propiedad en Barcelona:

Referencia Catastral 9035401DF2893E0002ZK

Provincia: Barcelona

Municipio: Barcelona

Referencia catastral de una propiedad en Barcelona:

json send body
9035401DF2893E0003XL
9035401DF2893E0004MB
9035401DF2893E0006WX
9035401DF2893E0018AI

```json

{
  "reference": "9035401DF2893E0002ZK",
  "provincia": "Barcelona",
  "municipio": "Barcelona"
}

```


response status 200 ok

```json

{
    "datosDescriptivos": {
        "referenciaCatastral": "9035401DF2893E0002ZK",
        "localizacion": "CL LAFORJA 23 Pl:SM Pt:01 08006 BARCELONA (BARCELONA)",
        "clase": "Urbano",
        "usoPrincipal": "Comercial",
        "superficieConstruida": "335",
        "añoConstruccion": "1967"
    },
    "parcelaCatastral": {
        "imagenMapa": "[Enlace a la imagen]",
        "localizacionParcela": "CL LAFORJA 21, BARCELONA (BARCELONA)",
        "superficieGrafica": "400 m2",
        "participacionInmueble": "12,400000"
    },
    "construcciones": [
        {
            "usoPrincipal": "COMERCIO",
            "escalera": "SM",
            "planta": "SM",
            "puerta": "01",
            "superficie": "142",
            "tipoReforma": "N/A",
            "fechaReforma": "N/A"
        },
        {
            "usoPrincipal": "COMERCIO",
            "escalera": "SM",
            "planta": "SM",
            "puerta": "02",
            "superficie": "48",
            "tipoReforma": "N/A",
            "fechaReforma": "N/A"
        },
        {
            "usoPrincipal": "COMERCIO",
            "escalera": "SM",
            "planta": "SM",
            "puerta": "03",
            "superficie": "45",
            "tipoReforma": "N/A",
            "fechaReforma": "N/A"
        },
        {
            "usoPrincipal": "COMERCIO",
            "escalera": "SM",
            "planta": "SM",
            "puerta": "04",
            "superficie": "10",
            "tipoReforma": "N/A",
            "fechaReforma": "N/A"
        },
        {
            "usoPrincipal": "COMERCIO",
            "escalera": "SM",
            "planta": "SM",
            "puerta": "05",
            "superficie": "60",
            "tipoReforma": "N/A",
            "fechaReforma": "N/A"
        },
        {
            "usoPrincipal": "ELEMENTOS COMUNES",
            "escalera": "SM",
            "planta": "N/A",
            "puerta": "N/A",
            "superficie": "30",
            "tipoReforma": "N/A",
            "fechaReforma": "N/A"
        }
    ]
}

```

Post http://localhost:3000/catastro/property

Estas referencias son ejemplos y pueden no devolver datos si la propiedad no está registrada o si la API no tiene acceso a esa información.