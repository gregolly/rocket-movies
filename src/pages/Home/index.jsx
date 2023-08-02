import { FiPlus } from 'react-icons/fi'

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { MainContainer } from './styles'
import { MovieNote } from '../../components/MovieNote'

export function Home() {
    return (
        <>
            <Header />
            <MainContainer>
                <div className='wrapper'>
                    <h1>Meus Filmes</h1>
                    <Button label="Adicionar filme" icon={FiPlus} />
                </div>
                <MovieNote 
                    title="Interestellar" 
                    content="Pragas nas colheitas fizeram a civilização humana 
                    regredir para uma sociedade agrária em futuro de data desconhecida."
                />
            </MainContainer>

        </>
    )
}