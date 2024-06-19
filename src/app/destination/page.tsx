import desktop from '@/assets/destination/background-destination-desktop.jpg'
import mobile from '@/assets/destination/background-destination-mobile.jpg'
import tablet from '@/assets/destination/background-destination-tablet.jpg'
import Background from '@/components/globals/Background'
import DestinationPage from '@/components/pages/destination'

const Destination = () => {
  return (
    <div>
      <Background
        tablet={tablet.src}
        mobile={mobile.src}
        desktop={desktop.src}
      />
      <DestinationPage />
    </div>
  )
}

export default Destination
