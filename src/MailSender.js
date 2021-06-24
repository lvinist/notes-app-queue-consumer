/* eslint-disable no-underscore-dangle */
const nodemailer = require('nodemailer');

class MailSender {
  constructor() {
    // eslint-disable-next-line no-underscore-dangle
    this._transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASS,
      },
    });
  }

  sendEmail(targetEmail, content) {
    const message = {
      from: 'Notes app',
      to: targetEmail,
      subject: 'Export Catatan',
      text: 'Terlampir hasil dari ekspor catatan',
      attachment: [
        {
          filename: 'notes.json',
          content,
        },
      ],
    };

    return this._transporter.sendMail(message);
  }
}

module.exports = MailSender;
