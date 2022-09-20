import Button from "../button/button.component";

import { Container, Content } from "./showcase.styles";

const Showcase = () => {
  return (
    <Container>
      <Content>
        <span>Olá, meu nome é</span>
        <h2>Felipe Rocha.</h2>
        <h3>E eu crio sites e aplicativos.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec
          pellentesque felis, eu mollis odio. Sed porta enim vel tristique
          tincidunt. Nunc sed justo vel arcu ultrices hendrerit. Phasellus nec
          diam consectetur, tincidunt enim vitae, sollicitudin lorem. Cras
          tincidunt ex vitae ligula hendrerit finibus.
        </p>
        <Button>Visite meu LinkedIn!</Button>
      </Content>
    </Container>
  );
};

export default Showcase;
