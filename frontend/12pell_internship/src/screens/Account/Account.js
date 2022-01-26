import { useState } from 'react'
import './Account.css'
import Layout from '../../components/Layout/Layout.js'
import Signup from '../../components/Signup/Signup.js'
import Signin from '../../components/Signin/Signin.js'

export default function Account() {

  const [login, setLogin] = useState(true)

  const handleSignIn = () => {
    setLogin(true);
  };

  const handleCreate = () => {
    setLogin(false);
  };


  return (
    <Layout>
      <div className="account_container">
        <div className="login_toggle">
          {login ?
            <>
              <button className="signin_toggle" onClick={handleSignIn}>
                Login
              </button>
              <button className="signup_toggle_white" onClick={handleCreate}>
                Create Account
              </button>
            </>
            :
            <>
              <button className="signin_toggle_white" onClick={handleSignIn}>
                Login
              </button>
              <button className="signup_toggle" onClick={handleCreate}>
                Create Account
              </button>
            </>
          }
        </div>
        {login ? <Signup /> : <Signin /> }
      </div>
    </Layout>
  )}
