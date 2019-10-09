const path = require('path');

module.exports = {
	entry: {
		app: './react/app.tsx',
		styles: './public/scss/app.scss'
	},
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'scripts/[name]-bundle.js'
    },    

    // devtool: "#eval-source-map", // < debugging
    mode: 'production',
	module: {
		rules: [
			{
				exclude: /(node_modules|public|app_api|app_server|bin)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react', "stage-2"],
					plugins: ["transform-class-properties"]
				}
            },
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                      happyPackMode: true
                    }
                }],
                exclude: /node_modules/,
            },       
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
					presets: ['es2015', 'react', "stage-2"],
					plugins: ["transform-class-properties"]
                }
            },
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'public/styles/[name].css',
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader?-url'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
		]
	}
};