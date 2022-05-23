# Webpack swc boilerplate

This is a simple configuration using webpack and SWC.

Features: 
- SWC for fast transpiling
- Webpack configured to import images or css files
- Jest
- ESLint

This project use `pnpm` to manage dependencies.

## Building and running on localhost

First install dependencies:

```sh
pnpm install
```

To run in hot module reloading mode:

```sh
pnpm start
```

To create a production build:

```sh
pnpm run build:prod
```

To create a development build:

```sh
pnpm run build:dev
```

## Running

Open the file `dist/index.html` in your browser

## Testing

To run unit tests:

```sh
pnpm test
```
