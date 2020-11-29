/*
 * @Descripttion: 工具类
 * @Author: yuyi
 * @Date: 2020-11-29 14:17:10
 * @LastEditors: yuyi
 * @LastEditTime: 2020-11-29 15:16:00
 */
import jsPlumb from 'jsplumb'
export default class jsPlumbUtils {
    static getInstance() {
        console.log(jsPlumb.jsPlumb.getInstance())
        return jsPlumb.jsPlumb.getInstance()
    }
}


