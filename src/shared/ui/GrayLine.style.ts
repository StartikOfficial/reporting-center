import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    grayLineStyles: {
        width: "100%", 
        background: "#DADAE0", 
        height: "0.301px",
        [theme.fn.largerThan("tablet")]: {
            height: "0.46px",
        },
        [theme.fn.largerThan("desktopSM")]: {
            height: "0.968px"
        },
        [theme.fn.largerThan("desktopLG")]: {
            height: "1px"
        },
    }
}))

export default useStyles; 