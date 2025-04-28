const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());  // Allow all origins (change if needed)

// Define a simple API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
