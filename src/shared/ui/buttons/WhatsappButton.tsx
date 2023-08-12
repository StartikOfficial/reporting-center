import { Button } from "@mantine/core";
import { WhatsappForDarkBgSVG, WhatsappForLightBgSVG } from "@/shared/assets/";
import useStyles from "./WhatsappButton.style";

interface IWhatsappButton {
  buttonStyle?: "light" | "dark",
}

export default function WhatsappButton({
    buttonStyle
  }
  : IWhatsappButton
  ) {
    const {whatsappButtonStylesDark, whatsappButtonStylesLight} = useStyles().classes;
    return (
      <Button
      variant="outline"
      className={`${buttonStyle === "light" ? whatsappButtonStylesLight : whatsappButtonStylesDark} whatsappButton`}
      radius="2px"
      leftIcon={buttonStyle === "light" ? <WhatsappForDarkBgSVG/> : <WhatsappForLightBgSVG/>}
      >
        Написать в WhatsApp
      </Button>
    )
  }