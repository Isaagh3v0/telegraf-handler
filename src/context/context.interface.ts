import {Context} from "telegraf";

export interface SessionData {}

export interface IBotCoxtext extends Context {
    session: SessionData
}