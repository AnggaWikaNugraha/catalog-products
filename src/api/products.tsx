import axios from 'axios';

export function getProducts() {
  return axios.get(`https://staging-cuan.awalmula.co/rest/default/V1/products?searchCriteria[pageSize]=10`)
}