import { Stack, Image, Space } from "@mantine/core";
import useStyles from "./ProductCard.style";
import { OrderButton, TitleWithText, WhatsappButton } from "@/shared/ui";
import { ReactNode } from "react";

interface IProductCard {
    classNameForProductCard?: string,
    titleText: string,
    orderButtonText?: string, 
    price?: number, 
    whatsappButton?: boolean,
    imageURL: string,
    imageALT: string,
    children?: ReactNode,
    imageWidth?: string | number,
}

const ProductCard = ({
    classNameForProductCard, 
    titleText, 
    orderButtonText, 
    price, 
    whatsappButton, 
    imageURL, 
    imageALT, 
    children,
    imageWidth,
}
    : IProductCard
) => {
    const { productCard, lineHeight24, titleWithText } = useStyles().classes;

    return (
        <Stack className={`${productCard} ${classNameForProductCard}`} spacing={"15px"} justify="space-between">
            <Image src={imageURL} alt={imageALT} width={imageWidth ? imageWidth : "100%"}/>
            <Stack justify="space-between" sx={{flexGrow: 2}} spacing={"15px"}>
                <TitleWithText
                className={titleWithText}
                titleOrder={3}
                titleText={titleText}
                align="center"
                >
                    {children}
                </TitleWithText>
                <Space h="1px"/>
                <Stack spacing={"15px"}>
                    {price 
                    && <span 
                        className={lineHeight24}
                        style={{
                            background: `linear-gradient(90deg, #FAED61 calc(100% - 5px), transparent 5px)`,
                            width: "fit-content",
                            fontWeight: 700,
                    }}>{price} ₽</span>}
                    
                    <Space h={"5px"}/>

                    <OrderButton>{orderButtonText ? orderButtonText : "Заказать"}</OrderButton>

                    {whatsappButton && <WhatsappButton/>}
                </Stack>
                
            </Stack>
        </Stack>
        )
}

export default ProductCard;