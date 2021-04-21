import logo from './logo.svg';
import './App.css';

import { Auth } from 'aws-amplify'

function App() {
    async function checkUser() {
        const user = await Auth.currentAuthenticatedUser()
        console.log('user: ' , user)
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button
            onClick = {() => Auth.federatedSignIn({provider : "Google"})}
        >Sign in with Google</button>
        <button
            onClick = {() => Auth.federatedSignIn()}
        >Sign in</button>
          <button
            onClick = {checkUser}
        >Check User</button>
      </header>
    </div>
  );
}

export default App;
