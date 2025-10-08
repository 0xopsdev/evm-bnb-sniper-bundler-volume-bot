# 💹 BNB Chain Trading Bot ( support all EVM chains )
**Professional Sniper, Bundler & Volume Automation for PancakeSwap and Four.meme**

A high-performance trading bot infrastructure built for the **BNB Smart Chain**, offering automated token deployment, liquidity pool creation, and advanced trading strategies. Designed with precision, speed, and enterprise-grade reliability — ideal for developers, traders, and liquidity engineers.

## 🧠 Overview
The **BNB Chain Trading Bot** enables seamless automation of token operations and trading strategies on **PancakeSwap V3** and **Four.meme**.  
It includes everything from token deployment to liquidity provisioning, volume simulation, and bundled transaction execution via **bloXroute** for MEV protection.

## How it works
### Sniper flow
Load targets from config → query router for expected out → apply configured slippage → perform WBNB → TOKEN swap → emit tx hash/receipt → optionally notify via Telegram.
### Copy‑Trader flow
Subscribe to pending mempool transactions → filter by leader wallets → detect router swap intents → mirror with your position sizing and caps → optionally notify.
### Bundler flow
Read a sequence of routes from config → execute each respecting slippage/deadline settings → suitable base for multicall-style extensions.
### Volume Bot flow
Loop on an interval → small buys → approve when needed → partial or full sells → repeat with built‑in rate limiting.

## ✨ Key Features
- 🚀 **Token Deployment** — Auto-generate and deploy ERC20 tokens with customizable supply, name, and symbol  
- 💧 **Liquidity Management** — Instantly create liquidity pools and provide liquidity on PancakeSwap V3  
- ⚡ **Transaction Bundling** — Integrate with bloXroute to enable atomic, front-run protected operations  
- 🎯 **Trading Strategies** — Execute **sniper**, **bundler**, and **volume-generation** strategies  
- 🔒 **Security First** — Built with **OpenZeppelin** contracts, hardened with audits and local test suites  
- 🧪 **Fork Testing** — Use **BSC mainnet forking** for safe and realistic testing before live deployment  
- 🪙 **Multi-Wallet Orchestration** — Create, manage, and fund multiple wallets for distributed trading  

## 🏗️ Architecture
The bot follows a **modular architecture** designed for flexibility and scalability.

| Component | Description |
|------------|-------------|
| **Smart Contracts** | Solidity-based ERC20 token & liquidity management contracts |
| **Transaction Bundler** | bloXroute API for atomic multi-tx execution and MEV protection |
| **Liquidity Protocols** | Uniswap V3 SDK for PancakeSwap V3 interaction |
| **Development Framework** | Hardhat for compilation, testing, deployment, and simulation |

## 🧰 Technology Stack

| Component | Technology |
|------------|-------------|
| Smart Contracts | Solidity ^0.8.9 |
| Framework | Hardhat ^2.19.5 |
| Testing | Hardhat Toolbox |
| DEX Integration | Uniswap V3 SDK |
| Security | OpenZeppelin Contracts |
| RPC Provider | QuickNode |
| MEV Protection | bloXroute |

## ⚙️ Core Modules

- **Wallet Generation** — Create and manage multiple sub-wallets derived from a single master key  
- **BNB Distribution** — Distribute BNB from the master wallet to all sub-wallets automatically  
- **Token Deployment** — Deploy tokens using the Four.meme factory contract  
- **Auto-Buy Execution** — Simultaneous buy transactions from all generated wallets  
- **Balance Tracking** — Retrieve and log both BNB and token balances  
- **Exported Data** — Automatically save wallet and transaction data in JSON format  

## ▶️ Usage

```bash
node bundler.js
```

This command will:

1. Generate wallets (`wallet_details.json`)  
2. Distribute BNB to sub-wallets  
3. Deploy a new token  
4. Execute buy transactions  
5. Save all transaction data to `token_details.json`  

## 🪙 Contract Information

| Parameter | Value |
|------------|--------|
| **Network** | Binance Smart Chain (Mainnet or Testnet) |
| **Factory Contract** | 0x5c952063c7fc8610FFDB798152D69F0B9550762b |
| **Launch Cost** | ~0.005 BNB |
| **Liquidity Threshold** | Auto-liquidity at 24 BNB |
| **Explorer** | https://bscscan.com/address/0x5c952063c7fc8610FFDB798152D69F0B9550762b |

## 📁 Example Output Files

**wallet_details.json**
```json
[
  {
    "index": 0,
    "address": "0xabc123...",
    "privateKey": "0xdef456..."
  }
]
```

**token_details.json**
```json
{
  "address": "0x987654...",
  "name": "TestMeme",
  "symbol": "TME",
  "supply": "1000000",
  "transactions": [
    { "hash": "0x123...", "blockNumber": 38192612 }
  ]
}
```

## 🧾 Prerequisites

Before running the bot, make sure you have:

- **Node.js** v16.x or higher  
- **npm** v8.x or higher  
- **RPC Access** — QuickNode or similar BSC RPC endpoint  
- **bloXroute Account** — API credentials for transaction bundling  
- **Private Key** — Funded wallet on BNB Smart Chain  

## ⚠️ Security Guidelines

- 🔐 Never commit `.env` files containing private keys or API credentials  
- 🧩 Use **separate wallets** for testing and production  
- 🧠 Audit transactions carefully before deploying on mainnet  
- 🧪 Test thoroughly on **forked networks** before live execution  
- ⛽ Monitor gas fees to avoid unnecessary spending  
- ⚔️ Understand and mitigate **MEV risks** when using atomic bundles  

## 🧬 Workflow Summary
The bot executes the following operations **in one atomic bundle** via bloXroute:

1. Deploy custom ERC20 token  
2. Approve token for NFPM (Non-Fungible Position Manager)  
3. Approve WBNB for NFPM  
4. Create a liquidity pool on PancakeSwap V3  
5. Initialize the pool with the starting price  
6. Add liquidity  
7. Execute buy transactions  

All steps are bundled atomically to ensure consistency, front-run protection, and efficient execution.

## 🧑‍💻 Development Setup

```bash
git clone https://github.com/0xopsdev/bnb-chain-trading-bot.git
cd bnb-chain-trading-bot
npm install
cp .env.example .env
node bundler.js
```

## 🪄 Future Enhancements
- Integrate AI-based strategy optimization  
- Support for cross-chain deployment (ETH, Base, Arbitrum)  
- Real-time Telegram / Discord alerts  
- Advanced PnL and analytics dashboard

## 🧾 License
This project is licensed under the MIT License — open for development, customization, and research purposes.

## 🧠 Disclaimer
This software is provided for educational and research purposes only.  
Use at your own risk. The maintainers assume no responsibility for financial losses or regulatory implications.

## Tx links of volume bot working
#### https://bscscan.com/tx/0x581cda788080b52fbd5db8c4d3500c22a6c136a07b73e2311d1fc29330d48fe5
#### https://bscscan.com/tx/0x8c870cf1721c2c765b45d2b13731bf384ec2e8020552aafb0436c01ded98f2ab
#### https://bscscan.com/tx/0xb46d289c48d04dc6cc74849ecd9ef4fff6bf86aa3b16fc231d019b82c7789bc2

## Future
- Randomizing trading amount
- Randomizing trading frequency (Buy/Sell)
- Randomizing the pool

# 👨‍💻 Author
### 📞 Telegram: [0xOpsDev](https://t.me/its0xopsdev)   
https://t.me/its0xopsdev

**Built for performance. Secured for production. Optimized for BNB Smart Chain.**
