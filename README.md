# Leadster Frontend Challenge (Pokemon)

The Leadster Frontend Code Challenge

---

## Decisions

On this challenge I've made some decisions about the project organization and how structure it. In the following I'll show some decisions that I've made by some topics.

### Tests

I have some technique's to test, one of my decisions was to use [Testing Pyramid](https://www.headspin.io/blog/the-testing-pyramid-simplified-for-one-and-all) framework to deliver automated tests on this project. You can know more about it on the article: [What is a Testing Pyramid?](https://www.headspin.io/blog/the-testing-pyramid-simplified-for-one-and-all).

Right now I'm applying the rule 60-30-10:

- 60% - Unit tests;
- 30% - Component/Integration tests;
- 10% - E2E Tests;

I choose the libraries such as [Jest](https://jestjs.io/docs/26.x/tutorial-react), [Testing Library](https://testing-library.com/docs/), and [Cypress](https://www.cypress.io) to use as my main testing tools.

### Commits

The project commits are created following the [CommitLint](https://commitlint.js.org/) pattern, following the Conventional Commits specification for more readable commit messages. You can learn more about on the [Conventional Commits Website](https://www.conventionalcommits.org/en/v1.0.0/).

## Code Organization

## Features

## Instructions

To run the code you will need to install [Node.JS v16](https://nodejs.org/download/release/v16.19.0/), that was fully tested on it, relative to your OS installer

With Node.js installed you can now run the project with the following commands:

### Install all node dependencies

```bash
npm install
```

or

```bash
yarn install
```

### Run the project

```bash
npm run start
```

or

```bash
yarn start
```

### Build to deploy

```bash
npm run build
```

or

```bash
yarn build
```

### Checking issues (Lint)

```bash
npm run lint
```

or

```bash
yarn lint
```

### Auto-fixing (Lint)

```bash
npm run lint
```

or

```bash
yarn lint
```

### Formating code (Lint/Prettier)

```bash
npm run format
```

or

```bash
yarn format
```
