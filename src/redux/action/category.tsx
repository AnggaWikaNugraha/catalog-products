import ACTION from "../../api/categories";
import { ERROR_GET_CATEGORY, GET_CATEGORY } from "../reducer/category";

export const actCategories = () => {
  return async (dispacth: any, getState: any) => new Promise((resolve: any, reject: any) => {
    ACTION.getCategories()
      .then((res: any) => {
        console.log(res.data.children_data)
        dispacth({
          type: GET_CATEGORY,
          payload: res.data.children_data
        })
        resolve()
      }).catch((err: any) => {
        dispacth({
          type: ERROR_GET_CATEGORY,
        })
        reject(err)
      })
  }
  )
}