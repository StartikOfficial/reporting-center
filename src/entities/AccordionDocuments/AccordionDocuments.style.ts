import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    accordion: {
        "*": {
            fontFamily: "Montserrat",
            fontWeight: 600,
        },
        ".mantine-Accordion-content": {
            fontWeight: 400,
            padding: "8px 16px 16px"
        },
        ".mantine-Accordion-item": {
            borderBottom: "1px solid #DADAE0",
            backgroundColor: theme.colors.white[0],
        },
        ".mantine-Accordion-control": {
            padding: 16,
        },
        ".mantine-Accordion-chevron": {
            marginLeft: 12,
        },
        ".mantine-Accordion-label": {
            fontSize: 18,
        },
        [theme.fn.largerThan("tablet")]: {
            
        },
        [theme.fn.largerThan("desktopSM")]: {
            ".mantine-Accordion-content": {
                padding: "15px 30px 30px"
            },
            ".mantine-Accordion-control": {
                padding: 30,
                alignItems: "flex-start",
            },
            ".mantine-Accordion-chevron": {
                marginLeft: 30,
                marginTop: 4,
            },
            ".mantine-Accordion-label": {
                padding: 0,
                fontSize: 24,
            },
        },
        [theme.fn.largerThan("desktopLG")]: {
            
        },
        
    },
}))

export default useStyles; 