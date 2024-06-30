import Image from 'next/image'

interface BackgroundProps {
  mobile: string
  tablet: string
  desktop: string
}

const Background = ({ mobile, tablet, desktop }: BackgroundProps) => {
  return (
    <div className='fixed left-0 top-0 z-0 h-screen w-screen'>
      <picture>
        <source media='(min-width:1024px)' srcSet={desktop} />
        <source media='(min-width:768px)' srcSet={tablet} />
        <Image
          src={mobile}
          className='object-cover'
          fill
          alt='background image'
        />
      </picture>
    </div>
  )
}

export default Background
