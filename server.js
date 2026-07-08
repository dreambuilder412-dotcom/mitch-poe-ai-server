const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Serve the Family House Built-In Bed Plans construction package
app.use('/plans', express.static(path.join(__dirname, 'plans')));

// API key is read from the environment — never hardcode secrets in source.
// See .env.example and the README for setup.
const API_KEY = process.env.ANTHROPIC_API_KEY;

if (!API_KEY) {
  console.warn(
    'WARNING: ANTHROPIC_API_KEY is not set. The /chat endpoint will return 500 ' +
    'until it is configured. See .env.example.'
  );
}

app.post('/chat', async (req, res) => {
  if (!API_KEY) {
    return res.status(500).json({
      error: 'Server is missing ANTHROPIC_API_KEY. Set it in the environment (see .env.example).'
    });
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
  res.json({
    status: 'Mitch Poe Empire AI Server is live',
    plans: '/plans/  (Family House Built-In Bed Plans — construction package)'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
