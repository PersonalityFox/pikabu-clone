import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
import {Response, Request, } from 'express'
import { Session } from "express-session";


declare module 'express-session' {
    interface Session {
        userId: number;
    }
}

export type MyContext = {
    em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
    req: Request & {session: Session};
    res: Response;
}