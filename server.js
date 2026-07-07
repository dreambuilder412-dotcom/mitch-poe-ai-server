const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Serve the Family House Built-In Bed Plans construction package
app.use('/plans', express.static(path.join(__dirname, 'plans')));

const API_KEY = 'sk-ant-api03-IJdaDR2HG699RRnB4XBNc8BRMZJL-1HZ9Y2YX7aE0RTGksaQGqa4-ke6go7iUg7H5JpgGybkU-TH8FgkdqludQ-23tUfwAA';

app.post('/chat', async (req, res) => {
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/', (req, res) => {
  res.json({
    status: 'Mitch Poe Empire AI Server is live',
    plans: '/plans/  (Family House Built-In Bed Plans — construction package)'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
