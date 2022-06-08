const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#1890ff',
                            '@card-padding-base': '12px',
                            '@card-head-padding': '8px',
                            '@border-radius-base': '4px',
                            // '@arrow-border-radius': '8px',
                            '@typography-title-font-weight': '350',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};