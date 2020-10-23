# Juno

Features

- Material design with [Angular Material](https://material.angular.io/).
- Responsive
- Modularization
  - Module for Tasks
  - Module for Tables
  - Folder for shared components ```ui```
- Accessibility (inherited from material components).
- Unit testing with [Jest](https://jestjs.io).
  - Add as much logic as possible to services in order to test them.
  - Remove as much logic as possible from components since are more difficult to test.
- Persistence with [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) (in browser data base).
- [Routing](https://angular.io/guide/router).
- Using [Nx](https://nx.dev) as CLI for managing the development experience (build, test, etc.). 

## Start the application

```
npm install -g nx
npm install
nx serve front
```

And open your browser at ```http://localhost:4200```

## Run the tests

```
nx test front
```

To run the tests with watch mode:

```
nx test front --watch
```
