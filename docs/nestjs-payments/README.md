# NestJS Payments Course

This folder is the learning book for the repo. The source code stays in `src/`; explanations, diagrams, and chapter notes stay here.

## Chapters

| Chapter | Topic | What you learn | Endpoint |
| --- | --- | --- | --- |
| [01 - Basic Payments Flow](chapter-01-basic-flow.md) | Modules, controllers, services | How a request moves through a NestJS feature | `GET /payments` |
| [02 - Controller Route Parameters](chapter-02-route-params.md) | `@Get(':id')`, `@Param()` | How to read a value from the URL | `GET /payments/1` |
| [03 - Controller Query Parameters](chapter-03-query-params.md) | `@Query()` | How to filter list data using the query string | `GET /payments?status=paid` |
| [04 - DTOs For Request Bodies](chapter-04-dtos.md) | DTO, `@Post()`, `@Body()` | How to describe create-payment request data | `POST /payments` |

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
```

## How To Study Each Chapter

1. Read the concept.
2. Look at the diagram.
3. Open the linked source files.
4. Run the endpoint in `src/payments/payments.endpoints.http`.
5. Compare your response with the expected response.

## Official Docs Used

- [NestJS Controllers](https://docs.nestjs.com/controllers)
