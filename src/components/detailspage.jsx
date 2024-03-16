import React, { useEffect, useRef } from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCryptoData } from './action';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/detailpage.css';
import Chart from 'chart.js/auto';

function DetailPage() {
  const { cryptoId } = useParams();
  const cryptoData = useSelector((state) => state.cryptoData);
  const crypto = cryptoData.data.find((crypto) => crypto.id === cryptoId);
  const dispatch = useDispatch();
  const chartRef = useRef(null);

  useEffect(() => {
    if (!cryptoData.data.length) {
      dispatch(fetchCryptoData());
    }
  }, [dispatch, cryptoData.data.length]);

  useEffect(() => {
    if (crypto) {
      const labels = Object.keys(crypto).filter(key => key !== 'image');
      const data = Object.values(crypto).filter(value => typeof value === 'number');

      if (labels.length > 0 && data.length > 0) {
        const ctx = chartRef.current.getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels.map(key => key.replace(/_/g, ' ').toUpperCase()),
            datasets: [{
              label: 'Crypto Details',
              data: data,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    }
  }, [crypto]);

  if (!crypto) {
    return <div className="error-message">Crypto not found</div>;
  }

  return (
    <div className="detail-page">
      <Link to="/" className="home-link">
        <div className="back-button">
          <FontAwesomeIcon icon={faArrowLeft} className="back-icon" />
        </div>
      </Link>
      <div className="container crypto-detail text-center justify-content-center">
        <div className="row crypto-shadow  justify-content-center">
          <div className="col-md-6 ">
            <table className="table table-striped">
              <tbody className='container'>
                <tr>
                  <td colSpan="2" className=" justify-center">
                    <img src={crypto.image} alt={`${crypto.name} Logo`} />
                    <h2>{crypto.name}</h2>
                    <div className=" container">
            <canvas className='crypto-graph' ref={chartRef} width="400" height="200"></canvas>
          </div>
                  </td>
                </tr>
                {Object.entries(crypto).map(([key, value]) => (
                  <tr key={key}>
                    <td>{key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</td>
                    <td style={{ maxHeight: '100px', overflowY: 'auto' }}>{value}</td>
                  </tr>
            
                ))}
              </tbody>
            </table>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
