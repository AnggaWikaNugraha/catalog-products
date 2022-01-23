import { getProducts } from "../../api/products";
import { GET_PRODUCTS, ERROR_GET_PRODUCTS } from "../reducer/products";

export const actProducts = () => {
  return async (dispacth: any, getState: any) => {

      await getProducts().then((res : any) => {
          if (res.status !== 200) {
              alert('error')
              dispacth({
                  type: ERROR_GET_PRODUCTS,
              })
          } else {
              dispacth({
                  type: GET_PRODUCTS,
                  payload: res.data.items
              })
          }
      }).catch((er : any) => {
          alert(er)
          dispacth({
              type: ERROR_GET_PRODUCTS,
          })
      })

  }
}