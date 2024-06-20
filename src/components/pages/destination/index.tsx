import desktop from '@/assets/destination/background-destination-desktop.jpg'
import mobile from '@/assets/destination/background-destination-mobile.jpg'
import tablet from '@/assets/destination/background-destination-tablet.jpg'
import Background from '@/components/globals/Background'
import PageTitle from '@/components/globals/PageTitle'

const DestinationPage = () => {
  return (
    <div>
      <Background
        tablet={tablet.src}
        mobile={mobile.src}
        desktop={desktop.src}
      />
      <PageTitle number={1} title='pick your destination' />
    </div>
  )
}

export default DestinationPage
