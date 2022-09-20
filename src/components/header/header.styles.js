import styled from "styled-components";

import COLORS from "../../theme/theme.colors";

export const Container = styled.div`
  width: 100%;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
  }
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
`;

export const Item = styled.div`
  font-family: "Fira Code", monospace;
  padding: 15px;
  font-size: 0.825rem;
  color: ${COLORS.text.white};
  transition: color 0.3s ease;

  &:hover {
    color: ${COLORS.primary};
    cursor: pointer;
  }

  span {
    color: ${COLORS.primary};
    margin-right: 5px;
  }
`;
