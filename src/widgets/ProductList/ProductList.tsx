import { Grid, useMantineTheme, em, Text } from "@mantine/core";
import useStyles from "./ProductList.style";
import { ProductCard}  from "@/entities";
import { useViewportSize } from "@mantine/hooks";
import getBreakPoints from "@/shared/utils/getBreakPoints";

import additionalIncome from "./assets/additional-income.png";
import boughtProperty from "./assets/bought-property.png";
import insurance from "./assets/insurance.png";
import investments from "./assets/investments.png";
import payTreatment from "./assets/pay-treatment.png";
import payTuition from "./assets/pay-tuition.png";
import freeRegistrationSM from "./assets/free-registration-sm.png";
import freeRegistrationLG from "./assets/free-registration-lg.png";

const ProductList = () => {
    const theme = useMantineTheme();
    const { width } = useViewportSize();
    const { productList, freeRegistrationContainer } = useStyles().classes;

    return (
        <Grid 
        className={productList} 
        columns={6}
        justify="center"
        >
            <Grid.Col>
                <ProductCard
                imageALT="Купили недвижимость"
                imageURL={boughtProperty.src}
                whatsappButton
                titleText="Купили недвижимость?"
                price={300}
                >
                    <Text>Вы приобрели недвижимость (квартира, дом, комната, земельный участок с домом)?</Text>
                    <Text>
                        Вы можете вернуть <b>до 260 000</b> рублей с суммы, уплаченной за вашу квартиру 
                        или дом, а также можете вернуть <b>до 390 000</b> рублей с уплаченных процентов 
                        по ипотеке.
                    </Text>
                </ProductCard>
            </Grid.Col>
            <Grid.Col>
                <ProductCard
                imageALT="Оплатили обучение"
                imageURL={payTuition.src}
                whatsappButton
                titleText="Оплатили обучение"
                price={300}
                >
                    <Text>Вы заплатили за свое обучение, за своих детей, или братьев, сестер?</Text>
                    <Text>
                        Вы имеете право получить <b>13%</b> от сумм, затраченных Вами на обучение.
                    </Text>
                </ProductCard>
            </Grid.Col>
            <Grid.Col>
                <ProductCard
                imageALT="Оплатили лечение"
                imageURL={payTreatment.src}
                whatsappButton
                titleText="Оплатили лечение"
                price={300}
                >
                    <Text>Вы приобрели недвижимость (квартира, дом, комната, земельный участок с домом)?</Text>
                    <Text>
                        Вы можете вернуть до 260 000 рублей с суммы, уплаченной за вашу квартиру 
                        или дом, а также можете вернуть до 390 000 рублей с уплаченных процентов 
                        по ипотеке.
                    </Text>
                </ProductCard>
            </Grid.Col>
            <Grid.Col>
                <ProductCard
                imageALT="Дополнительный доход"
                imageURL={additionalIncome.src}
                whatsappButton
                titleText="Дополнительный доход"
                price={300}
                >
                    <Text>Вы приобрели недвижимость (квартира, дом, комната, земельный участок с домом)?</Text>
                    <Text>
                        Вы можете вернуть <b>до 260 000</b> рублей с суммы, уплаченной за вашу квартиру 
                        или дом, а также можете вернуть <b>до 390 000</b> рублей с уплаченных процентов 
                        по ипотеке.
                    </Text>
                </ProductCard>
            </Grid.Col>
            <Grid.Col>
                <ProductCard
                imageALT="Страхование"
                imageURL={insurance.src}
                whatsappButton
                titleText="Страхование"
                price={300}
                >
                    <Text>Вы заплатили за свое обучение, за своих детей, или братьев, сестер?</Text>
                    <Text>
                        Вы имеете право получить <b>13%</b> от сумм, затраченных Вами на обучение.
                    </Text>
                </ProductCard>
            </Grid.Col>
            <Grid.Col>
                <ProductCard
                imageALT="Инвестиции"
                imageURL={investments.src}
                whatsappButton
                titleText="Инвестиции"
                price={300}
                >
                    <Text>Вы приобрели недвижимость (квартира, дом, комната, земельный участок с домом)?</Text>
                    <Text>
                        Вы можете вернуть до 260 000 рублей с суммы, уплаченной за вашу квартиру 
                        или дом, а также можете вернуть до 390 000 рублей с уплаченных процентов 
                        по ипотеке.
                    </Text>
                </ProductCard>
            </Grid.Col>
            <Grid.Col span={"auto"}>
                <ProductCard
                classNameForProductCard={freeRegistrationContainer}
                imageALT="Бесплатная регистрация ИП и ООО"
                imageURL={
                    +(em(width).slice(0,-2)) >= +(getBreakPoints(theme).desktopLG.slice(0,-2))
                    ? freeRegistrationLG.src
                    : freeRegistrationSM.src
                }
                titleText="Бесплатная регистрация ИП и ООО"
                orderButtonText="Оставить заявку"
                imageWidth={"fit-content"}
                >
                    <Text>Подготовим все нужные документы</Text>
                    <Text>Поможем выбрать систему налогооблажения и виды деятельности</Text>
                    <Text>Вы не платите госпошлину 800 ₽</Text>
                    <Text>Вам не нужно ходить в налогоовую</Text>
                </ProductCard>
            </Grid.Col>
        </Grid>
        )
}

export default ProductList;