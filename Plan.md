## Warmup questions

- What are
  - Postgres: A relational database (SQL)
  - Elephant SQL: "Hosted" postgres provider
    -> runs Postgres database for us (so we don't have to)
  - Postico / QueryPie / DBeaver: GUI (Graphic User Interface)
    -> Database Viewer (see what your databse looks like)
  - Sequelize: Object Relation Mapper (ORM) for Relational Database
    -> for JavaScript -> Interact with our database using JavaScript

## Learning goals

- How to use Sequelize / Sequelize-cli to:

  - Define the tables in our database -> Migrations
  - Insert data into our database for testing -> Seeders
  - Extract data from our database to use as part of an express server -> Model

- What are the differences between Migrations & Models

  - Migration: History of the table
  - Model: Current structure of the table

- What 3 common pitfalls when working with Sequelize-cli
  - Plural / Singular

## Features

- Add a database to a simple express server that manages users
- Extend the data model for a user
- Implement searching by firstName

## Model (singular)

- What the data model for user (right now) -> name, email etc
- Model we use to query data ...

## Migrations

- History of what the database looks like
- A migration describes a change to your database
- Migration has up: apply the change, down: undo the change

### Add a database to a simple express server that manages users

What do we need?

- [x] Elephant sql database -> hosted postgres to store data
- [x] Link it to our GUI -> Make it visible, debug
- [x] Set up sequelize (so we can program our database)
  - Install dependencies: sequelize, sequelize-cli & pg
  - `npx sequelize-cli init` -> folders & config files
  - Edit config/config.json -> add the url of your database
  - In models/index.js -> change

```
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
```

to

```
  sequelize = new Sequelize(config.url, config);
```

- [x] Create a Model & a Migration
  - Sequelize-cli: `npx sequelize-cli model:generate --name user --attributes firstName:string`
  - Migrate the database -> Creates the table, `npx sequelize-cli db:migrate`
  - Check in GUI to see, does our table exist? (remember to refresh)
- [x] Seed the database -> putting the data in the database
  - Generate a seed: `npx sequelize-cli seed:generate --name seed-users`
  - Write scripts that seed data
  - "Running" the scripts that seed the data? `npx sequelize-cli db:seed:all`
  - Check in GUI, do we have data (remember to refresh)
- [x] Import the Model
  - Query the database using the Model (findAll())

### Extend the data model for a user

Product Owner:

- We would like to also store lastName & email, can you make that happen?

What do we need to do:

- [x] Create a new migration
  - Migration "Skeleton", up, down etc...
    -> `npx sequelize-cli migration:generate --name add-lastname-email-to-users`
  - Add the 2 columns, lastName & email
- [x] Update the seed files
  - `npx sequelize-cli db:seed:undo`
  - `npx sequelize-cli db:seed:all`
- Update the Model
