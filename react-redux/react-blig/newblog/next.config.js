/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/6/28
 * 以进行配置文件的编写了，建立一个next.config.js.这个就是Next.js的总配置文件
 * 有了这个@zeit/next-css包，它的主要功能就是让Next.js可以import 加载CSS文件
 *
 */
let withCss;


if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}
withCss = require('@zeit/next-css') //
module.exports = withCss({
})

