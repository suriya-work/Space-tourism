'use client'

import { useRouter } from 'next/navigation'

import NotFoundAnimation from '@/components/animations/NotFoundAnimation'

const NotFoundPage = () => {
  const router = useRouter()

  return (
    <div className='flex h-[85vh] flex-col items-center justify-center gap-5'>
      <NotFoundAnimation />
      <button
        onClick={() => router.back()}
        className='nav-text relative flex w-[210px] items-center justify-center rounded-lg border-2 border-white/50 bg-white py-2 uppercase text-black transition-all duration-300 hover:border-white hover:bg-transparent hover:text-white'
      >
        Back to previous page
      </button>
    </div>
  )
}

export default NotFoundPage
