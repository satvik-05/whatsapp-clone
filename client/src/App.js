import { GoogleOAuthProvider } from "@react-oauth/google";

import Messenger from "./component/Messenger";

import AccountProvider from "./component/context/AccountProvider";

function App() {
  const clientId =
    "457513363041-8e3jfgloe4hu7q0vbtdv13jbvg0cntq7.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
