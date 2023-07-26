// Create web server that will return this object as JSON
// http://localhost:3000/api/members
// http://localhost:3000/api/comments
// http://localhost:3000/api/posts
// http://localhost:3000/api/profile

const express = require('express');
const path = require('path');
const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API routes
app.use('/api/members', require('./routes/api/members'));
app.use('/api/comments', require('./routes/api/comments'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
