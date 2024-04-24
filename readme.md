# Solana Keypair Loader

This Node.js script loads a Solana keypair from the environment using `dotenv` and `@solana-developers/helpers` packages.

## Setup

1. Install Node.js (if not already installed): [Node.js Download](https://nodejs.org/en/download/)
2. Clone this repository:
3. Install dependencies: `yarn`
4. Create a `.env` file in the root directory and add your Solana secret key:

   ```
   SOLANA_SECRET_KEY=your_secret_key_here
   ```

## Usage

Run the script using Node.js:

```
npm run dev
```

If the keypair is successfully loaded, you will see a message indicating so. If no keypair is found in the environment, an error message will be displayed.

---
