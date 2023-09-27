/* eslint-disable react/prop-types */
import { Container, StarsWrapper, TagsWrapper } from "./styles"
import { Tag } from '../Tag'
import { Rating } from '../Rating'

export function MovieNote({ data, ...rest }) {
    return (
        <Container {...rest}>
            <h3>{data.title}</h3>
            <StarsWrapper>
                <Rating grade={data.rating} isBigSize={false} />
            </StarsWrapper>
            <p>{data.description}</p>
            <TagsWrapper>
                {data.tags && 
                    data.tags.map(tag => (
                        <Tag title={tag.name} key={tag.id} />
                    ))
                }
            </TagsWrapper>
        </Container>
    )
}