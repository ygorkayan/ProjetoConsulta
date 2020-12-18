import React from "react";
import styled from "styled-components";

interface Props {
  nome: string;
  estado: string;
  setEstado: React.Dispatch<React.SetStateAction<string>>;
  type? : string;
}

const Container = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const Label = styled.label`
  font-family: sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  margin-right: 1rem;
`;
const Inpute = styled.input`
  border: none;
  border-bottom: 1px solid black;
  padding-left: 0.2rem;
  padding-top: 0.8rem;
`;

export default function Input(props: Props) {
  const { nome, estado, setEstado, type } = props;

  return (
    <Container>
      <Label htmlFor={`${nome}`}>{nome}</Label>
      <Inpute
        id={`${nome}`}
        value={estado}
        onChange={(e) => setEstado(e.target.value)}
        type={type ? type : "text"}
      />
    </Container>
  );
}
