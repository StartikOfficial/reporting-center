import { Stack, Image } from "@mantine/core";
import useStyles from "./FreeConsultation.style";
import { OrderForm } from "@/entities";
import png from "./assets/stationery.png";

const FreeConsultation = () => {
  const { background, orderForm } = useStyles().classes;

  return (
    <Stack className={background} align={"center"}>
      <Image src={png.src} alt="stationery" width={"100%"} height={"100%"} fit="contain"/> 
        <OrderForm 
        className={orderForm} 
        formTitle="Закажите бесплатную консультацию" 
        withWatsapp/>
    </Stack> 
  );
};

export default FreeConsultation;