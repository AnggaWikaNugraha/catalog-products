export const LOADING = 'loading';
export const NOLOADING = 'noloading';

type IAction = {
  type: string,
}

const initialState: any = {
  loading: false
};

export default function reducerProducts(state = initialState, action: IAction) {
  switch (action.type) {

    case LOADING:
      return { ...state, loading: true };

    case NOLOADING:
      return { ...state, loading: false };

    default:
      return state;
  }
}