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

Copy
Referencia Catastral 9035401DF2893E0002ZK

Provincia: Barcelona

Municipio: Barcelona

Referencia catastral de una propiedad en Barcelona:

json send body


```json

{
  "reference": "9035401DF2893E0002ZK",
  "provincia": "Barcelona",
  "municipio": "Barcelona"
}

```

Post http://localhost:3000/catastro/property

Estas referencias son ejemplos y pueden no devolver datos si la propiedad no está registrada o si la API no tiene acceso a esa información.