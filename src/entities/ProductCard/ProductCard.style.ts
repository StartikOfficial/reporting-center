import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    productCard: {
        margin: "0 auto",
        maxWidth: "510px",
        height: "100%",
        [theme.fn.largerThan("tablet")]: {
            // height: "0.46px",
        },
        [theme.fn.largerThan("desktopSM")]: {
            margin: 0,
            maxWidth: "340px",
        },
        [theme.fn.largerThan("desktopLG")]: {
            
        },
    },
    lineHeight24: {
        lineHeight: "24px",
    },
    titleWithText: {
        lineHeight: "24px",
        gap: 0,
        ">*": {
            marginBottom: "15px",
        },
        "h3": {
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "8px",
            fontWeight: 600,
        },
    }
}))

export default useStyles; 