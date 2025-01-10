import HeaderAuth from '../HeaderAuth'
import LoginPage from './LoginPage'
import FooterAuth from '../FooterAuth'

export default function Page() {
  return (
    <>
      <div className="flex justify-center items-center flex-col h-h_login">
        <HeaderAuth />
        <LoginPage />
      </div>
      <FooterAuth
        label="Don't have an account ?"
        btnText="Get access"
        link="/signup"
      />
    </>
  )
}
