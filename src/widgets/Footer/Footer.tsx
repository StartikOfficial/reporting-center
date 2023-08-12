import { Container, Text, Box, Anchor } from "@mantine/core";
import Logo from "@/shared/assets/logo.svg";
import { GrayLine } from "@/shared/ui";
import useStyles from "./Footer.style";
import Link from "next/link";

const Footer = () => {
  const { footer, containerFooter } = useStyles().classes;

  return (
    <Box component="footer" className={footer}>
      <Container className={containerFooter}>
        <Anchor href="/" component={Link}>
          <Logo/>
        </Anchor>
        <Text>Заполним 3-ндфл недорого</Text>
        <Text>Закажите декларацию 3-НДФЛ онлайн</Text>
        <GrayLine/>
        <Text>&copy; 2022, ЦЕНТР ОТЧЕТНОСТИ</Text>
      </Container>
    </Box> 
  );
};

export default Footer;