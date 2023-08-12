import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    backgroundContainer: {
        color: "white",
        width: "100%", 
        ".mantine-Title-root": {
            textTransform: "none",
        },
    },
    formAndTextContainer: {
        gap: "12px",
        maxWidth: 502,
        margin: "0 auto",
        padding: "0 8px 64px",
        [theme.fn.largerThan("tablet")]: {
            
        },
        [theme.fn.largerThan("desktopSM")]: {
            flexDirection: "row",
            justifyContent: "center",
            maxWidth: "none",
            padding: "0 30px 36px",
        },
        [theme.fn.largerThan("desktopLG")]: {
            paddingBottom: 136,
            gap: 67,
        },
    },
    textContainer: {
        maxWidth: 718,
        margin: "0 8px 48px",
        "*": {
            lineHeight: "normal",
        },
        ".mantine-Text-root": {
            fontSize: 18,
            fontWeight: 600,
            maxWidth: 580,
        },
        ".mantine-Title-root": {
            fontSize: 36,
            maxWidth: "none",
        },
        [theme.fn.largerThan("tablet")]: {
            margin: "0 0 48px",
        },
        [theme.fn.largerThan("desktopSM")]: {
            gap: "27px",
            ".mantine-Title-root": {
                marginTop: "18px",
                marginBottom: "34px",
            },
        },
        [theme.fn.largerThan("desktopLG")]: {
            ".mantine-Text-root": {
                fontSize: 24,
            },
            ".mantine-Title-root": {
                fontSize: 54,
            },
        },
    },
}))

export default useStyles; 