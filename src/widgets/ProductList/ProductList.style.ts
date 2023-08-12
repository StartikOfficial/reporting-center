import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    productList: {
        width: "100%",
        padding: "64px 0",
        gap: "64px",
        maxWidth: 1140,
        margin: "0 auto",
        [theme.fn.largerThan("tablet")]: {

        },
        [theme.fn.largerThan("desktopSM")]: {
            paddingTop: "100px",
            gap: "120px 60px"
        },
        [theme.fn.largerThan("desktopLG")]: {
            gap: "90px 60px"
        },
        ".mantine-Grid-col": {
            flexBasis: "fit-content",
            padding: "0 16px",
            [theme.fn.largerThan("tablet")]: {
                
            },
            [theme.fn.largerThan("desktopSM")]: {
                padding: 0,
                flexBasis: "calc(50% - 60px)",
                "&:nth-of-type(2n+1)>.mantine-Stack-root": {
                    marginLeft: "auto",
                },
            },
            [theme.fn.largerThan("desktopLG")]: {
                flexBasis: "calc(33.3% - 60px)",
            },
        },
    },
    freeRegistrationContainer: {
        ".mantine-Image-root": {
            marginLeft: 8,
        },
        alignItems: "center",
        "h3": {
            marginTop: "30px",
            height: "auto",
            marginBottom: "15px",
        },

        [theme.fn.largerThan("tablet")]: {
            ".mantine-Image-root": {
                marginLeft: 0,
            },
        },
        [theme.fn.largerThan("desktopSM")]: {
            maxWidth: 740,
            flexDirection: "row",
            margin: "0 auto",
            gap: 61,
            "h3": {
                justifyContent: "flex-start",
            },
        },
        [theme.fn.largerThan("desktopLG")]: {
            maxWidth: "none",
            gap: 14.62,
        },
    },
}))

export default useStyles; 