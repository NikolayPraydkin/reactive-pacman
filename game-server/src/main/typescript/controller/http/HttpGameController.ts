import {Express, Request, Response} from 'express';
import * as SSE from 'express-sse';
import {GameService} from '../../service';

export default (app: Express, gameService: GameService) => {
    app.post('/http/start', (req: Request, res: Response) => {
        const sse = new SSE.default();
        sse.init(req, res);
        const nickname = req.body.toString();
        return res.send(gameService.start(req.cookies.decode("uuid"), nickname));
    });
}
