import express from 'express';

const router = express.Router();

router.get('/data', (req, res) => {
  res.send('Data route works!');
});

export default router;