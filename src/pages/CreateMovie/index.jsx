import { FiArrowLeft } from "react-icons/fi"
import { Container, BookmarksContainer, Bookmarks, ButtonContainer } from "./styles"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { NoteItem } from "../../components/NoteItem"
import { Button } from '../../components/Button'

export function CreateMovie() {
    return (
        <>
            <Header />
            <Container>
                <a href="#">
                    <FiArrowLeft />
                    <span>Voltar</span>
                </a>
                <h3>Novo filme</h3>
                <div className="wrapper">
                    <Input placeholder="Título" />
                    <Input placeholder="Sua nota (de 0 a 5)" />
                </div>
                <textarea placeholder="Observações" />
                <BookmarksContainer>
                    <h4>Marcadores</h4>
                    <Bookmarks>
                        <NoteItem
                            value="Drama"
                        />
                        <NoteItem
                            value="Terror"
                            isNew
                        />
                    </Bookmarks>
                </BookmarksContainer>
                <ButtonContainer>
                    <Button label="Excluir filme" isSecondary />
                    <Button label="Salvar alterações" />
                </ButtonContainer>
            </Container>
        </>
    )
}