export const GET_CATEGORY = 'get_category';
export const ERROR_GET_CATEGORY = 'error_get_category';

type IAction = {
  type: string,
  payload?: any
}

const initialState: any = {
  data: [],
};

export default function reducerCategories(state = initialState, action: IAction) {
  switch (action.type) {

    case GET_CATEGORY:
      return { ...state, data: action?.payload };

    case ERROR_GET_CATEGORY:
      return { ...state, data: [] };

    default:
      return state;
  }
}