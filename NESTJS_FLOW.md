# NestJS Flow Diagram

Open this image:

![NestJS request flow](./nestjs-flow-diagram.svg)

## Simple Flow

1. The client sends a request.
2. The controller receives the request.
3. The controller calls the service.
4. The service does the main work.
5. If data is needed, the service asks the repository or ORM.
6. The repository or ORM talks to the database.
7. The database sends data back.
8. The service sends the result back to the controller.
9. The controller sends the final response to the client.

## Easy Meaning

- **Module** connects the controller and service.
- **Controller** handles the request.
- **Service** handles the work.
- **Repository / ORM** talks to the database.
- **Database** stores the data.
