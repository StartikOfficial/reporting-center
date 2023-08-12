import { createStyles } from "@mantine/core";

const ORDER_BUTTON_COLOR_HOVER = "#363636";
const ORDER_BUTTON_COLOR_ACTIVE = "#1F1F1F";


const useStyles = createStyles((theme) => ({
    orderButton: {
        background: theme.colors.black,
        span: {
            color: theme.colors.white[0],
            fontWeight: 400,
            lineHeight: "24px",
            textTransform: "uppercase",
        },
        "&:hover": {
            backgroundColor: ORDER_BUTTON_COLOR_HOVER,
        },
        "&:active": {
            backgroundColor: ORDER_BUTTON_COLOR_ACTIVE,
        },
    },
}));

export default useStyles;