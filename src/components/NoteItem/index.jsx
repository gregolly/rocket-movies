/* eslint-disable react/prop-types */
import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";

export function NoteItem({ isNew, value, onClick, ...rest}) {
    return (
        <Container isNew={isNew} {...rest}>
            <input 
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest} 
            />
            <button
                onClick={() => onClick(value)}
                type="button"
                className={isNew ? "button-delete" : "button-add"}
            >
                { isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    )
}