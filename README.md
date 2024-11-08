<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Proyecto ms-auth

[![NestJS](https://img.shields.io/badge/NestJS-vX.Y.Z-red)](https://nestjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-vXX.X.X-green)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-vX.X-blue)](https://www.mongodb.com/)

Microservicio que gestiona los usuarios de base de datos. Maneja la authenticación y autorización de los servicios con MongoDB.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Configuración](#configuración)
- [Ejecutando la Aplicación](#ejecutando-la-aplicación)
- [Estructura del Proyecto](#estructura-del-proyecto)

## Instalación

### Requisitos Previos

- [Node.js](https://nodejs.org/) v22.11.0
- [MongoDB](https://www.mongodb.com/) v7.0.9

### Clonar el Repositorio

```bash
git clone https://github.com/ecommerce-portafolio/ms-auth.git
cd ms-auth
```

### Instalación de Dependencias

```bash
npm install
```

## Configuración

Crea un archivo `.env` en la raíz del proyeto con las variables del archivo `.env.template`

## Ejecutando la Aplicación

Iniciar base de datos MongoDB con Docker.

Para iniciar el servidor en modo de desarrollo, ejecuta:

```bash
npm run start:dev
```
La aplicación estará disponible en http://localhost:3000 (o en el puerto especificado en .env).


## Estructura del Proyecto

src/