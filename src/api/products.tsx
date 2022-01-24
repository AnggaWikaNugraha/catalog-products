import axios from 'axios';
import { type } from 'os';
import AXIOSBASE from './config';

let ACTION: any = {}

ACTION.getProducts = function() {
  return AXIOSBASE.GETPRODUCTS.get(`/products?searchCriteria[pageSize]=10`)
}

export default ACTION