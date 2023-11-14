import { Router, Request, Response } from 'express';
import Debug from "debug";
const debug = Debug("Example:examples");
const router = Router();

router.get('/status', (req: Request, res: Response) => {
    debug("status");
    res.status(200).send();
});


export default router;