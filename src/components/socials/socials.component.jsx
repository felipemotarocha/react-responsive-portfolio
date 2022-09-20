import { FiGithub, FiLinkedin, FiInstagram, FiYoutube } from "react-icons/fi";

import { Container, Item, Items } from "./socials.styles";

const Socials = () => {
  return (
    <Container>
      <Items>
        <Item>
          <FiGithub size={20} />
        </Item>

        <Item>
          <FiLinkedin size={20} />
        </Item>

        <Item>
          <FiInstagram size={20} />
        </Item>

        <Item>
          <FiYoutube size={20} />
        </Item>
      </Items>
    </Container>
  );
};

export default Socials;
