import desktop from '@/assets/technology/background-technology-desktop.jpg'
import mobile from '@/assets/technology/background-technology-mobile.jpg'
import tablet from '@/assets/technology/background-technology-tablet.jpg'
import Background from '@/components/globals/Background'
import PageTitle from '@/components/globals/PageTitle'

const TechnologyPage = () => {
  return (
    <div>
      <Background
        desktop={desktop.src}
        mobile={mobile.src}
        tablet={tablet.src}
      />
      <PageTitle number={3} title='space launch 101' />
    </div>
  )
}

export default TechnologyPage
