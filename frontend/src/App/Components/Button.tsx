import styled from "styled-components";

const Button = styled.button`
  font-family: sans-serif;
  font-size: 1.1rem;
  margin-top: 1rem;
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  background-color: white;
  border: 1px solid black;
`;

interface Props {
  nome: string;
  click: any;
}

export default function Input(props: Props) {
  return <Button onClick={(e) => props.click(e)}>{props.nome}</Button>;
}
