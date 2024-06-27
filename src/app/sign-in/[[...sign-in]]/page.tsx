import { SignIn } from '@clerk/nextjs'

import SpaceShipAnim from '@/components/animations/SpaceShipAnim'

const SignInPage = () => {
  return (
    <div className='flex flex-col items-center lg:justify-center w-full lg:h-screen'>
      <SpaceShipAnim />
      <p>this is sign in page</p>

      <SignIn />
    </div>
  )
}

export default SignInPage
