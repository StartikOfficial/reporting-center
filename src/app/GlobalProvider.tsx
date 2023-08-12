import theme from "@/shared/lib";
import { ReactNode } from "react";
import { MantineProvider } from "@mantine/core";

// Объединить все провайдеры здесь
const GlobalProvider = ({
    children
}
    :
{
    children:ReactNode
}
) => {

    return (
        <MantineProvider 
            withNormalizeCSS
            theme={theme}
        >
            {children}
        </MantineProvider>
    )
};

export default GlobalProvider;