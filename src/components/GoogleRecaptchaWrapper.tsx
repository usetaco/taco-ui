import { ReactNode } from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

const GoogleRecaptchaWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <GoogleReCaptchaProvider
      scriptProps={{
        async: true,
      }}
      reCaptchaKey={'6LdSJsweAAAAABuGZGTHeCESQLJHdKdXSX36NUlj'}
    >
      {children}
    </GoogleReCaptchaProvider>
  )
}

export default GoogleRecaptchaWrapper
