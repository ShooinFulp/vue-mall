import axiso from './axios'

export function getBannerData() {
    return axiso({

        url: '/home/multidata'
    })
}
export function getGoodsData(pagenum) {
    return axiso({
        url: '/api/public/v1/goods/search',
        params: { pagenum }
    })
}