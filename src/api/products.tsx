import axios from 'axios';
import { type } from 'os';
import AXIOSBASE from './config';

let ACTION: any = {}

ACTION.getProducts = function(sizePage : number) {
  return AXIOSBASE.GETPRODUCTS.get(`/products?searchCriteria[pageSize]=${sizePage}`)
}

export default ACTION