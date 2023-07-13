import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'endlos.cloud',
      port: 465,
      secure: true,
      auth: {
        user: 'testemail@endlos.cloud',
        pass: 'Testemail@12345',
      },
    });

    const { name, email, message,phone } = req.body;

    const mailOptions = {
      from: email,
      to: ' testemail@endlos.cloud',
      subject: 'Contact Form Submission',
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Message:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Mobile Number:</strong> ${phone}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}
