const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Read the key from the environment — never hardcode secrets in source.
// Local dev:  ANTHROPIC_API_KEY=sk-... npm start
const API_KEY = process.env.ANTHROPIC_API_KEY;

app.post('/chat', async (req, res) => {
  if (!API_KEY) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY is not set in the environment.' });
  }
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
  res.json({ status: 'Mitch Poe Empire AI Server is live' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
