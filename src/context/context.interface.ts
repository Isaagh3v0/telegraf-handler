import {Context} from "telegraf";

export interface SessionData {
    courseLike: boolean
}

export interface IBotCoxtext extends Context {
    session: SessionData
}