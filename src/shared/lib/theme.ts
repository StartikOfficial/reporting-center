import { em, MantineThemeOverride } from "@mantine/core";

const theme:MantineThemeOverride = {
    globalStyles: (theme) => ({
      "*": {
        fontSize: "16px",
        fontFamily: "Open Sans, sans-serif",
        lineHeight: "normal",
        fontStyle: "normal",
      },
    }),
    lineHeight: "normal",
    fontFamily: "Open Sans, sans-serif",
    headings: {
      fontFamily: "Montserrat, sans-serif",
    },
    colors: {
        white: ["#ffffff", "#F4F4F8"],
        black: ["#262626"],
    },
    primaryColor: "white",
    breakpoints: {
      mobile: em("320px"),
      tablet: em("768px"),
      desktopSM: em("992px"),
      desktopLG: em("1200px"),
      xs: em("320px"),
    },
    components: {
      Text: {
        defaultProps: {
          component: "span",
        }
      }
    }
  };

export default theme;