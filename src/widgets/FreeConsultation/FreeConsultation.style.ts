import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    background: {
        gap: 0,
        padding: "44.08px 0 79px",
        backgroundColor: `${theme.colors.white[1]}7F`,
        ".mantine-Image-root": {
            position: "relative",
            zIndex: 2,
            order: 0,
            maxWidth: 502,
        },
        [theme.fn.largerThan("tablet")]: {
            padding: "1px 0 64px",
            backgroundColor: theme.colors.white[1],
            ".mantine-Image-root": {
                zIndex: 1,
            },
        },
        [theme.fn.largerThan("desktopSM")]: {
            flexDirection: "row",
            padding: "51px 0 51px",
            ".mantine-Image-root": {
                maxWidth: "740px",
                zIndex: 1,
                width: 740,
                height: 602,
                order: 2,
                marginLeft: -258,
            },
        },
        [theme.fn.largerThan("desktopLG")]: {
            ".mantine-Image-root": {
                marginLeft: -190,
            },
        },
    },
    orderForm: {
        margin: "-40px 16px 0",
        width: "calc(100% - 64px)",
        maxWidth: 470,
        padding: 16,
        boxShadow: `0px 3px 6px -4px rgba(0, 0, 0, 0.12), 
                    0px 6px 16px 0px rgba(0, 0, 0, 0.08), 
                    0px 9px 28px 8px rgba(0, 0, 0, 0.05)`,
        [theme.fn.largerThan("tablet")]: {
            margin: "-94px 0 0",
            paddingBottom: 49,
            zIndex: 2,
        },
        [theme.fn.largerThan("desktopSM")]: {
            margin: 0,
            width: 420,
            padding: 30,
            marginLeft: "calc(50% - 480px + 14px)",
        },
        [theme.fn.largerThan("desktopLG")]: {
            marginLeft: "calc(50% - 480px + 20px)",
        },
    },
}))

export default useStyles; 