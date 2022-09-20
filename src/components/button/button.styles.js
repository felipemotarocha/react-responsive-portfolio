import styled from "styled-components";

import COLORS from "../../theme/theme.colors";

export const Container = styled.button`
  padding: 15px;
  border: none;
  font-family: "Fira Code", monospace;
  outline: 2px solid ${COLORS.primary};
  border-radius: 3px;
  color: ${COLORS.primary};
  background-color: transparent;
  transition: background-color 0.3s ease;
  font-weight: 600;
  width: fit-content;

  &:hover {
    background-color: rgba(78, 199, 176, 0.5);
    cursor: pointer;
  }
`;
