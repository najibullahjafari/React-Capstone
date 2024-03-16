import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Import Link
import { fetchCryptoData } from './action';
import '../style/homepage.css';

function HomePage() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.cryptoData);

  useEffect(() => {
    dispatch(fetchCryptoData());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="loading">
        <FontAwesomeIcon icon={faSpinner} className="loading-icon" spin />
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        Error:
        {error.message}
      </div>
    );
  }

  return (
    <div className="crypto-list container">
      {data.map((crypto) => (
        <Link
          to={`/crypto/${crypto.id}`}
          key={crypto.id}
          className="crypto-card card shadow-sm m-1"
        >
          <img src={crypto.image} alt={`${crypto.name} Logo`} />
          <h2 className="crypto-name">{crypto.name}</h2>
          <p className="price">
            Price: $
            {crypto.current_price}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
