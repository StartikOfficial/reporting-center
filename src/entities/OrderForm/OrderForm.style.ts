import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    orderFormContainer: {
        maxWidth: "502px",
        height: "fit-content",
        padding: "16px 16px 32px",
        backgroundColor: theme.colors.white[0],
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        "*": {
            color: theme.colors.black,
            fontFamily: "Open Sans",
        },
        ".mantine-Text-root": {
            fontSize: "18px",
            lineHeight: "32px",
            fontWeight: 400,
        },
        label: {
            fontSize: "14px",
            marginBottom: "8px",
            lineHeight: "22px",
        },
        input: {
            height: "auto",
            lineHeight: "24px",
        },
        ".mantine-Input-input": {
            padding: "8px 12px",
            borderRadius: "2px",
            border: "1px solid #DADAE0",
        },
        ".mantine-Select-dropdown div[data-selected]": {
            color: theme.colors.black,
        },
        
        [theme.fn.largerThan("tablet")]: {
            
        },
        [theme.fn.largerThan("desktopSM")]: {
            maxWidth: "400px",
            padding: "30px 30px 54px",
        },
        [theme.fn.largerThan("desktopLG")]: {
            
        },
        
    },
    whatsappText: {
        width: "100%",
        marginTop: 16,
    },
}))

export default useStyles; 