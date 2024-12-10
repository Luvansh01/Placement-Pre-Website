const express = require('express');
const studentRoutes = require('./routes/student');
const adminRoutes = require('./routes/admin');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const connectDB = require('./config/db');
connectDB();


app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use('/api/student', studentRoutes);
app.use('/api/admin', adminRoutes);


app.get('/', (req, res) => {
    res.send('Server is running');
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
