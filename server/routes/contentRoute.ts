import express, { Request, Response } from 'express';
import { nanoid } from 'nanoid';
import Content, { IContent } from '../models/Content';

const router = express.Router();
router.post('/content', async (req: Request<{}, {}, IContent>, res: Response) => {
    const id = nanoid();
    const content: IContent = new Content({
      _id: id, 
      cells: req.body.cells, 
      bundles: req.body.bundles,
    });
  
    await content.save();
    
    res.status(201).send({ shareId: id });
  });


router.get('/content/:shareId', async (req: Request<{shareId: string}>, res: Response) => {
    const content: IContent | null = await Content.findById(req.params.shareId);
  
    if (content) {
      res.status(200).send(content);
    } else {
      res.status(404).send({ error: 'Content not found' });
    }
});

export default router;
