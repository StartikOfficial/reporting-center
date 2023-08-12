import { createStyles } from "@mantine/core";

export const counterName = "list-counter";

const useStyles = createStyles((theme) => ({
  li: {
      paddingBottom: 45,
      counterIncrement: counterName,
      position: "relative",
      paddingLeft: 56,
      maxWidth: 1000,
      h3: {
        paddingTop: 5,
        marginBottom: 15,
        fontSize: 24,
      },
      ".mantine-Text-root": {
        marginBottom: 15,
      },
      ".mantine-Text-root:last-child": {
        marginBottom: 45,
      },
      "&::before": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        content: "counter(list-counter)",
        position: "absolute",
        background: theme.colors.black,
        left: 0,
        width: 40,
        height: 40,
        borderRadius: "50%",
        lineHeight: 24,
        fontFamily: "Montserrat",
        color: theme.colors.white[0],
        fontSize: 24,
      },
      "&:not(:last-child)::after": {
        content: `""`,
        position: "absolute",
        left: 19,
        top: 39,
        width: 3,
        height: "100%",
        background: theme.colors.black,
      },
      [theme.fn.largerThan("desktopSM")]: {
        paddingLeft: 80,
      },
    },
  
  }));

export default useStyles;