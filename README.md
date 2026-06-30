# NestJS Payment Learning Lab

A chapterized NestJS practice repo for learning the framework through a small payment/accounting system.

The goal is simple: every chapter adds one NestJS concept, one testable endpoint, and one diagram you can review later on GitHub.

## Learning Path

| Chapter | NestJS concept | Payment example | Test endpoint |
| --- | --- | --- | --- |
| [Chapter 01](docs/nestjs-payments/chapter-01-basic-flow.md) | Module, controller, service flow | Return all payments | `GET /payments` |
| [Chapter 02](docs/nestjs-payments/chapter-02-route-params.md) | Controller route parameters | Return one payment by ID | `GET /payments/1` |

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
      assets/
        chapter-01-basic-flow.svg
        chapter-02-route-params.svg
  src/
    payments/
      payments.module.ts
      payments.controller.ts
      payments.service.ts
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
```

## Official Docs

This repo follows the official NestJS docs chapter by chapter:

- [NestJS Documentation](https://docs.nestjs.com/)
- [Controllers](https://docs.nestjs.com/controllers)
