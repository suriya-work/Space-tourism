import { SignIn } from '@clerk/nextjs'

import SpaceShipAnim from '@/components/animations/SpaceShipAnim'

const SignInPage = () => {
  return (
    <div className='flex w-full flex-col items-center lg:h-screen lg:justify-center'>
      <SpaceShipAnim />
      <div className='pt-12 lg:pt-5'>
        <SignIn />
      </div>
    </div>
  )
}

export default SignInPage
