# NestJS Payment Learning Lab

A chapterized NestJS practice repo for learning the framework through a small payment/accounting system.

The goal is simple: every chapter adds one NestJS concept, one testable endpoint, and one diagram you can review later on GitHub.

## Learning Path

| Chapter | NestJS concept | Payment example | Test endpoint |
| --- | --- | --- | --- |
| [Chapter 01](docs/nestjs-payments/chapter-01-basic-flow.md) | Module, controller, service flow | Return all payments | `GET /payments` |
| [Chapter 02](docs/nestjs-payments/chapter-02-route-params.md) | Controller route parameters | Return one payment by ID | `GET /payments/1` |
| [Chapter 03](docs/nestjs-payments/chapter-03-query-params.md) | Controller query parameters | Filter payments by status | `GET /payments?status=paid` |
| [Chapter 04](docs/nestjs-payments/chapter-04-dtos.md) | DTOs and request bodies | Create a payment from JSON body | `POST /payments` |
| [Chapter 05](docs/nestjs-payments/chapter-05-validation-pipe.md) | ValidationPipe and DTO rules | Reject invalid payment bodies | `POST /payments` |
| [Chapter 06](docs/nestjs-payments/chapter-06-http-exceptions.md) | Built-in HTTP exceptions | Return 404 for missing payments | `GET /payments/999` |
| [Chapter 07](docs/nestjs-payments/chapter-07-providers-repository.md) | Providers and dependency injection | Move data access into a repository | Same payment endpoints |
| [Chapter 08](docs/nestjs-payments/chapter-08-module-boundaries.md) | Module boundaries | Design feature modules with clear public APIs | Architecture notes |
| [Chapter 09](docs/nestjs-payments/chapter-09-custom-providers.md) | Custom providers | Learn provider tokens and replaceable implementations | Architecture notes |
| [Chapter 10](docs/nestjs-payments/chapter-10-middleware.md) | Middleware | Understand pre-controller request logic | Lifecycle notes |
| [Chapter 11](docs/nestjs-payments/chapter-11-guards.md) | Guards | Learn authorization gates before handlers run | Security notes |
| [Chapter 12](docs/nestjs-payments/chapter-12-interceptors.md) | Interceptors | Learn before/after response wrapping | Lifecycle notes |
| [Chapter 13](docs/nestjs-payments/chapter-13-configuration.md) | Configuration | Understand environment-based app settings | Architecture notes |
| [Chapter 14](docs/nestjs-payments/chapter-14-testing-strategy.md) | Testing | Learn how to test services/controllers with confidence | Testing notes |

Start here:

- [NestJS Payments Course Index](docs/nestjs-payments/README.md)

## Project Structure

```text
nestjs_p/
  docs/
    nestjs-payments/
      README.md
      chapter-01-basic-flow.md
      chapter-02-route-params.md
      chapter-03-query-params.md
      chapter-04-dtos.md
      chapter-05-validation-pipe.md
      chapter-06-http-exceptions.md
      chapter-07-providers-repository.md
      chapter-08-module-boundaries.md
      chapter-09-custom-providers.md
      chapter-10-middleware.md
      chapter-11-guards.md
      chapter-12-interceptors.md
      chapter-13-configuration.md
      chapter-14-testing-strategy.md
      study-guide.md
      assets/
        chapter-01-basic-flow.svg
        chapter-02-route-params.svg
        chapter-03-query-params.svg
        chapter-04-dtos.svg
        chapter-05-validation-pipe.svg
        chapter-06-http-exceptions.svg
        chapter-07-providers-repository.svg
  src/
    payments/
      payments.module.ts
      payments.controller.ts
      payments.service.ts
      payments.repository.ts
      payments.endpoints.http
```

## Run The Project

```bash
npm install
npm run start:dev
```

On Windows PowerShell, if `npm` is blocked by execution policy, use:

```powershell
npm.cmd run start:dev
```

## Test The Endpoints

Use `src/payments/payments.endpoints.http` in VS Code REST Client, or open these URLs:

```http
GET http://localhost:3000/payments
GET http://localhost:3000/payments/1
GET http://localhost:3000/payments?status=paid
POST http://localhost:3000/payments
GET http://localhost:3000/payments/999
```

## Official Docs

This repo follows the official NestJS docs chapter by chapter:

- [NestJS Documentation](https://docs.nestjs.com/)
- [Controllers](https://docs.nestjs.com/controllers)
- [Validation](https://docs.nestjs.com/techniques/validation)
- [Exception filters](https://docs.nestjs.com/exception-filters)
- [Providers](https://docs.nestjs.com/providers)
- [Modules](https://docs.nestjs.com/modules)
- [Custom providers](https://docs.nestjs.com/fundamentals/custom-providers)
- [Middleware](https://docs.nestjs.com/middleware)
- [Guards](https://docs.nestjs.com/guards)
- [Interceptors](https://docs.nestjs.com/interceptors)
- [Configuration](https://docs.nestjs.com/techniques/configuration)
- [Testing](https://docs.nestjs.com/fundamentals/testing)
