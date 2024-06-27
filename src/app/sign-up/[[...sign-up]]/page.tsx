import { SignUp } from '@clerk/nextjs'

import Astronaut from '@/components/animations/Astronaut'

const SignUpPage = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row items-center lg:justify-center lg:gap-10 gap-3 w-full lg:h-screen'>
      <Astronaut />
      <div className=' pt-12 lg:pt-5'>
        <SignUp />
      </div>
    </div>
  )
}

export default SignUpPage
