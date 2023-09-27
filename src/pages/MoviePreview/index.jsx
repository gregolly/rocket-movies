import { useEffect, useState } from 'react'

import { FiArrowLeft, FiClock } from 'react-icons/fi'
import { Container } from "./styles"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import moment from 'moment-timezone'

import { Header } from "../../components/Header"
import { Tag } from '../../components/Tag'
import { NavLink, useParams } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { Input } from '../../components/Input'
import { Rating } from '../../components/Rating'

export function MoviePreview() {
    const [data, setData] = useState({})
    // const [loading, setLoading] = useState(false)

    const params = useParams();

    const { user } = useAuth();
  
    const avatarURL = user.avatar
      ? `${api.defaults.baseURL}/files/${user.avatar}`
      : avatarPlaceholder;
  
    const formattedDate = moment
      .utc(data.updated_at)
      .tz("America/Sao_Paulo")
      .format("DD/MM/YYYY HH:mm:ss");
  
    
    //   async function handleRemove() {
    //     const confirm = window.confirm("Deseja realmente remover o filme?");
    
    //     if (confirm) {
    //       setLoading(true);
    
    //       try {
    //         await api.delete(`/movieNotes/${params.id}`);
    //         navigate(-1);
    //       } catch (error) {
    //         if (error.response) {
    //           alert(error.response.data.message);
    //         } else {
    //           alert("Não foi possível remover o filme.");
    //           console.log("Erro ao remover o filme:", error);
    //         }
    //       } finally {
    //         setLoading(false);
    //       }
    //     }
    //   }
    
      useEffect(() => {
        async function fetchMovie() {
          const response = await api.get(`/movieNotes/${params.id}`);
          setData(response.data);
        }
    
        fetchMovie()
      }, [params.id]);

    return (
        <>
            <Header>
                <Input placeholder="Pesquisar pelo título" />
            </Header>
            { data && (
                <Container>
                    <NavLink to="/">
                        <FiArrowLeft size={12} />
                        <span>Voltar</span>
                    </NavLink>
                    <div>
                        <h1>{data.title}</h1>
                        <Rating grade={data.rating} isBigSize />
                    </div>
                    <div className="wrapper">
                        <img src={avatarURL} alt={user.name} />
                        <span>Por { user.name } </span>
                        <FiClock size={16} />
                        <p>{formattedDate}</p>
                    </div>
                    <div className="wrapper gap">
                        {data.tags && data?.tags.map(tag => (
                            <Tag key={String(tag.id)} title={tag.name} />
                        ))}
                    </div>
                    <p>{data.description}</p>
                </Container>
            )
            }
        </>
    )
}