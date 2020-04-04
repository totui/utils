let webpack = require('webpack');

module.exports = function(config) {
    config.set({
        browsers: ['ChromeHeadless'],
        customLaunchers: {
            FirefoxHeadless: {
                base: 'Firefox',
                flags: ['-headless']
            }
        },
        files : [{
            pattern: 'test-context.js', 
            watched: false
        }],
        reporters: [
            'progress',
            'summary'
        ],
        summaryReporter: {
            show: 'all'
        },
        frameworks: ['jasmine'],
        preprocessors: {
            'test-context.js' : [
                'webpack',
                'sourcemap'
            ]
        },
        plugins: [
            'karma-*', 
            '@totalpave/karma-summary-reporter'
        ],
        webpack: {
            mode: "development",
            devtool: 'inline-source-map',
            module: {
                rules : [
                    {
                        test: /\.worker\.js$/,
                        use : [{
                            loader: 'worker-loader'
                        }]
                    },
                    {
                        test: /\.less$/,
                        use: [
                            {
                                loader: 'style-loader/useable'
                            },
                            {
                                loader: 'css-loader'
                            },
                            {
                                loader: 'less-loader',
                                options: {
                                    noIeCompat: true //For IE 8, which we don't support
                                }
                            }
                        ]
                    },
                    {
                        test: /\.css$/,
                        use : [
                            {
                                loader: 'style-loader'
                            },
                            {
                                loader: 'css-loader'
                            }
                        ]
                    },
                    {
                        test: /\.js$/,
                        use :[{
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    '@babel/preset-env',
                                    '@babel/preset-react'
                                ],
                                plugins: [
                                    '@babel/plugin-syntax-dynamic-import',
                                    '@babel/plugin-proposal-class-properties'
                                ]
                            }
                        }],
                        exclude: /node_modules/
                    },
                    {
                        test: /\.(png|jp(e*)g|svg)$/,
                        use : [{
                            loader: 'url-loader',
                            options : {
                                limit: 8000,
                                name: 'res/images/[hash]-[name].[ext]'
                            }
                        }]
                    }
                ]
            },
            plugins: [new webpack.ProvidePlugin({
                "React": "react"
            })]
        },
        webpackServer: {
            noInfo: true
        }
    });
};
