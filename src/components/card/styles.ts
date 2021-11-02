import styled from "styled-components";

export const Box = styled.div`
  p,
  h1,
  h2,
  h3,
  h5,
  h4 {
    margin: 0;
    padding: 0;
  }
  display: flex;
  flex-direction: column;
  border: 2px dashed salmon;
  margin-top: 8px;

  .card-hobby {
    font-size: 1rem;
  }
  .card-age {
    font-size: 1.3rem;
    font-weight: 900;
  }
`;
