import axios from 'axios';

export const FETCH_CRYPTO_DATA_REQUEST = 'FETCH_CRYPTO_DATA_REQUEST';
export const FETCH_CRYPTO_DATA_SUCCESS = 'FETCH_CRYPTO_DATA_SUCCESS';
export const FETCH_CRYPTO_DATA_FAILURE = 'FETCH_CRYPTO_DATA_FAILURE';

export const fetchCryptoData = () => async (dispatch) => {
  dispatch({ type: FETCH_CRYPTO_DATA_REQUEST });

  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets',
      {
        params: {
          vs_currency: 'usd',
        },
      },
    );

    const filteredData = response.data.filter((crypto) => crypto.id !== 'ethereum');

    dispatch({
      type: FETCH_CRYPTO_DATA_SUCCESS,
      payload: filteredData,
    });
  } catch (error) {
    dispatch({ type: FETCH_CRYPTO_DATA_FAILURE, payload: error });
  }
};
