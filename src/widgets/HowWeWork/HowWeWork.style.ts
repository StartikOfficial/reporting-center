import { createStyles } from "@mantine/core";

const svgSm = encodeURIComponent(
    `
    <svg width="200" height="300" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <svg id="circle" width="200" height="200" viewBox="0 0 200 200" y="100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="100" fill="#F8F8FA"/>
        </svg>
    </svg>
    `
);

const svgLg = encodeURIComponent(
    `
    <svg width="400" height="600" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <svg id="circle" width="400" height="400" viewBox="0 0 400 400" y="200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="200" fill="#F8F8FA"/>
        </svg>
    </svg>
    `
);

const useStyles = createStyles((theme) => ({
  backgroundWithSVG: {
    backgroundColor: theme.colors.white[1],
    position: "absolute",
    right: -100,
    top: 0,
    height: "100%",
    background: `url("data:image/svg+xml,${svgSm}") repeat-y`,
    width: 200,
    [theme.fn.largerThan("desktopSM")]: {
      width: 400,
      right: -200,
      background: `url("data:image/svg+xml,${svgLg}") repeat-y`,
    }
  },
  relative: {
    position: "relative",
    overflow: "hidden",
    background: theme.colors.white[1],
    padding: "64px 16px 19px",
    [theme.fn.largerThan("desktopSM")]: {
      padding: "60px 30px 155px",
    },
    [theme.fn.largerThan("desktopLG")]: {
      padding: "60px 30px 125px",
    },
  },
  line: {
    backgroundColor: "#F8F8FA",
    height: "100%",
    width: "12.5%",
    marginLeft: "37.5%",
  },
  heading: {
    margin: "0 auto",
    position: "relative",
    lineHeight: "normal",
    fontSize: 36,
    maxWidth: 1140,
    fontWeight: 600,
    marginBottom: 33,
    [theme.fn.largerThan("tablet")]: {
      marginBottom: 37,
    },
    [theme.fn.largerThan("desktopSM")]: {
      fontSize: 48,
      marginBottom: 73,
    },
  },
  }));

export default useStyles;