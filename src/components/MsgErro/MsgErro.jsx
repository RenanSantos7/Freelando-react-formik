import styled from "@emotion/styled"

const StyledMessage = styled.span`
    color: red;
    font-size: .75em;
    font-style: italic;
`

export default function MsgErro({ mensagem }) {
    return (
        <StyledMessage>
            {mensagem}
        </StyledMessage>
    )
}