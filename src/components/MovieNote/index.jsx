/* eslint-disable react/prop-types */
import { FiStar } from 'react-icons/fi'
import { Container, StarsWrapper, TagsWrapper } from "./styles"
import { Tag } from '../Tag'

export function MovieNote({ title, content, tags, ...rest }) {
    return (
        <Container {...rest}>
            <h3>{title}</h3>
            <StarsWrapper>
                <span>
                    <FiStar fill='#FF859B' />
                    <FiStar fill='#FF859B' />
                    <FiStar fill='#FF859B' />
                    <FiStar fill='#FF859B' />
                </span>
            </StarsWrapper>
            <p>{content}</p>
            <TagsWrapper>
                {tags && 
                    tags.map(tag => (
                        <Tag title={tag.name} key={tag.id} />
                    ))
                }
            </TagsWrapper>
        </Container>
    )
}