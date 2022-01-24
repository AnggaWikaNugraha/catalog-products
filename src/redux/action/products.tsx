import ACTION from "../../api/products";
import { LOADING, NOLOADING } from "../reducer/loading";
import { GET_PRODUCTS, ERROR_GET_PRODUCTS, SET_PAGE_SIZE } from "../reducer/products";

export const actProducts = () => {
  return async (dispacth: any, getState: any) => new Promise((resolve: any, reject: any) => {
    ACTION.getProducts(getState().stateProducts.sizePage)
      .then((res: any) => {
        console.log(res)
        dispacth({
          type: GET_PRODUCTS,
          payload: res.data.items
        })
        resolve()
      }).catch((err: any) => {
        dispacth({
          type: ERROR_GET_PRODUCTS,
        })
        reject(err)
      })
  }
  )
}

export const actSetPageSize = () => {
  return async (dispacth: any, getState: any) => {
    dispacth({
      type: SET_PAGE_SIZE,
    })
  }
}