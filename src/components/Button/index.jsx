import { ButtonContainer } from "./styles";

/* eslint-disable react/prop-types */
export function Button({ label, loading, icon: Icon, isSecondary, ...rest}) {
    return (
        <ButtonContainer {...rest} disabled={loading} isSecondary={isSecondary}>
            { Icon ? <Icon /> : ""}
            {label}
        </ButtonContainer>
    )
}