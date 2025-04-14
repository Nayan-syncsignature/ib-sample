import React, { JSX } from 'react'
import SocialPost from './components/SocialPost'
import Carousel from './components/Carousel'
import SocialBanner from './components/SocialBanner'

const componentMap: Record<string, JSX.Element> = {
    'social-post': <SocialPost />,
    'carousel': <Carousel />,
    'social-banner': <SocialBanner />,
}

const Canvas = ({ type }: {type: string}) => {

  const Component = componentMap[type]

  if (!Component) {
    return <div>Editor type "{type}" not found.</div>
  }

  return <>{Component}</>
}
 
export default Canvas