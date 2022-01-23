export const GET_PRODUCTS = 'get_products';
export const ERROR_GET_PRODUCTS = 'error_get_products';

type IAction = {
  type: string,
  payload?: any
}

const initialState: any = {
  data: []
};

export default function reducerProducts(state = initialState, action: IAction) {
  switch (action.type) {

    case GET_PRODUCTS:
      return { ...state, data: action?.payload };

    case ERROR_GET_PRODUCTS:
      return { ...state, data: [] };

    default:
      return state;
  }
}