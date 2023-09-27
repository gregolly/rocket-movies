import { FiPlus } from 'react-icons/fi'

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from '../../components/Input'
import { MainContainer } from './styles'
import { MovieNote } from '../../components/MovieNote'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

export function Home() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
  
    const navigate = useNavigate()
    
    function handleCreateNewMovie() {
        navigate('/create')
    }

    function handleToDetails(id) {
        navigate(`/preview/${id}`);
    }

    useEffect(() => {
        async function fetchMovies() {
          const response = await api.get(`/movieNotes?title=${search}`)
          setMovies(response.data)
        }
    
        fetchMovies()
      }, [search])

    return (
        <>
            <Header>
                <Input
                    placeholder="Pesquisar pelo título"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Header>
            <MainContainer>
                <div className='wrapper'>
                    <h1>Meus Filmes</h1>
                    <Button
                        label="Adicionar filme" 
                        icon={FiPlus} 
                        isSecondary={false} 
                        loading={true} 
                        className="btn-add-movie"
                        onClick={handleCreateNewMovie}
                    />
                </div>
                {movies.map(movie => (
                    <MovieNote 
                        key={String(movie.id)} 
                        data={movie} 
                        onClick={() => handleToDetails(movie.id)}
                    />
                ))}
            </MainContainer>

        </>
    )
}