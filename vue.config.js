/*
 * @Descripttion: 
 * @Author: yuyi
 * @Date: 2020-11-29 14:36:20
 * @LastEditors: yuyi
 * @LastEditTime: 2020-11-29 14:36:36
 */
let path = require('path');

function resolve (dir) {
    path.join(__dirname, dir);
}
module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['js', 'vue'],
            alias: {
                '@': resolve('src')
            }
        }
    }
}