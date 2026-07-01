# NestJS Payments Course

This folder is the learning book for the repo. The source code stays in `src/`; explanations, diagrams, and chapter notes stay here.

## Chapters

| Chapter | Topic | What you learn | Endpoint |
| --- | --- | --- | --- |
| [01 - Basic Payments Flow](chapter-01-basic-flow.md) | Modules, controllers, services | How a request moves through a NestJS feature | `GET /payments` |
| [02 - Controller Route Parameters](chapter-02-route-params.md) | `@Get(':id')`, `@Param()` | How to read a value from the URL | `GET /payments/1` |
| [03 - Controller Query Parameters](chapter-03-query-params.md) | `@Query()` | How to filter list data using the query string | `GET /payments?status=paid` |
| [04 - DTOs For Request Bodies](chapter-04-dtos.md) | DTO, `@Post()`, `@Body()` | How to describe create-payment request data | `POST /payments` |
| [05 - DTO Validation With ValidationPipe](chapter-05-validation-pipe.md) | `ValidationPipe`, `class-validator` | How to reject bad request bodies | `POST /payments` |
| [06 - Built-In HTTP Exceptions](chapter-06-http-exceptions.md) | `NotFoundException` | How to return proper API errors for missing records | `GET /payments/999` |
| [07 - Providers And Repository Layer](chapter-07-providers-repository.md) | Providers, dependency injection | How to separate business logic from data access | Same payment endpoints |
| [08 - Module Boundaries](chapter-08-module-boundaries.md) | Feature modules, imports, exports | How to design clean module borders | Architecture notes |
| [09 - Custom Providers](chapter-09-custom-providers.md) | Provider tokens, `useClass`, `useValue`, `useFactory` | How implementations become replaceable | Architecture notes |
| [10 - Middleware](chapter-10-middleware.md) | Pre-controller request logic | How request code runs before guards/controllers | Lifecycle notes |
| [11 - Guards](chapter-11-guards.md) | Authorization gates | How Nest decides whether a handler may run | Security notes |
| [12 - Interceptors](chapter-12-interceptors.md) | Before/after handler wrapping | How to shape responses and observe timing | Lifecycle notes |
| [13 - Configuration](chapter-13-configuration.md) | Environment-based settings | How apps learn settings without hardcoding | Architecture notes |
| [14 - Testing Strategy](chapter-14-testing-strategy.md) | Unit and controller testing | How to prove behavior without manual clicking | Testing notes |

## Study Method

Use [the learning method](study-guide.md) when reading these chapters. The goal is not memorizing decorators; the goal is building a mental model of request flow, dependency flow, and responsibility boundaries.

## Current Feature

```text
PaymentsModule
  PaymentsController
    GET /payments
    GET /payments/:id
    GET /payments?status=paid
    POST /payments
  PaymentsService
    findAll(status)
    findOne(id)
    create(createPaymentDto)
    throws NotFoundException when payment is missing
  PaymentsRepository
    stores payment data
    finds and creates payments
  ValidationPipe
    validates CreatePaymentDto before service logic
```

## How To Study Each Chapter

1. Read the concept.
2. Look at the diagram.
3. Open the linked source files.
4. Run the endpoint in `src/payments/payments.endpoints.http`.
5. Compare your response with the expected response.

## Official Docs Used

- [NestJS Controllers](https://docs.nestjs.com/controllers)
- [NestJS Validation](https://docs.nestjs.com/techniques/validation)
- [NestJS Exception Filters](https://docs.nestjs.com/exception-filters)
- [NestJS Providers](https://docs.nestjs.com/providers)
- [NestJS Modules](https://docs.nestjs.com/modules)
- [NestJS Custom Providers](https://docs.nestjs.com/fundamentals/custom-providers)
- [NestJS Middleware](https://docs.nestjs.com/middleware)
- [NestJS Guards](https://docs.nestjs.com/guards)
- [NestJS Interceptors](https://docs.nestjs.com/interceptors)
- [NestJS Configuration](https://docs.nestjs.com/techniques/configuration)
- [NestJS Testing](https://docs.nestjs.com/fundamentals/testing)
