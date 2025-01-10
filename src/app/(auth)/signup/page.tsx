import HeaderAuth from '../HeaderAuth'
import SignUpPage from './SignUpPage'
import FooterAuth from '../FooterAuth'

export default function Page() {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-20 h-h_login">
        <HeaderAuth />
        <SignUpPage />
      </div>

      <FooterAuth
        label="Arleady have an account ?"
        btnText="Get in"
        link="/login"
      />
    </>
  )
}
