import { useEffect, useState } from "react";
import StripeCheckout from 'react-stripe-checkout';
import Router from "next/router";
import useRequest from "../../hooks/use-request";

const OrderShow = ({ order, currentUser }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const { doRequest, errors } = useRequest({
    url: '/api/payments',
    method: 'post',
    body: {
      orderId: order.id
    },
    onSuccess: () => Router.push('/orders'),
  });

  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };

    findTimeLeft();
    const timerId = setInterval(findTimeLeft, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [order]);

  if (timeLeft < 0) {
    return <div>Order Expired</div>;
  }
  
  return <div>
    Time left to pay: {timeLeft} seconds
    <StripeCheckout 
      token={({ id }) => doRequest({ token: id })}
      stripeKey="pk_test_51ONOOASDow8FcMs2LJM9suCoW7uKXX5ajrr7eZM4wnObhZUKHOmJNYH4uH9T27TIs6yZe9q7bXL9oZI6V0k6JjV100FemkRUP9"
      amount={order.ticket.price * 100}
      email={currentUser.email}
      currency="inr"
    /> 
    {errors}
  </div>;
};

OrderShow.getInitialProps = async (context, client) => {
  const {orderId} = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
}

export default OrderShow;
