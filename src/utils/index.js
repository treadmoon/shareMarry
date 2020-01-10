import { getTicket } from "@/server/index.js"
import { config } from "@/config/index.js"

export async function initwx(wx) {
    let result = await getTicket(config)
    let resConfig = result.data
    console.log('resConfig===>', resConfig);
    wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: resConfig.appId, // 必填，公众号的唯一标识
        timestamp: resConfig.timestamp, // 必填，生成签名的时间戳
        nonceStr: resConfig.noncestr, // 必填，生成签名的随机串
        signature: resConfig.signature,// 必填，签名
        jsApiList:
            ['showAllNonBaseMenuItem', 'showMenuItems', 'onMenuShareAppMessage',] // 必填，需要使用的JS接口列表
    });

    wx.ready(function () {
        console.log('成功了');

        wx.showOptionMenu()
        wx.showAllNonBaseMenuItem();
        wx.showMenuItems({
            menuList: ['menuItem:share:appMessage'] // 要显示的菜单项，所有menu项见附录3
        });
        wx.onMenuShareAppMessage({
            title: 'hello world', // 分享标题
            desc: 'TTTTTEST', // 分享描述
            link: 'https://mlcjq.com/eg.png', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: config.url, // 分享图标
            success: function () {
                // 设置成功
            }
        })
    });

    wx.error(function (res) {
        console.log('失败了', res);
    });

    // wx.checkJsApi({
    //     jsApiList: ['onMenuShareAppMessage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
    //     success: function (res) {
    //         // 以键值对的形式返回，可用的api值true，不可用为false
    //         // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
    //         console.log('checkJsApi', res);
    //     }
    // });
}

