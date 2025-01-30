import nodemailer from 'nodemailer';
import config from '../../config';

// export const sendEmail = async (to: string, html: string, subject: string) => {
//   console.log(to);
//   try {
//     const transporter = nodemailer.createTransport({
//       host: 'smtp.gmail.com',
//       port: 587,
//       secure: false,
//       auth: {
//         // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//         user: config.mail,
//         pass: config.mail_password,
//       },
//     });

//     const result = await transporter.sendMail({
//       from: 'akonhasan680@gmail.com', // sender address
//       to, // list of receivers
//       subject, // Subject line
//       text: '', // plain text body
//       html, // html body
//     });
//     console.log(result);
//   } catch (error) {}
// };

export const sendEmail = async (to: string, html: string, subject: string) => {
  console.log(to);
  try {
    const transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 587,
      secure: false,
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: config.mail,
        pass: config.mail_password,
      },
    });

    const result = await transporter.sendMail({
      from: 'devemdad@gmail.com', // sender address
      to, // list of receivers
      subject, // Subject line
      text: '', // plain text body
      html, // html body
    });
    console.log(result);
  } catch (error) {}
};

export const sendBulkEmail = async (
  recipients: string[],
  html: string,
  subject: string,
) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 587,
      secure: false,
      auth: {
        user: config.mail,
        pass: config.mail_password,
      },
    });

    // Convert the recipients array into a single comma-separated string
    const to = recipients.join(',');

    const result = await transporter.sendMail({
      from: 'devemdad@gmail.com', // sender address
      to, // list of receivers
      subject, // Subject line
      text: '', // plain text body
      html, // HTML body
    });
    console.log(result);
  } catch (error) {
    console.error('Error sending bulk email:', error);
  }
};
