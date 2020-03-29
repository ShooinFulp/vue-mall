import axios from './axios';

export function getBanners(goods_id) {
    return axios({
        url: '/api/public/v1/goods/detail',
        params: {
            goods_id
        }
    })
}


export class DetailI{
    constructor(data){
        this.name = data.goods_name;
        this.price = data.goods_price
    }
}