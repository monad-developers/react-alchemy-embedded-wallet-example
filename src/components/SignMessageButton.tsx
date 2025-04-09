import { useSignMessage, useSmartAccountClient, useUser } from "@account-kit/react"

export default function SignMessageButton() {

    const data = "messageToSign";
    const { client } = useSmartAccountClient({});
    const user = useUser();
    const {
        signMessageAsync,
    } = useSignMessage({
        client,
        onError: (error) => console.error(error),
    });
    
    const handleSignMessage = async () => {

        if(!user) {
            alert("Cannot detect user.")
            return;
        }
        if (!client) {
            alert("Cannot detect provider.");
            return;
        }
        const startTime = Date.now();

        try {
            const result = await signMessageAsync({ message: data });
            console.log(`Signed message: ${result}`)
            console.log(`Processed transaction in ${Date.now() - startTime} ms`);
        
        } catch(err) {
            console.log("Error signing transaction: ", err)
            alert(`Problem signing txs`);
        }
    };

    return (
        <div className="p-2 m-2">
            <button className="p-2 border border-black" onClick={handleSignMessage}>Call signMessage</button>
            <p>Open console for results!</p>
        </div>
    )
}