# Building an API using a Relational Database //jaklundun

## Topics

- Databases
- Relational Databases
- Knex migrations.
- Seeding data.

## Assignment

Build an API that persists data to SQLite3.

Use knex migrations to create a database called `lambda.sqlite3` and add the following tables:

#### cohorts

- `id`: primary key, auto-increments.
- `name`: text, required.

#### students

- `id`: primary key, auto-increments.
- `name`: text, required.
- `cohort_id`: references the `id` in the cohorts table.

Use knex seeding feature to add test data to your tables.

Implement the following endpoints:

- `[POST] /api/cohorts` This route should save a new cohort to the database.
- `[GET] /api/cohorts` This route will return an array of all cohorts.
- `[GET] /api/cohorts/:id` This route will return the cohort with the matching `id`.
- `[GET] /api/cohorts/:id/students` returns all students for the cohort with the specified `id`.
- `[PUT] /api/cohorts/:id` This route will update the cohort with the matching `id` using information sent in the body of the request.
- `[DELETE] /api/cohorts/:id` This route should delete the specified cohort.

## Stretch Problem

Add the following endpoints.

- `[POST] /students` This route should save a new student to the database.
- `[GET] /students` This route will return an array of all students.
- `[GET] /students/:id` This route will return the student with the matching `id`.
- `[PUT] /students/:id` This route will update the student with the matching `id` using information sent in the body of the request.
- `[DELETE] /students/:id` This route should delete the specified student.

Have the student returned by the `[GET] /students/:id` endpoint include the cohort name and remove the `cohort_id` fields. The returned object should look like this:

```js
{
  id: 1,
  name: 'Lambda Student',
  cohort: 'Full Stack Web Infinity'
}
```

// `knex` in the CLI pulls up the available commands

//yarn add express knex sqlite3  helmet
// yarn add --dev nodemon
// create knex file: knex init
// node index.js
// knex migrate:make cohorts_table
// knex migrate:make students_table
// knex migrate:latest // to spit out db.file
// knex seed:make 01-cohorts
// knex seed:make 01-students