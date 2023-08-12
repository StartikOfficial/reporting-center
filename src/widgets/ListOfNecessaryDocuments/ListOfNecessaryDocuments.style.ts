import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    background: {
        overflow: "hidden",
        height: "max-content",
        position: "relative",
        backgroundColor: "#EAEAF0",
        padding: "60px 16px 64px",
        ".mantine-Title-root": {
            marginBottom: 13,
            fontSize: 36,
            lineHeight: "normal",
        },
        [theme.fn.largerThan("tablet")]: {
            ".mantine-Title-root": {
                marginBottom: 16,
            },
        },
        [theme.fn.largerThan("desktopSM")]: {
            padding: "60px 30px 121px",
            ".mantine-Title-root": {
                marginBottom: 43,
                fontSize: 48,
            },
        },
        [theme.fn.largerThan("desktopLG")]: {
            padding: "60px 30px 150px",
        },
        
    },
    content: {
        textAlign: "center",
        position: "relative",
        maxWidth: 960,
        margin: "0 auto",
        [theme.fn.largerThan("desktopSM")]: {
            textAlign: "left",
        },
        [theme.fn.largerThan("desktopLG")]: {
            marginLeft: "calc(50% - 480px + 80px);"
        },
    },
    svgBackgroundContainer: {
        width: "fit-content",
        height: "fit-content",
        position: "absolute",
        top: 0,
        left: 0,
        "&:nth-of-type(2)": {
            // display: "none",
        },
        [theme.fn.largerThan("desktopSM")]: {
            transform: "scale(1.656050955414013)",
            transformOrigin: "top left",
            "&:nth-of-type(2)": {
                display: "block",
                top: 701.5,
            },
        },
    },
}))

export default useStyles; 