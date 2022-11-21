const path = require('path');

 

module.exports = {

    output: {

        path: path.join(__dirname, '/dist'),

        filename: 'index.bundle.js',

    },

    devServer: {

        port: 3000,
        historyApiFallback: true

    },


    module: {

        rules: [

            {

                test: /\.(js|jsx)$/,

                exclude: /node_modules/,

                use: {

                    loader: 'babel-loader'

                }

            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 10000
                  }
                }
              ]
            },


 

        ]

    }

    

};