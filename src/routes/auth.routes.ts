import { Router } from 'express';

const router = Router();

router.get('/auth-test', (req, res) => {
  res.send('Auth route working!');
});

export default router;