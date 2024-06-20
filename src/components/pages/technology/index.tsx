import desktop from '@/assets/technology/background-technology-desktop.jpg'
import mobile from '@/assets/technology/background-technology-mobile.jpg'
import tablet from '@/assets/technology/background-technology-tablet.jpg'
import Background from '@/components/globals/Background'

const TechnologyPage = () => {
  return (
    <div>
      <Background
        desktop={desktop.src}
        mobile={mobile.src}
        tablet={tablet.src}
      />
    </div>
  )
}

export default TechnologyPage
