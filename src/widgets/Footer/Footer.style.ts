import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    footer: {
        width: "100%", 
        backgroundColor: theme.colors.black, 
    },
    containerFooter: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        gap: "30px",
        paddingTop: "64px",
        paddingBottom: "60px",
        maxWidth: "442px",
        span: {
            color: theme.colors.white[0],
        },
        [theme.fn.largerThan("desktopSM")]: {
            alignItems: "center",
            flexDirection: "row",
            maxWidth: "1140px",
            gap: "20px 100px",
            "&>:nth-of-type(4)": {
                order: 10,
            },
            "&>:nth-of-type(5)": {
                order: 100,
            }
        },
        [theme.fn.largerThan("desktopLG")]: {
            gap: "20px 150px",
        },
    }
}))

export default useStyles; 