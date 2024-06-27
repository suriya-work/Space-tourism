import { SignIn } from '@clerk/nextjs'

import SpaceShipAnim from '@/components/animations/SpaceShipAnim'

const SignInPage = () => {
  return (
    <div className='flex flex-col items-center lg:justify-center w-full lg:h-screen '>
      <SpaceShipAnim />
      <div className='pt-12 lg:pt-5'>
        <SignIn />
      </div>
    </div>
  )
}

export default SignInPage
