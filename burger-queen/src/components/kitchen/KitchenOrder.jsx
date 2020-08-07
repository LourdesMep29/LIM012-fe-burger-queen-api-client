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
    const arrOrder = pending.find((item) => (item.order === order));
    if (arrOrder.status === 'pending') {
      console.log(arrOrder);
      const obj = {
        ...arrOrder,
        status: 'delivering',
      };
      console.log(obj);
      putOrder(obj).then((resp) => console.log(resp));
    }
    // setPending(pending.map((order) => (order.status === 'pending'
    // ? { ...order, status: 'delivering' } : order)));
  };

  return (
    <>
      <Header title="COCINA" />
      <section className="kitchen-container">
        {
        pending.length > 0
          ? pending.map((element) => (
            <div className="kitchen-card" key={element.id}>
              <div className="header-card">
                <p>
                  {element.id}
                </p>
                <p>{element.client}</p>
                <p>{element.dateEntry}</p>
              </div>
              <div className="body-card">

                <table className="list">
                  <tbody>
                    {element.products.map((item) => (
                      <tr>
                        <td>
                          {item.qty}
                        </td>
                        <td>
                          {item.product}
                        </td>
                        <td type="checkbox"><i className="fas fa-check" /></td>
                      </tr>
                    )) }
                  </tbody>
                </table>
                <button type="button" className="order-ready" onClick={() => handleOrder(element.order)}> LISTO </button>
              </div>
            </div>
          )) : (
            <p>No hay productos agregados</p>

          )
  }

      </section>

    </>
  );
};

export default KitchenOrder;
