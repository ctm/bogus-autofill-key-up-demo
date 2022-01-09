const path = require('path');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');

const distPath = path.resolve(__dirname, "dist");
module.exports = (env, argv) => {
  return {
      devServer: {
          static: {
              publicPath: distPath,
              staticOptions: {
                  compress: argv.mode === 'production',
                  port: 8000,
              },
          },
      },
    entry: './bootstrap.js',
    output: {
      path: distPath,
      filename: "mb2-web.js",
      webassemblyModuleFilename: "mb2-web.wasm"
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: './static', to: distPath },
        ],
      }),
      new WasmPackPlugin({
        crateDirectory: ".",
        extraArgs: "--no-typescript",
      })
    ],
    experiments: {
      syncWebAssembly: true,
    },
    watch: false,
   module: {
        rules: [
            {
                test: /\.svg$/i,
                type: 'asset/inline',
                generator: {
                    dataUrl: content => {
                        content = content.toString();
                        return svgToMiniDataURI(content);
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|jpg)$/i,
                type: 'asset'
            }
        ]
    },
  };
}
