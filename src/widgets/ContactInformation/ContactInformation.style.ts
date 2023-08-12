import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    background: {
        overflow: "hidden",
        position: "relative",
        "*": {
            lineHeight: "normal",
        },
        ".sectionTitle": {
            fontSize: 18,
            "&~span:not(.sectionTitle), &~button": {
                fontSize: 14,
            },
            "&~button": {
                color: "#11B7E9",
            }
        },
        [theme.fn.largerThan("tablet")]: {
            alignItems: "stretch",
        },
        [theme.fn.largerThan("desktopSM")]: {
        
        },
    },
    titleWithText: {
        backgroundColor: theme.colors.white[0],
        margin: "64px 16px 32px",
        width: "100%",
        maxWidth: 472,
        ".mantine-Group-root span": {
            marginRight: 10,
        },
        [theme.fn.largerThan("tablet")]: {
            marginRight: 0,
            marginLeft: "calc(50% - 197px)",
        },
        [theme.fn.largerThan("desktopSM")]: {
            maxWidth: 400,
            position: "absolute",
            zIndex: 2,
            margin: 0,
            left: "calc(50% + 64px)",
            top: 71,
            padding: 30,
            boxShadow: `0px 3px 6px -4px rgba(0, 0, 0, 0.12), 
                        0px 6px 16px 0px rgba(0, 0, 0, 0.08), 
                        0px 9px 28px 8px rgba(0, 0, 0, 0.05)`,
        },
    },
}))

export default useStyles; 