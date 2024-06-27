import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <div className='relative z-30 flex flex-col items-center justify-center w-full h-full'>
      <p>this is signup page</p>
      <SignUp />
    </div>
  )
}

export default SignUpPage
