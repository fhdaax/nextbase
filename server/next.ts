import { https, Response } from 'firebase-functions';
import next from 'next';

const nextjsServer = next({
  dev: false,
});

const requestHandler = nextjsServer.getRequestHandler();

const server = async (req: https.Request, res: Response) => {
  await nextjsServer.prepare();
  return requestHandler(req, res);
};

export default server;
