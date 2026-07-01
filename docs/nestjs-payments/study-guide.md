# Study Guide - How To Learn NestJS From This Repo

[Course index](README.md)

This repo is not only a code notebook. It is a way to train your thinking.

The goal is to learn how NestJS organizes responsibility:

```text
HTTP concern
  -> controller, middleware, guards, pipes, interceptors

Business concern
  -> services, domain rules, exceptions

Data concern
  -> repositories, database clients, external APIs

Application concern
  -> modules, providers, configuration, testing
```

## The Five-Pass Method

Use this method for each chapter.

1. Read the goal.
2. Draw the flow from memory.
3. Explain who owns each responsibility.
4. Run or mentally simulate the request.
5. Answer the checkpoint without looking.

## Good Questions Beat Fast Coding

For every NestJS feature, ask:

```text
Where does this run in the request lifecycle?
What problem does it solve?
What should not live here?
What should be injected instead of manually created?
How would I test this without the browser?
```

## Responsibility Test

When unsure where code belongs, use this test:

| Question | Best place |
| --- | --- |
| Is this about HTTP route shape? | Controller |
| Is this about business decision? | Service |
| Is this about storing/fetching data? | Repository |
| Is this about request validity? | Pipe / ValidationPipe |
| Is this about access permission? | Guard |
| Is this about wrapping the response? | Interceptor |
| Is this about application wiring? | Module |
| Is this about environment settings? | Config module |

## Retrieval Practice

After each chapter, close the file and answer:

```text
What new concept did I learn?
Where does it sit in the request lifecycle?
What code did it replace or protect?
What would break if I removed it?
How would I explain it to another developer?
```

## Final Rule

Do not measure learning by how many decorators you remember.

Measure learning by whether you can explain the flow:

```text
Request enters Nest
Nest chooses route
Nest checks request
Controller delegates
Service decides
Repository retrieves
Nest shapes the response
```
