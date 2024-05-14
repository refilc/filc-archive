import { useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useRive } from 'rive-react'

export default function Customize () {
  const ref = useRef(null)
  const inView = useInView(ref)

  const { rive, RiveComponent } = useRive({
    src: '/animations/customizeanim.riv',
    autoplay: false
  })

  useEffect(() => {
    if (inView) {
      rive?.play()
    } else {
      rive?.reset()
    }
  }, [inView, rive])

  return (
    <div ref={ref} className='h-96 w-96'>
      <RiveComponent />
    </div>
  )
}
