import sgMail from '@sendgrid/mail';

const sendMail = (msg) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error) => {
      console.error(error);
    });
};

const orderConfirmed = (orderInfo) => {
  const msg = {
    to: `${orderInfo.email}`,
    from: process.env.SENDGRID_SENDER,
    subject: 'Thank you for your order!',
    text: 'Your order has been confirmed!',
    html: `<h1>${orderInfo.name}, thank you for your order!</h1>
    <p>Your order has been confirmed!</p>
    <p>Your order will be shipped to the following address: ${orderInfo.address}</p>
    <p>Your order will be shipped to the following city: ${orderInfo.city}</p>
    <p>Your order will be shipped to the following zipcode: ${orderInfo.zipcode}</p>
    <p>Your order status is: ${orderInfo.status}</p>`,
  };

  sendMail(msg);
};

const orderError = (orderInfo) => {
  const msg = {
    to: `${orderInfo.email}`,
    from: process.env.SENDGRID_SENDER,
    subject: 'There was a problem with your order!',
    text: 'Your order has not been confirmed!',
    html: `<h1>${orderInfo.name}, there was a problem with your order!</h1>
    <p>Your order has not been confirmed, try to create a new order!</p>`,
  };

  sendMail(msg);
};

export { orderConfirmed, orderError };
