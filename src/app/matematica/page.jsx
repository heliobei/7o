'use client'

import MatIntro from '../components/Matematica/MatIntro'
import MatDiferenca from '../components/Matematica/MatDiferenca'
import MatSugestao from '../components/Matematica/MatSugestao'
import MatButton from '../components/Matematica/MatButton'
import MatPropriedades from '../components/Matematica/MatPropriedades'
import MatSistemaNumeracao from '../components/Matematica/MatSistemaNumeracao'
import MatSistemaMonetario from '../components/Matematica/MatSistemaMonetario'
import MatOperacoes from '../components/Matematica/MatOperacoes'
import MatHero from '../components/Matematica/MatHero'
import Divider from '../components/Divider'


function Matematica() {
  return (
    <>
        
        <MatHero />
        <MatIntro />
        <MatDiferenca />
        <MatSugestao />
        <MatOperacoes />
        <MatSistemaNumeracao />
        <MatSistemaMonetario />
        <MatPropriedades />
        
        <Divider />
        <MatButton />
        
    
    </>
    
  )
}

export default Matematica