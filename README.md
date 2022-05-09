# Feather - Fullstack Engineer code challenge

## Problem Statement

A simple admin panel that has a single table view to list insurance policies showcasing all the various field they may have.

The [frontend](./frontend) communicates with the [backend](./backend) through a GraphQL API. Data is persisted using Prisma.


## How to setup

#### Client - To Start the app

cd client/

##### To install dependencies

```sh
npm install
```

```sh
npm run start
```

##### To test the application

```sh
npm test
```

#### Server - To Start the app

cd server/

#### To install dependencies

```sh
yarn install
```

```sh
yarn dev
```

#### To test the application

```sh
yarn test
```

#### To view Apollo Sandbox

Open Browser -> http://localhost:4000/ (If server is running on Port 4000)

#### To view Prisma Studio

```sh
yarn prisma studio
```

## Built with

This project is built using

- `Apollo GraphQL server`
- `React.js` for components, `react-table` to render Table component , styled using `TailwindCSS`
- `Apollo Client` 
- `Prisma` as ORM and `SQLite` to persist data. 
-  For Testing - `Apollo Sandbox`- IDE for testing GraphQL endpoints and testing libs such as `jest`, `react-testing-libraries`, `apollo/client/testing`



## Known Bugs

- Update Field Validation not done. 
- Apollo Server Tests

## Areas of Improvement

- Improve Unit & Integration testing code coverage
- User Authentication
- Package the app using Docker


### Policy

| fields         | type                            | comment                                       |
| -------------- | ------------------------------- | --------------------------------------------- |
| customer       | [Customer](#Customer)           | Object holding the customer's informations    |
| provider       | string                          | Name of the provider (Allianz, AXA…)          |
| insurance type | [InsuranceType](#InsuranceType) | Type of the insurance (Liability, Household…) |
| status         | [PolicyStatus](#PolicyStatus)   | Status of the insurance (Active, Cancelled)   |
| policyNumber   | string                          | Used to identify the policy                   |
| startDate      | date                            | Date when the policy should start             |
| endDate        | date                            | Date when the policy ends                     |
| createdAt      | date                            | Date when the record was created              |

### Customer

| fields      | type   | comment                  |
| ----------- | ------ | ------------------------ |
| firstName   | string | Customer’s first name    |
| lastName    | string | Customer’s last name     |
| dateOfBirth | date   | Customer’s date of birth |

### InsuranceType

InsuranceType can be of `Liability`, `Household`, `Health`

### PolicyStatus

PolicyStatus can be of `Active`, `Pending`, `Cancelled` and `Dropped out`
