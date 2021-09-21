import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import {tenser} from "rollup-plugin-tenser"

export default {
    input: 'src/main.js',
    output: [
        {
            file: "dist/bundle.esm.js",
            format: "esm"        
        },
        {
            file: 'dist/bundle.cjs.js',
            format: 'cjs',
            plugins: [tenser()]
        }
    ],
    plugins: [json(), nodeResolve(), commonjs()],
    external:[ "vue"]
  };