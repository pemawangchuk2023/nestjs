# NestJS Flow Diagram

Open this image:

![NestJS request flow](./nestjs-flow-diagram.svg)

```text
Client → Controller → Service → Repository/ORM → Database
Database → Repository/ORM → Service → Controller → Client
```

Based on the NestJS documentation concepts: **Modules**, **Controllers**, and **Providers/Services**.
