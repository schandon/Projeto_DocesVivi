const path = require('path');

module.exports = {
  entry: './src/index.js',  // ou o caminho para o seu arquivo de entrada
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: 'images/',  // Diretório onde as imagens serão armazenadas após o build
              publicPath: 'images/',  // URL base para as imagens no navegador
            },
          },
        ],
      },
      // Outras regras para JavaScript, CSS, etc.
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
};
