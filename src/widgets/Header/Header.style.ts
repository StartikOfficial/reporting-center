import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    headerStyles: {
        ".whatsappButton": {
            maxWidth: 288,
        },
        display: "flex", 
        flexDirection: "column", 
        maxWidth: "320px", 
        alignItems: "center", 
        gap: "32px",
        padding: "20px 16px 0 16px",
        margin: "0 auto 29px",
        [theme.fn.largerThan("tablet")]: {
            // height: "0.46px",
        },
        [theme.fn.largerThan("desktopSM")]: {
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "20px 30px 0",
            marginBottom: "93px",
            maxWidth: "1140px",
            ".whatsappButton": {
                maxWidth: 247,
            },
        },
        [theme.fn.largerThan("desktopLG")]: {
            // height: "1px"
        },
    },
    numberText: {
        textAlign: "center",
        fontSize: "21px",
        fontFamily: "Montserrat, sans-serif",
    },

    
}))

export default useStyles; 