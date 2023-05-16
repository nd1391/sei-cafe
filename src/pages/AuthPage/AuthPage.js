import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage({setUser}) {
  return (
    <>
        <div>AuthPage</div>
        <SignUpForm setUser={setUser}/>
        <LoginForm setUser={setUser} />
    </>
  )
}
