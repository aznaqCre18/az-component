// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import sass from "rollup-plugin-sass";
import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";
import svgr from "@svgr/rollup";

export default {
    input: "src/index.js",
    output: [
        {
            file: "dist/index.js",
            format: "cjs",
            sourcemap: true,
        },
        {
            file: "dist/index.es.js",
            format: "es",
            exports: "named",
        },
    ],
    plugins: [
        resolve({
            extensions: [".js", ".jsx", ".ts", ".tsx"],
        }),
        commonjs(),
        sass({
            output: "dist/styles.css",
        }),
        svgr(),
        babel({
            babelHelpers: "bundled",
            exclude: "node_modules/**",
            presets: ["@babel/preset-env", "@babel/preset-react"],
        }),
        terser(),
    ],
};
