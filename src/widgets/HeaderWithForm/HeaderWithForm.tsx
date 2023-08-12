import Header from "@/widgets/Header";
import { Text, Stack, BackgroundImage } from "@mantine/core";
import useStyles from "./HeaderWithForm.style";
import imgBG from "./assets/background.png";
import { OrderForm } from "@/entities";
import { TitleWithText } from "@/shared/ui";

const HeaderWithForm = () => {
    const { backgroundContainer, formAndTextContainer, textContainer} = useStyles().classes

    return (
        <>
        <BackgroundImage
            src={imgBG.src}
            className={backgroundContainer}
        > 
            <Header/>
            <Stack className={formAndTextContainer}>
                <TitleWithText
                className={textContainer}
                titleOrder={1}
                titleText="Заполним декларацию 3-НДФЛ"
                textTransform="none"
                >
                    <Text>Бесплатная консультация специалиста</Text>
                    <Text>Оплата после выполнения</Text>
                    <Text>Сопровождение до завершения проверки декларации</Text>
                </TitleWithText>

                <OrderForm 
                formTitle="Заполните заявку и мы свяжемся с Вами в ближайшее время!"
                /> 
            </Stack>            
        </BackgroundImage>    
        </>
        )
}

export default HeaderWithForm;