import axios from "axios";

let AXIOSBASE :any  = {}

AXIOSBASE.STAGING = axios.create({
  baseURL : `https://staging-cuan.awalmula.co/rest/default/V1`
})

export default AXIOSBASE;