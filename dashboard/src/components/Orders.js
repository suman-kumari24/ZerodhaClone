import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Orders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3002/allOrders")
            .then((res) => {
                console.log(res.data); // 🔍 check this
                setOrders(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return ( 
        <div className='orders'>

            {orders.length === 0 ? (
                <div className='no-orders'>
                    <p>You haven't placed any orders today</p>
                    <Link to={"/"} className='btn'>Get started</Link>
                </div>
            ) : (
                <div>
                    <h3>Your Orders</h3>

                    {orders.map((order, index) => (
                        <div key={index} className="order-item">
                            <p><strong>{order.name}</strong></p>
                            <p>Qty: {order.qty}</p>
                            <p>Price: ₹{order.price}</p>
                            <p style={{ color: order.mode === "BUY" ? "green" : "red" }}>
                                {order.mode}
                            </p>
                            <hr />
                        </div>
                    ))}
                </div>
            )}

        </div>
     );
};

export default Orders;