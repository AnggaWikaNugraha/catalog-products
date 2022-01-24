import ACTION from "../../api/products";
import { GET_PRODUCTS, ERROR_GET_PRODUCTS } from "../reducer/products";

export const actProducts = () => {
  return async (dispacth: any, getState: any) => new Promise((resolve : any, reject : any) => 
    ACTION.getProducts()
    .then((res : any) => {
      dispacth({
        type : GET_PRODUCTS,
        payload : res.data.items
      })
      resolve()
    }).catch((err : any) => {
      dispacth({
        type : ERROR_GET_PRODUCTS,
      })
      reject(err)
    })
  )
}