import { getDefaultConfig } from '@rainbow-me/rainbowkit';

import {
  metaMaskWallet,
  binanceWallet,
  trustWallet
} from '@rainbow-me/rainbowkit/wallets';

import {
  mainnet,
  bsc
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Department of Government Efficiency',
  projectId: '558892bf3d6b4b8c4cce0274241302dc',
  chains: [
    mainnet,
    bsc
  ],
  ssr: true,
  wallets: [
    {
      groupName: 'Recommended',
      wallets: [metaMaskWallet, binanceWallet, trustWallet]
    }
  ]
});