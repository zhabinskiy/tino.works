'use client'
import Vimeo from '@u-wave/react-vimeo'

export default function Showreel() {
  return (
    <Vimeo
      video="788103758"
      responsive
      showByline={false}
      showPortrait={false}
      showTitle={false}
      color="ffffff"
      className="showreel"
    />
  )
}
