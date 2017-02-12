var config = {
   entry: './main.js',

   output: {
      path:'/srv/reactChat/public/',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 7777
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react', 'stage-0'],
               plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
            }
         }
      ]
   }
}

module.exports = config;
