module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
        }
    },
    lintOnSave: false, //关闭语法检查

    //代理服务器，解决跨越问题
    devServer: {
        proxy: {
            "/api": {
                target: "http://39.98.123.211",
            },
        },
    },
}