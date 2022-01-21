import React from 'react';
import data from '../data/order';
import OrderBasket from './OrderBasket';

function OrderList() {
    const Orders = data.orders;
    console.log(Orders);
    return (
        <div className="ordersData">
            <h1>Here is your order</h1>
            <OrderBasket OrderBasket={OrderBasket} />
            <div className="mapping">
                <ul>
                <li>hellllllllllo</li>
                    {Orders.map((order) => {
                        return(
                        <li> 
                            {order.first_name}
                        </li>
                        // <OrderList {Orders.first_name}/>
                        // console.log(order);
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
export default OrderList;