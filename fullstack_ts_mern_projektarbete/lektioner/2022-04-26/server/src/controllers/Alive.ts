import StatusCode from "../utils/StatusCode";
import { Request, Response } from 'express'

const alive = (Request: Request, Response: Response) => {
    Response.status(StatusCode.OK).send('Connected to typescript API');
}

export default {
    alive
}