Task Management App
Overview
The Task Management App is a simple web application built with React for managing tasks. It allows users to add, mark as done/undone, and delete tasks. This README provides an overview of the application's features, how to set it up, and how to use it.

Features
Add Tasks: Users can add tasks with a description.

Mark Tasks: Users can mark tasks as done or undone.

Delete Tasks: Users can delete tasks they no longer need.

Loading Indicator: There's a loading indicator to show when tasks are being fetched from the server.

Installation
To run this application locally, follow these steps:

Clone the Repository: https://github.com/vernersgrikitis/to_do_list.git

npm install

npm start

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
