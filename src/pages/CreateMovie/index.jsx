import { FiArrowLeft } from "react-icons/fi"
import { Container, BookmarksContainer, Bookmarks, ButtonContainer } from "./styles"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { NoteItem } from "../../components/NoteItem"
import { Button } from '../../components/Button'
import { Link, useNavigate } from "react-router-dom"

import { useState } from "react"
import { api } from "../../services/api"

export function CreateMovie() {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState('')
    const [description, setDescription] = useState('')
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState('')
    const [loading, setLoading] = useState(false)

    const isTitleAndRatingEmpty = title.length === 0 && rating.length === 0

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag('')
    }

    function handleRemoveTag(tagDeleted) {
        setTags(prevState => prevState.filter(tag => tag !== tagDeleted))
    }

    async function handleNewMovieNote(event) {
        event.preventDefault()
        setLoading(true)

        try {

            if (!title) {
                return alert("Digite o título do filme");
              }
        
              const isRatingValid = rating >= 0 && rating <= 5;
        
              if (!isRatingValid) {
                return alert("A nota do filme deve ser entre 0 e 5");
              }
        
              if (newTag) {
                return alert(
                  "Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
                );
              }

            await api.post("/movieNotes", {
                title,
                description,
                rating,
                tags
            })
            
            alert("Nota criada com sucesso!")
            navigate("/")
        } catch (error) {
            if (error.response) {
              alert(error.response.data.message)
            } else {
              alert("Não foi possível adicionar o filme.")
              console.log("Erro ao adicionar o filme:", error)
            }
          } finally {
            setLoading(false)
          }
    }

    function handleDiscardMovie() {
        confirm(
          "Todas as alterações serão perdidas... Tem certeza que deseja descartar as alterações?"
        )
    }

    return (
        <>
            <Header />
            <Container>
                <Link to="/">
                    <FiArrowLeft />
                    <span>Voltar</span>
                </Link>
                <h3>Novo filme</h3>
                <div className="wrapper">
                    <Input 
                        placeholder="Título" 
                        onChange={({ target }) => setTitle(target.value)}
                    />
                    <Input 
                        placeholder="Sua nota (de 0 a 5)" 
                        onChange={({ target }) => setRating(target.value)}
                    />
                </div>
                <textarea 
                    placeholder="Observações" 
                    onChange={({ target }) => setDescription(target.value)}
                />
                <BookmarksContainer>
                    <h4>Marcadores</h4>
                    <Bookmarks>
                        {
                            tags.map((tag, index) => (
                                <NoteItem 
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                />
                            ))
                        }
                        <NoteItem
                            value={newTag}
                            isNew
                            onChange={({ target}) => setNewTag(target.value)}
                            onClick={handleAddTag}
                        />
                    </Bookmarks>
                </BookmarksContainer>
                <ButtonContainer>
                    <Button 
                        label="Excluir filme" 
                        issecondary 
                        loading={!loading}
                        disabled={isTitleAndRatingEmpty}
                        onClick={handleDiscardMovie}
                    />
                    <Button 
                        label="Salvar alterações" 
                        loading={!loading}
                        onClick={handleNewMovieNote}  
                    />
                </ButtonContainer>
            </Container>
        </>
    )
}