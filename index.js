const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static site from /public
app.use(express.static(path.join(__dirname, 'public')));

// Fallback to index.html for single-page site
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
