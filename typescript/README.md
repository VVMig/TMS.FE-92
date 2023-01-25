# TS project starter

## Prerequisites

- Node.js

## Dependencies config steps

1. `npm init`
2. `npm install typescript -g`
3. `tsc --init`
4. `npm install --save-dev @babel/core @babel/preset-env @babel/cli @babel/preset-typescript`

## Config files examples

### .babelrc

```
{
  "presets": ["@babel/preset-env", "@babel/preset-typescript"]
}
```

### tsconfig.js

```
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "outDir": "./dist",
    "removeComments": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}

```

### package.json

```
"scripts": {
    "build": "tsc && babel dist --out-dir dist"
  },
```
