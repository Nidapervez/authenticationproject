import AuthContextProvider from "../../lib/contexts/AuthContext"
import LoginButton from "./component/button"



export default function House(){
  return<div>
    <AuthContextProvider>
    <LoginButton/>
    </AuthContextProvider>
  </div>
}

