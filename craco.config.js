const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        //Дефолтные значения
                        //https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
                        modifyVars: {
                            //Root
                            '@primary-color': '#1890ff',
                            '@border-radius-base': '6px',
                            //Card
                            '@card-padding-base': '12px',
                            '@card-head-padding': '8px',
                            //Typography
                            '@typography-title-font-weight': '350',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};