import Layout from "@/components/Layout";
import {useEffect, useState} from "react";
import axios from "axios";

export default function OrdersPage() {
  const [orders,setOrders] = useState([]);
  useEffect(() => {
    axios.get('/api/orders').then(response => {
      setOrders(response.data);
    });
  }, []);

  const handleConfirme = (orderId) => {
    axios.put(`/api/orders?id=${orderId}`).then(response => {
      // Handle the response, if needed
      setOrders(prevOrders => {
        // Find the order that was confirmed
        const updatedOrders = prevOrders.map(order => {
          if (order._id === orderId) {
            // Update the paid status to true
            return { ...order, paid: true };
          }
          return order;
        });
        return updatedOrders;
      });
    });
  };
  

  return (
    <Layout>
      <h1>Orders</h1>
      <table className="basic">
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirme</th>
            <th>Recipient</th>
            <th>Products</th>
          </tr>
        </thead>
        <tbody>
        {orders.length > 0 && orders.map(order => (
          
          <tr key={order._id}>
            <td>{(new Date(order.createdAt)).toLocaleString()}
            </td>
            <td className={order.paid ? 'text-green-600' : 'text-red-600'}>
              {order.paid ? 'YES' : 'NO'} 
              <button className="btn btn-primary p-3 gap-3 m-5" onClick={()=> handleConfirme(order._id)} >Confirm</button>
            </td>
            <td>
              Name : {order.name} <br></br> email : {order.email} <br></br> phone : {order.phone}<br />
              city/postalCode/country : {order.city}  {order.postalCode} {order.country}<br />
              address : {order.streetAddress}
            </td>
            <td>
              {order.line_items.map(l => (
                <>
                  {l.price_data?.product_data.name} x
                  {l.quantity}<br />
                </>
              ))}
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </Layout>
  );
}
