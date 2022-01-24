import AXIOSBASE from './config';

let ACTION: any = {}

ACTION.getProducts = function(sizePage : number) {
  return AXIOSBASE.STAGING.get(`/products?searchCriteria[pageSize]=${sizePage}`)
}

export default ACTION