import LoginButton from './components/LoginButton'
import SignMessageButton from './components/SignMessageButton'
import SignMessageWebSignerButton from './components/SignMessageWebSignerButton'
// import SignTransactionButton from './components/SignTransactionButton'
// import SendTransactionButton from './components/SendTransactionButton'
// import BatchSendTransactionButton from './components/BatchSendTransactionButton'
// import BatchSignTransactionButton from './components/BatchSignTransactionButton'

function App() {

  return (
    <>
      <LoginButton />

      {/* THIS WORKS! */}
      <SignMessageButton />

      {/* THIS ERRORS! "Error: Iframe element with ID turnkey-iframe already exists"*/}
      <SignMessageWebSignerButton />

      {/* <SignTransactionButton />
      <SendTransactionButton />
      <BatchSignTransactionButton />
      <BatchSendTransactionButton /> */}
    </>
  )
}

export default App
