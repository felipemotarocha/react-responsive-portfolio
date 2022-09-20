// Components
import Button from "../button/button.component";

// Assets
import avatar from "../../assets/images/avatar.png";

// Styles
import { Container, Item, Items } from "./header.styles";

const Header = () => {
  return (
    <Container>
      <img src={avatar} alt="Avatar" />

      <Items>
        <Item>
          <span>01.</span>Sobre mim
        </Item>
        <Item>
          <span>02.</span>Experiência
        </Item>
        <Item>
          <span>03.</span>Projetos
        </Item>
        <Item>
          <span>04.</span>Contato
        </Item>

        <Item>
          <Button>Currículo</Button>
        </Item>
      </Items>
    </Container>
  );
};

export default Header;
