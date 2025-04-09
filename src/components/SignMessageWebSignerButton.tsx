import { useUser } from "@account-kit/react"
import { AlchemyWebSigner } from "@account-kit/signer";
import { createWalletClient, http } from "viem";
import { monadTestnet } from "viem/chains";

export default function SignMessageWebSignerButton() {

    const data = "messageToSign";
    const user = useUser();
    
    const handleSignMessage = async () => {

        if(!user) {
            alert("Cannot detect user.")
            return;
        }
        const startTime = Date.now();

        try {
            const signer = new AlchemyWebSigner({
                client: {
                    connection: {
                        apiKey: import.meta.env.VITE_ALCHEMY_API_KEY,
                    },
                    iframeConfig: {
                        iframeContainerId: "alchemy-signer-iframe-container",
                    },
                },
            });
            const walletClient = createWalletClient({
                transport: http(import.meta.env.VITE_ALCHEMY_RPC_URL),
                chain: monadTestnet,
                account: signer.toViemAccount(),
            });
            const result = await walletClient.signMessage({ message: data });
            console.log(`Signed message (web signer): ${result}`)
            console.log(`Processed transaction in ${Date.now() - startTime} ms`);
        
        } catch(err) {
            console.log("Error signing transaction: ", err)
            alert(`Problem signing txs`);
        }
    };

    return (
        <div className="p-2 m-2">
            <button className="p-2 border border-black" onClick={handleSignMessage}>Call signMessage (web signer)</button>
            <p>Open console for results!</p>
        </div>
    )
}