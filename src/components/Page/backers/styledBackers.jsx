import styled from "styled-components"

const BackersGeral = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  `

const DivBk = styled.div`
  opacity: ${props => props.opc};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid #dadada;
  border-radius: 20px;
  padding: 2rem;
  row-gap: 1rem;
  h1 {
    grid-column: 1;
    font-size: 1rem;
    text-align: start;
    font-weight: bold;
  };
  p{
    grid-row: 2;
    grid-column: 1/4;
    text-align: left;
    font-size: .875rem;
    margin-top: 1rem;
    color: #949494;
  };
  span{
    font-weight: bold;
    grid-column: 3;
    justify-content: end;
    text-align: end;
    color: #daa001;
  }
`
const Span =styled.div`
  display: flex;
  align-items: end;
  gap: .5rem;
  p{
    font-size: 1.5rem;
    font-weight: bold;
    color: #333533;
  };
  span{
    font-size: .875rem;
    color: #949494;
  }
`

export { 
  DivBk,
  BackersGeral,
  Span,
  
}