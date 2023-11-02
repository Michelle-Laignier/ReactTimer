import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100vh;
`

export const Timer = styled.div`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: 10rem;
  text-align: center;

  .buttons-div {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
`

export const Sounds = styled.div`
  
`