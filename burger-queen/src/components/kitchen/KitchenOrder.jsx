/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Header from '../Header';
// import OrderList from '../order/orderList';
import { getOrders, putOrder } from '../../controller/order';

const KitchenOrder = () => {
  const [pending, setPending] = useState([]);

  useEffect(() => {
    getOrders().then((resp) => {
      resp.forEach((order) => {
        if (order.status === 'pending') setPending((prev) => ([...prev, order]));
      });
    });
  }, []);

  const handleOrder = (order) => {
    if (order.status === 'pending') {
      const obj = {
        status: 'delivering',
      };
      putOrder(obj, order._id).then((resp) => console.log(resp));
      setPending(pending.filter((item) => item._id !== order._id));
    }

    // setPending(pending.map((order) => (order.status === 'pending'
    // ? { ...order, status: 'delivering' } : order)));
  };

  return (
    <>
      <Header title=" COCINA " />
      <section className="kitchen-container">
        <div className="scroll-kitchen">
          <div className="box-kitchen">
            {
        pending.length > 0
          ? pending.map((element) => (
            <div className="kitchen-card" key={element._id}>
              <div className="header-card">
                <p>
                  {element._id.slice(element._id.length - 5)}
                </p>
                <p>{element.client}</p>
                <p>{element.dateEntry}</p>
              </div>
              <div className="body-card">

                <table className="list">
                  <tbody>
                    {element.products.map((item) => (
                      <tr key={item.product._id}>
                        <td>
                          {item.qty}
                        </td>
                        <td>
                          {item.product.name}
                        </td>
                        <td type="checkbox"><i className="fas fa-check" /></td>
                      </tr>
                    )) }
                  </tbody>
                </table>
                <button type="button" className="order-ready" onClick={() => handleOrder(element)}> LISTO </button>
              </div>
            </div>
          )) : (
            <p className="not-order">No hay productos agregados</p>

          )
  }
          </div>

        </div>

      </section>

    </>
  );
};

export default KitchenOrder;
