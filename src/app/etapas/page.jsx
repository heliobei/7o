

import EtaEtapas from '../components/Etapas/EtaEtapas'

import EtaItens from '../components/Etapas/EtaItens'
import EtaOrg from '../components/Etapas/EtaOrg'
import EtaDica from '../components/Etapas/EtaDica'

import EtaDica2 from '../components/Etapas/EtaDica2'
import EtaButton from '../components/Etapas/EtaButton'
import EtaHero from '../components/Etapas/EtaHero'

import EtaDD from '../components/Etapas/EtaDD'
import Divider from "../components/Divider"
import EtaTesteCards from '../components/Etapas/EtaTesteCards'


function Etapas() {
  return (
    <>
       
        <EtaHero />
        
        <EtaTesteCards />
        <EtaDica />
        <EtaEtapas />
        <EtaDica2 />
        <EtaDD />
        
        
        <EtaItens />
        <EtaOrg />
        <Divider />
        <EtaButton />
     

    </>
    
  )
}

export default Etapas

