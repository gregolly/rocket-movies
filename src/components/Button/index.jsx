import { ButtonContainer } from "./styles";

/* eslint-disable react/prop-types */
export function Button({ label, loading, icon: Icon, issecondary, ...rest}) {
    return (
        <ButtonContainer disabled={!loading} issecondary={issecondary} {...rest}>
            { Icon ? <Icon /> : ""}
            { !loading ? 'Carregando...' : label}
        </ButtonContainer>
    )
}