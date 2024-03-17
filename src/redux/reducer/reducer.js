import {
  FETCH_CRYPTO_DATA_REQUEST,
  FETCH_CRYPTO_DATA_SUCCESS,
  FETCH_CRYPTO_DATA_FAILURE,
} from '../../components/action';

const initialState = {
  loading: false,
  data: [],
  error: null,
};
// eslint-disable-next-line default-param-last
const cryptoDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CRYPTO_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_CRYPTO_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_CRYPTO_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default cryptoDataReducer;
