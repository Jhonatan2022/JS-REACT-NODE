import { useContext } from 'react';
import { AppContext } from '../../Context';
import { Map } from '../../Components/Map';
import './styles.css';

function Success() {
  const { state } = useContext(AppContext);
  const { buyer } = state;


  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido lelgara en 3 dias a tu direccion:</span>
        <div className="Success-map">
          <Map />
        </div>
      </div>
    </div>
  );
}

export { Success };
