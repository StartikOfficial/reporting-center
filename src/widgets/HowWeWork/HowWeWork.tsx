import { WorkList } from "@/entities";
import { Box, Title } from "@mantine/core";
import useStyles from "./HowWeWork.style";

const HowWeWork = () => {
    const { 
      backgroundWithSVG, relative, line, heading
     } = useStyles().classes;

  return (
    <Box className={relative}>
        <Box className={backgroundWithSVG}>
            <Box className={line}/>
        </Box>
        <Title 
          order={2} 
          align="center"
          className={heading}
          >
            Как мы работаем
        </Title>
        <WorkList/>
    </Box>
  );
};

export default HowWeWork;