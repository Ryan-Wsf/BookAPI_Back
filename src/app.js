const express = require('express');
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');
const errorHandlers = require('./middlewares/errorHandlers');
const sequelize = require('./config/database');

const app = express();

app.use(express.json());
// Routes
app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);

// Error handlers
app.use(errorHandlers);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});