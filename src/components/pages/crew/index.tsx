import desktop from '@/assets/crew/background-crew-desktop.jpg'
import mobile from '@/assets/crew/background-crew-mobile.jpg'
import tablet from '@/assets/crew/background-crew-tablet.jpg'
import Background from '@/components/globals/Background'
import PageTitle from '@/components/globals/PageTitle'

const CrewPage = () => {
  return (
    <div>
      <Background
        desktop={desktop.src}
        mobile={mobile.src}
        tablet={tablet.src}
      />
      <PageTitle number={2} title='Meet Your crew' />
    </div>
  )
}

export default CrewPage
