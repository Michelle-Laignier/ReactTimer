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
    
    background-color: ${({ theme }) => theme.COLORS.BG_DIV_BUTTONS};
    border-radius: 55px;
    padding: 10px;
  }
`

export const Sounds = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 20px;

  .video{
    position: absolute;

    height: 100vh;
    left: 0;
    top: 0;
    width: 100vw;
    z-index: -1;
  }
`