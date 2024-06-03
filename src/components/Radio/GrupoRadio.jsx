import styled from "@emotion/styled";
import Radio from "./Radio";
import { useFormikContext } from "formik";

const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
`

const GrupoRadio = ({ opcoes }) => {
  const { values } = useFormikContext()

  return (
    <Container>
      {opcoes.map(opcao => (
        <Radio
          key={opcao.id}
          name='interesse'
          value={opcao.valor}
          label={opcao.label}
          checked={opcao.valor === values.interesse}
        />
      ))}
    </Container>
  );
};

export default GrupoRadio;