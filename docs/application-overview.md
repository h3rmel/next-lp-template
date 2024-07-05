## Application Overview

The application is pretty simple. It's a project template using technologies like NextJS, TailwindCSS and others to create a Landing Page.

### Get Started

Prerequisites:

- Node +20.0
- NPM +10.2
- YARN +1.22
- PNPM +8.14

To set up the app, execute the following commands:

```
git clone https://github.com/k4mome/next-lp-template.git

cd next-lp-template

npm|yarn|pnpm install

npm|yarn|pnpm run dev
```

### Commands Summary

Here are the CLI commands that this project contains:

#### `npm|yarn|pnpm run dev`

Starts the application in development mode.

#### `npm|yarn|pnpm run build`

Build the application, returning the files in the `/build` folder.

#### `npm|yarn|pnpm run start`

Starts the build provided by `pnpm run build` command in a server locally.

#### `npm|yarn|pnpm run n:lint`

Lint the code using the rules written in `.eslintrc.json` and `.prettierrc` files through NextJS.

#### `npm|yarn|pnpm run p:check`

Checks the code using the rules written in `.prettierrc`, showing possible organization errors.

#### `npm|yarn|pnpm run p:write`

Checks and fixes organization errors of the code using the rules written in `.prettierrc`

#### `npm|yarn|pnpm run e:check`

Checks the code using the rules written in `.eslintrc.json`, showing possible formatting errors.

#### `npm|yarn|pnpm run e:lint`

Checks and fixes formatting errors of the code using the rules written in `.eslintrc.json`
