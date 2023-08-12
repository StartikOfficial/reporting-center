import { WhatsappButton } from "@/shared/ui";
import { Button, Anchor, Box } from "@mantine/core";
import { PhoneSVG, LogoSVG } from "@/shared/assets";
import useStyles from "./Header.style";
import Link from "next/link";

const Header = () => {
  const {headerStyles, numberText} = useStyles().classes;

  return (
    <Box component="header" className={headerStyles}>
      <Anchor href="/" component={Link}>
        <LogoSVG/>
      </Anchor>
      
        <Button leftIcon={<PhoneSVG/>} compact>
          <span className={numberText}>+7 800 000 00 00</span>
        </Button>
      


      <WhatsappButton buttonStyle="light"/>
    </Box> 
  );
};

export default Header;