#!/usr/bin/env node
"use strict";
const linaria = require("@linaria/esbuild");
const esbuild = require("esbuild");
esbuild.build({
  logLevel: "debug",
  bundle: true,
  minify: false,
  sourcemap: false,
  target: "es6",
  entryPoints: ["src/index.tsx"],
  plugins: [
    linaria.default({
      babelOptions: {
        presets: ["@babel/preset-typescript"]
      },
    }),
  ],
});
