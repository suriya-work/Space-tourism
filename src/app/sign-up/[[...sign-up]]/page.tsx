import { SignUp } from '@clerk/nextjs'

import Astronaut from '@/components/animations/Astronaut'

const SignUpPage = () => {
  return (
    <div className='flex w-full flex-col-reverse items-center gap-3 lg:h-screen lg:flex-row lg:justify-center lg:gap-10'>
      <Astronaut />
      <div className='pt-12 lg:pt-5'>
        <SignUp />
      </div>
    </div>
  )
}

export default SignUpPage
