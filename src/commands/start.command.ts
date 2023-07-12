import {CommandClass} from "./command.class";
import {Markup, Telegraf} from "telegraf";
import {IBotCoxtext} from "../context/context.interface";

export class StartCommand extends CommandClass {
    constructor(bot: Telegraf<IBotCoxtext>) {
        super(bot);
    }

    handle() {
        this.bot.start((ctx) => {
            ctx.reply(
                "This is start command\ndo you like the handler?",
                Markup.inlineKeyboard([
                    Markup.button.callback("👍", "like"),
                    Markup.button.callback("👎", "dislike")
                ])
            )
        })
        this.bot.action("like", (ctx) => {
            ctx.answerCbQuery("Thank You!")
            ctx.editMessageText("Cool! 💖")
        })
        this.bot.action("dislike", (ctx) => {
            ctx.answerCbQuery("I see...")
            ctx.editMessageText("Ok...")
        })
    }
}