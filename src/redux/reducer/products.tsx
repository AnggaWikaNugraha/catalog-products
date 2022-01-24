export const GET_PRODUCTS = 'get_products';
export const ERROR_GET_PRODUCTS = 'error_get_products';
export const SET_PAGE_SIZE = 'set_page_size';

type IAction = {
  type: string,
  payload?: any
}

const initialState: any = {
  data: [],
  sizePage : 8
};

export default function reducerProducts(state = initialState, action: IAction) {
  switch (action.type) {

    case GET_PRODUCTS:
      return { ...state, data: action?.payload };

    case ERROR_GET_PRODUCTS:
      return { ...state, data: [] };

    case SET_PAGE_SIZE:
      return { 
        ...state, 
        sizePage : state.sizePage + 8
      };

    default:
      return state;
  }
}