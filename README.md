# React + TypeScript + Tailwind Starter

## Table of Contents
- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Scripts](#scripts)
- [Linting and Formatting](#linting-and-formatting)
- [Environment Variables](#typesafe-environment-variables)
- [Contributing](#contributing)
- [License](#license)

## About
This project is a great place to start your react + typescript project, it uses vite for the dev server and TailwindCSS for styling. This configuration was my go-to every time so instead of configuring it again and again I created this starter and thought to share it with the community as well 😄. Would love to have your feedback/comments/suggestions regarding this.

## Features
- **React and Vite:** Utilize the power of React for building user interfaces and Vite for a faster development experience.
- **Typesafe Routing (feat. [Tanstack Router](https://github.com/TanStack/router)):** Utilize the power of Tanstack Router for building a type-safe routing system.
- **TypeScript:** Enjoy the benefits of static typing with TypeScript support.
- **Tailwind CSS:** Quickly style your components with the utility-first CSS framework.
- **Prettier and ESLint:** Ensure consistent code style and formatting using ```eslint``` and ```prettier```.
- **Typesafe Environment Variables:** Handling and validation of environment variables using Zod.
- **Lint-staged and Commitlint:** Enforce code quality and consistent commit messages.

## Getting Started
### Prerequisites
You need to have [Node.js (>=20.x)](https://nodejs.org/), npm & [Git](https://git-scm.com/) installed on your machine to get started with this repository.

### Installation
#### Clone the repository:
```bash
# HTTPS
git clone https://github.com/Muhammad-Hasham-Khalid/react-typescript-tailwind-starter.git

# or SSH
git clone git@github.com:Muhammad-Hasham-Khalid/react-typescript-tailwind-starter.git

# or GitHub CLI
gh repo clone Muhammad-Hasham-Khalid/react-typescript-tailwind-starter
```

#### Change directory:
```bash
cd react-typescript-tailwind-starter
```

#### Install dependencies:
```bash
npm install
```

### Usage
#### Create a .env.local file from .env.sample
```bash
cp .env.local .env.sample
```

#### Start the dev server
```bash
npm run start:dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser to see the app.

### Configuration
- There is a default ```settings.json``` in the ```.vscode``` folder which you can change as per your requirements.
- There is a default ```extensions.json``` in the ```.vscode``` folder with some recommended extensions which you can also change as per your requirements.

### Scripts
- ```start:dev```: Run the vite development server.
- ```build:prod```: Build the project for production.
- ```start:prod```: Start the project in production mode.
- ```build:staging```: Build the project in staging mode (uses .env.staging for the environment).
- ```start:staging```: Start the project in staging mode.
- ```lint```: Run linting on your project (for more details see the [Linting and Formatting](#linting-and-formatting) section)
- ```format```: Run prettier on your project (for more details see the [Linting and Formatting](#linting-and-formatting) section)

### Linting and Formatting
For linting this project uses [eslint](https://eslint.org/) and, for consistent formatting it uses [prettier](https://prettier.io/) both these tools are pretty much used as a standard in the javascript/typescript ecosystem. If you have some specific settings/configuration you can change/add them in their respective configuration files i.e.: ```.eslintrc.cjs``` and ```.prettierrc```

### Typesafe Environment Variables
To add any environment variables first go to ```src/env.ts``` and add them in the env zod object, for example:
```typescript
export const env = z.object({
  ...
  // client
  VITE_YOUR_ENV_VAR: z.string(),
});
```
Now, if your dev server was running it should probably crash as the environment file is now invalid as per this schema so add this variable to the relevant environment file, and voila you can now access that environment variable in your app as ```import.meta.env.VITE_YOUR_ENV_VAR```. (and you get autocomplete for it as well 😎)

### Contributing
Feel free to contribute to this project by opening pull requests or creating issues, would love to have some feedback and contributions from the community.
