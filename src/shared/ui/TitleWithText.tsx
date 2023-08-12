import { Title, Stack, TitleOrder } from "@mantine/core";
import { CSSProperties, ReactNode } from "react";

interface ITitleWithText {
    className?: string,
    titleOrder?: TitleOrder,
    titleText: string,
    children: ReactNode,
    align?: CSSProperties["textAlign"],
    textTransform?: CSSProperties["textTransform"],
}

const TitleWithText = ({
    className, titleOrder, titleText, children, align, textTransform = "uppercase"
}
    : ITitleWithText
) => {

    return (

        <Stack className={className}>
            <Title 
            order={titleOrder} 
            align={align} 
            style={{textTransform: textTransform}}
            >
                {titleText}
            </Title>
            
            {children}
        </Stack>

        )
}

export default TitleWithText;