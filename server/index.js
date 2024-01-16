import express from 'express';
import { default as Sib } from 'sib-api-v3-sdk';
import dotenv from 'dotenv'


dotenv.config()
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const client = Sib.ApiClient.instance
const apiKey = client.authentications['api-key']
apiKey.apiKey = process.env.API_KEY

const sendinblue = new Sib.TransactionalEmailsApi();

app.post('/send-email', async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) throw new Error('Email is required');
    
    const sender = {
      email: 'thatanjan@gmail.com',
      name: 'Anjan',
  }
  const receivers = [
      {
          email: 'edroshan2001@gmail.com',
      },
  ]

    const response = await sendinblue.sendTransacEmail({
      sender,
      to: receivers,
      subject: 'Subscribe to Cules Coding to become a developer',
      textContent: `
      Cules Coding will teach you how to become {{params.role}} a developer.
      `,
      htmlContent: `
      <h1>Cules Coding</h1>
      <a href="https://cules-coding.vercel.app/">Visit</a>
              `,
      params: {
          role: 'Frontend',
      },
  });
    console.log('Email sent successfully:', response);
    res.status(200).json({ success: true });
  } catch (error) {
    console.log('Error sending email:', error.message);
    res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
