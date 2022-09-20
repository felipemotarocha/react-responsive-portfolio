import styled from "styled-components";

import COLORS from "../../theme/theme.colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  span:nth-child(1) {
    color: ${COLORS.primary};
    font-family: "Fira Code", monospace;
    font-weight: 500;
    margin-bottom: 10px;
  }

  h2 {
    color: ${COLORS.text.white};
    font-size: 4rem;
    font-weight: 600;
  }

  h3 {
    color: ${COLORS.text.whiteDarker};
    font-size: 3.5rem;
    font-weight: 600;
  }

  p {
    color: ${COLORS.text.whiteDarker};
    margin-top: 15px;
    margin-bottom: 30px;
    line-height: 150%;
    max-width: 600px;
  }
`;
