'use client'

import { useRouter } from 'next/navigation'

import NotFoundAnimation from '@/components/animations/NotFoundAnimation'

const NotFoundPage = () => {
  const router = useRouter()

  return (
    <div className=' flex h-[85vh] justify-center items-center flex-col gap-5'>
      <NotFoundAnimation />
      <button
        onClick={() => router.back()}
        className='nav-text uppercase relative hover:text-white hover:bg-transparent transition-all duration-300 w-[210px] flex items-center justify-center py-2 rounded-lg border-2 border-white/50 hover:border-white bg-white text-black'
      >
        Back to previous page
      </button>
    </div>
  )
}

export default NotFoundPage
