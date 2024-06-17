import desktop from '@/assets/home/background-home-desktop.jpg'
import mobile from '@/assets/home/background-home-mobile.jpg'
import tablet from '@/assets/home/background-home-tablet.jpg'
import Background from '@/components/Background'
import MotionDiv from '@/components/MotionDiv'

export default function Home() {
  return (
    <MotionDiv>
      <Background
        mobile={mobile.src}
        tablet={tablet.src}
        desktop={desktop.src}
      />
      <div className='relative z-30'>
        <p className=' text-white text-xl text-center'>
          this is a text for test styles{' '}
        </p>
      </div>
    </MotionDiv>
  )
}
