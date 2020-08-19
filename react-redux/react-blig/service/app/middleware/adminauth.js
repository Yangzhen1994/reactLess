/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/7/28
 */
module.exports = options =>{
    return async function adminauth(ctx, next){
        console.log(ctx.session.openId)
        if(ctx.session.openId){
            await next()
        }else{
            ctx.body={data:'没有登录'}
        }
    }
}
