// Path lets us map out where files should be:
const path = require("path");

// HtmlWebpackPlugin will let us inject html into our app
const HtmlWebpackPlugin = require('html-webpack-plugin');

// WasmPackPlugin does the magic of building our application
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');

module.exports = {
    experiments: {
        // This allows WebAssembly to be bundled
        asyncWebAssembly: true
    },
    // Its good practice to specify the mode
    // But this can also be done via `--mode`
    mode: process.env.NODE_ENV || "development",
    // This entry should be pathing to the index.js
    entry: path.join(__dirname, "src/index.js"),
    output: {
        // Always clean your output folder!
        // Otherwise, you can end up with dangling code when developing.
        clean: true,
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    plugins: [
        // We point our WasmPackPlugin to the location of the
        // the crates `Cargo.toml` file. Never the root file.
        new WasmPackPlugin({
            crateDirectory: path.join(__dirname, "hello-world")
        }),
        // Some basic boiler plate,
        // Device width meta lets us make it mobile friendly.
        new HtmlWebpackPlugin({
            meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
            // This will be used later
            templateContent: "<div id='app'></div>",
            inject: "body"
        })
    ],
    devServer: {
        hot: 'only',
    },
    resolve: {
        // A little overkill for our tutorial but useful.
        extensions: [".ts", ".tsx", ".js", ".jsx", '.mts', '.mjs', '...'],
    }
}
