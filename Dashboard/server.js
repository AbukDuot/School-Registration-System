import express from 'express';
import authRoutes from './routes/auth.js';  

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to St.Daniel University');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});