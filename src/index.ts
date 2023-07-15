import { Telegraf } from "telegraf";
import { ConfigService } from "./config/config.service";
import { IConfigService } from "./config/config.interface";
import {IBotCoxtext} from "./context/context.interface";
import {CommandClass} from "./commands/command.class";
import {StartCommand} from "./commands/start.command";

class Bot {
    bot: Telegraf<IBotCoxtext>
    commands: CommandClass[] = []

    constructor(private readonly configService: IConfigService) {
        this.bot = new Telegraf<IBotCoxtext>(this.configService.get("TOKEN"))
    }

    init() {
        this.commands = [new StartCommand(this.bot)]
        for (const command of this.commands) {
            command.handle()
        }
        this.bot.launch()
    }
}

const bot = new Bot(new ConfigService())
bot.init()