'use client'

import React, { JSX } from 'react'
import { useParams } from 'next/navigation'
import Canvas from '@/modules/Canvas'

const DynamicEditor = () => {
  const params = useParams()
  const type = params.type as string


  return <Canvas type={type} />
}

export default DynamicEditor
