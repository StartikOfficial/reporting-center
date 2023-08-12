import { createStyles } from "@mantine/core";
import { counterName } from "@/shared/ui/ListItem.style";

const useStyles = createStyles((theme) => ({
    list: {
        listStyle: "none",
        counterReset: counterName,
        margin: "0 auto",
        maxWidth: 1080, 
    },
}))

export default useStyles; 

