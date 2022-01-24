import axios from "axios";

let AXIOSBASE :any  = {}

AXIOSBASE.GETPRODUCTS = axios.create({
  baseURL : `http://staging-cuan.awalmula.co/rest/default/V1`
})

export default AXIOSBASE;