import styled from "styled-components";

export const Container = styled.button`
  background: ${({ theme }) => theme.COLORS.BG_BUTTON_TIMER};
  border: 0;
  border-radius: 50%;
  color: ${({ theme }) => theme.COLORS.TEXT};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  padding: 0.5rem;
`