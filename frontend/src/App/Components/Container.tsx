import styled from "styled-components";

const COntainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fdfdfd;
  margin: 0px;
  padding: 0px;
`;

interface Props {
  children: React.ReactNode;
}

export default function Container(props: Props) {
  return <COntainer>{props.children}</COntainer>;
}
