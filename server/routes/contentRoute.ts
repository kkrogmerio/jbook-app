import express, { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import Content, { IContent } from '../models/Content';

const router = express.Router();

router.post('/content', async (req: Request, res: Response) => {
  const id = uuidv4();
  const content: IContent = new Content({ _id: id, content: req.body.content });
  await content.save();
  const url = `${req.protocol}://${req.get('host')}/${id}`;
  res.status(201).send({ id, url });
});

router.get('/content/:id', async (req: Request, res: Response) => {
  const content = await Content.findById(req.params.id);
  if (content) {
    res.status(200).send(content);
  } else {
    res.status(404).send({ error: 'Content not found' });
  }
});

export default router;
