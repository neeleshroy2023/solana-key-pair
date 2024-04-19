import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypairFromEnv = getKeypairFromEnvironment("SOLANA_SECRET_KEY");

if (!keypairFromEnv) {
  console.error("No keypair found in environment");
  process.exit(1);
}

console.log("Loaded keypair from environment ✅");