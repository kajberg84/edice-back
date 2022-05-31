import nodemailer from 'nodemailer';
import StatusCodes from '../helpers/StatusCodes.js';

//Fungerar ej
const orderMail = async (req, res) => {
  console.log(req);
  const { name, email } = req;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: 'quizzie_89@hotmail.com',
      subject: `Nytt meddelande från ${email}`,
      html: `<p>Du har ett nytt meddelande från kontaktformuläret</p><br>
<p><strong>Namn: </strong> ${name} </p><br>
 `,
    });

    console.log('Message Sent');
  } catch (err) {
    console.log(err);
  }
};

export default orderMail;
