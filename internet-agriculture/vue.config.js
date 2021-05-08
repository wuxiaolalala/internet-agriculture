const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
    baseUrl: './',
    assetsDir: 'static',
    productionSourceMap: false, // 关闭生产环境的 source map
    devServer: {
        proxy: {
            '/user':{
                target:'http://148.70.194.24:8188/',
                changeOrigin:true,
                pathRewrite:{
                    '/user':''
                }
            },
            '/advice':{
                target:'http://148.70.194.24:8188/',
                changeOrigin:true,
                pathRewrite:{
                    '/advice':''
                }
            },
            '/ueditor':{
                target:'http://148.70.194.24:8188/',
                changeOrigin:true,
                pathRewrite:{
                    '/ueditor':''
                }
            },
            '/app':{
                target:'http://148.70.194.24:8188/',
                changeOrigin:true,
                pathRewrite:{
                    '/app':''
                }
            },
            '/file':{
                target:'http://148.70.194.24:8188/',
                changeOrigin:true,
                pathRewrite:{
                    '/file':''
                }
            },
            '/praticeLog':{
                target:'http://148.70.194.24:8188/',
                changeOrigin:true,
                pathRewrite:{
                    '/praticeLog':''
                }
            },
            '/score':{
                target:'http://148.70.194.24:8188/',
                changeOrigin:true,
                pathRewrite:{
                    '/score':''
                }
            },
            '/dict':{
                target:'http://148.70.194.24:8188/',
                changeOrigin:true,
                pathRewrite:{
                    '/dict':''
                }
            },
            '/reward':{
                target:'http://148.70.194.24:8188/',
                changeOrigin:true,
                pathRewrite:{
                    '/reward':''
                }
            },
            '/train':{
                target:'http://148.70.194.24:8188/',
                changeOrigin:true,
                pathRewrite:{
                    '/train':''
                }
            }
        }
    },
    configureWebpack: config => {
        const plugins = [];
                    plugins.push(
            new MomentLocalesPlugin(),
        )
            plugins.push(
                new MomentLocalesPlugin({
                    localesToKeep: ['es-us', 'ru'],
                }),
        )
        return { plugins }
    }
}
// A code block
require('events').EventEmitter.defaultMaxListeners = 0;