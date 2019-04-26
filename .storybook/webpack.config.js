const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
    // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    /*config.module.rules.push({
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
    });*/

    /*const util = require('util');
    console.log(util.inspect( [...config.module.rules], {showHidden: false, depth: null}));*/


    config.module.rules.push({
        test: /\.less$/,
        use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' }, // translates CSS into CommonJS
            {
                loader: 'less-loader', // compiles Less to CSS
                options: {
                    modifyVars: {
                        //'primary-color': '#1DA57A',
                        //'link-color': '#1DA57A',
                        //'border-radius-base': '2px',
                        //'font-size-base': '20px',
                    },
                    javascriptEnabled: true,
                }
            }
        ]
    });

    config.module.rules.push({
        test: /\.vue$/,
        loader: 'storybook-addon-vue-info/loader',
        enforce: 'post'
    });

    return config;
};