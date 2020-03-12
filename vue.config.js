module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': "@/assets",
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'pages': '@/pages',
                'router': '@/router',
                'store': '@/store',
                'views': '@/views'
            }
        }
    }
}