import {Telegraf} from "telegraf";
import {IBotCoxtext} from "../context/context.interface";

export abstract class CommandClass {
    constructor(public bot: Telegraf<IBotCoxtext>) {}
    abstract handle(): void;
}