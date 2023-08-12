import { Stack, Text, Group, CopyButton, Anchor, UnstyledButton} from "@mantine/core";
import useStyles from "./ContactInformation.style";
import { YandexMap } from "@/entities";
import { VkSVG, InstagramSVG } from "@/shared/assets";
import { TitleWithText } from "@/shared/ui";

const ContactInformation = () => {
  const { background, titleWithText } = useStyles().classes;

  return (
    <Stack className={background} align="center">
        <TitleWithText 
        titleText="Контактная информация"
        titleOrder={2}
        textTransform="none"
        className={titleWithText}
        >
            <Text className={"sectionTitle"}>Адрес</Text>

            <Text>г. Москва, Новая Площадь, д. 6</Text>
            <Text>г. Санкт-Петербург, ул. Гороховая, д. 46</Text>
            <Text>г. Оренбург проспект Гагарина, д. 23В</Text>

            <Text className={"sectionTitle"}>Телефоны</Text>

            <Text>+7 (903) 366-05-52</Text>
            <Text>+7 (903) 366-05-52</Text>
            
            <Text className={"sectionTitle"}>Электронная почта</Text>
            <CopyButton value="nalog.2@mail.ru">
                {({ copied, copy }) => (
                    <UnstyledButton color={copied ? "teal" : "blue"} onClick={copy}>
                        {copied ? "Скопировано" : "nalog.2@mail.ru"}
                    </UnstyledButton>
                )}
            </CopyButton>

            <Text  className={"sectionTitle"}>Мы в соц сетях</Text>

            <Group align="center" spacing={10}>           
                <Anchor component={VkSVG}/>
                    
                <Text >4501</Text>

                <Anchor component={InstagramSVG}/>
                
                <Text>349</Text>
            </Group>
        </TitleWithText>
        <YandexMap/>
    </Stack> 
  );
};

export default ContactInformation;