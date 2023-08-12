import { AccordionDocuments } from "@/entities";
import { Box, Title } from "@mantine/core";
import useStyles from "./ListOfNecessaryDocuments.style";
import FileSVG from "./assets/fileSvg.svg";

const ListOfNecessaryDocuments = () => {
    const { background, content, svgBackgroundContainer } = useStyles().classes;

    return (
        <Box className={background}>
            <Box className={svgBackgroundContainer}>
                <FileSVG />
            </Box>
            <Box className={svgBackgroundContainer}>
                <FileSVG />
            </Box>
            <Box className={content}>
                <Title 
                    order={2} 
                    >
                    Список необходимых документов
                </Title>
                <AccordionDocuments/>
            </Box>
        </Box>
        )
}

export default ListOfNecessaryDocuments;