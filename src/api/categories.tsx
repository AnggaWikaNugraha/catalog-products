import AXIOSBASE from './config';

let ACTION: any = {}

ACTION.getCategories = function() {
  return AXIOSBASE.STAGING.get(`/categories`)
}

export default ACTION