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

  - Define the tables in our database
  - Insert data into our database for testing
  - Extract data from our database to use as part of an express server

- What are the differences between Migrations & Models

- What 3 common pitfalls when working with Sequelize-cli
  - Plural / Singular

## Features

- Add a database to a simple express server that manages users
- Extend the data model for a user
- Implement searching by firstName

## Model

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
- [x] Create a Model & a Migration
  - Migrate the database
- Seed the database -> putting the data in the database
  - Write scripts that seed data
  - "Running" the scripts that seed the data?
- Import the Model, query the database using the Model
