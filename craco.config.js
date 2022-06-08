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
                            // '@border-radius-base': '8px',
                            '@arrow-border-radius': '8px',
                            '@typography-title-font-weight': '350',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};