import styled from "styled-components";
import COLORS from "../../theme/theme.colors";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: flex-end;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

export const Item = styled.a`
  padding: 15px 0;

  svg {
    color: ${COLORS.text.whiteDarker};
    transition: color 0.3s ease;

    &:hover {
      color: ${COLORS.primary};
      cursor: pointer;
    }
  }
`;
