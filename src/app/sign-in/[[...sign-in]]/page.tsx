import { SignIn } from '@clerk/nextjs'

import desktop from '@/assets/home/background-home-desktop.jpg'
import mobile from '@/assets/home/background-home-mobile.jpg'
import tablet from '@/assets/home/background-home-tablet.jpg'
import Background from '@/components/globals/Background'

const SignInPage = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-[65vh]'>
      <Background
        mobile={mobile.src}
        tablet={tablet.src}
        desktop={desktop.src}
      />
      <p>this is sign in page</p>

      <SignIn />
    </div>
  )
}

export default SignInPage
