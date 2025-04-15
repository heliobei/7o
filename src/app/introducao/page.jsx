'use client'

import IntroButons from '../components/Introducao/IntroButons'
import IntroButtonNext from '../components/Introducao/IntroButtonNext'
import IntroHero from '../components/Introducao/IntroHero'
import { Divider } from '@nextui-org/react'
import OSite1 from '../components/Introducao/OSite1'


function Introcucao() {
  return (
    <>
        
        <IntroHero />
        <OSite1 />
        
        <IntroButons  />
        <Divider className='max-w-5xl mx-auto my-4'/>
        <IntroButtonNext />
        
    </>
    
  )
}

export default Introcucao