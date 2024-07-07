# Project Configuration

The project is bootstrapped using the `npx create-next-app@latest` which is the main way to create a NextJS application. The configured and used tools in this repo are this:

### ESLint

ESLint is a linting tool for JavaScript. By providing specific configuration defined in the `.eslintrc.json` file it prevents developers from making silly mistakes in their code and enforces consistency in the codebase.

### Prettier

This is a great tool for formatting code. It enforces a consistent code style across your entire codebase. By utilizing the "format on save" feature in your IDE you can automatically format the code based on the configuration provided in the `.prettierrc` file. It will also give you good feedback when something is wrong with the code. If the auto-format doesn't work, something is wrong with the code.

### CommitLint

Commitlint is a tool for maintaining consistent commit messages. It ensures that all commit messages follow a defined pattern, making the commit history more organized and easier to understand. By integrating with Git hooks, commitlint can be configured to validate the message before the commit, preventing vague or poorly formatted messages. This contributes to better code documentation and facilitates the generation of accurate changelogs.

To understand more, see the [commitlint.js](https://commitlint.js.org/) and [conventional-changelog/commitlint](https://github.com/conventional-changelog/commitlint).

### Husky

Husky is a tool for automating tasks and enforcing coding standards in Git repositories. It simplifies the management of Git hooks, which are scripts that execute automatically at specific points in the development workflow. Husky streamlines the process of defining and executing these hooks, allowing developers to automate tasks like linting, testing, and code formatting. This automation promotes consistency, reduces errors, and streamlines the development process.

See [typicode.github.io/husky](https://typicode.github.io/husky/) to know more about.

### Lint Staged

Lint Staged is a tool for ensuring code quality and consistency before committing changes to a Git repository. It integrates seamlessly with Git hooks, allowing developers to configure and run linting tasks specifically on staged files. This targeted approach ensures that only code that is intended to be committed is subjected to linting, preventing unnecessary linting of uncommitted changes. Lint Staged streamlines the development workflow by automating linting checks and promoting code quality at the point of commit.

Take a look on [github.com/lint-staged](https://github.com/lint-staged/lint-staged) to know more about.