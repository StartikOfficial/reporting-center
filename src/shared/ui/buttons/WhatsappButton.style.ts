import { createStyles } from "@mantine/core";

const LIGHT_BUTTON_COLOR = "#fff";
const LIGHT_BUTTON_COLOR_HOVER = "#9FD7E8";
const LIGHT_BUTTON_COLOR_ACTIVE = "#B3DFEC";

const DARK_BUTTON_COLOR = "#262626";
const DARK_BUTTON_COLOR_HOVER = "#363636";
const DARK_BUTTON_COLOR_ACTIVE = "#1F1F1F";

const sharedStyles = {
    padding: "8px 16px",
    height: "40px", 
    width: "100%",
}

const useStyles = createStyles(() => ({
    whatsappButtonStylesLight: {
        color: LIGHT_BUTTON_COLOR,
        outlineColor: LIGHT_BUTTON_COLOR, 
        border: `1px solid ${LIGHT_BUTTON_COLOR}`,
        "&:hover": {
            borderColor: LIGHT_BUTTON_COLOR_HOVER,
            background: "none",
            span: {
                color: LIGHT_BUTTON_COLOR_HOVER,
            },
            "svg path": {
                fill: LIGHT_BUTTON_COLOR_HOVER
            },
        },
        "&:active": {
            borderColor: LIGHT_BUTTON_COLOR_ACTIVE,
            background: "none",
            span: {
                color: LIGHT_BUTTON_COLOR_ACTIVE,
            },
            "svg path": {
                fill: LIGHT_BUTTON_COLOR_ACTIVE
            },
        },
        ...sharedStyles,
    },
    whatsappButtonStylesDark: {
        color: DARK_BUTTON_COLOR,
        outlineColor: DARK_BUTTON_COLOR, 
        border: `1px solid ${DARK_BUTTON_COLOR}`,
        "&:hover": {
            borderColor: DARK_BUTTON_COLOR_HOVER,
            background: "transparent",
            span: {
                color: DARK_BUTTON_COLOR_HOVER,
            },
            "svg path:first-of-type": {
                fill: DARK_BUTTON_COLOR_HOVER
            },
        },
        "&:active": {
            borderColor: DARK_BUTTON_COLOR_ACTIVE,
            background: "transaprent",
            span: {
                color: DARK_BUTTON_COLOR_ACTIVE,
            },
            "svg path:first-of-type": {
                fill: DARK_BUTTON_COLOR_ACTIVE
            },
            borderWidth: "1px",
            outline: "none",
        },
        ...sharedStyles,
    },
}))

export default useStyles; 