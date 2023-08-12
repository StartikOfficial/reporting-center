import { Box } from "@mantine/core";
import {
    ContactInformation, FreeConsultation, HowWeWork, 
    ListOfNecessaryDocuments, ProductList
} from "@/widgets";


const Main = () => {

    return (
        <Box component={"main"}>
            <ProductList/>
            <HowWeWork/>
            <ListOfNecessaryDocuments/>
            <FreeConsultation/>
            <ContactInformation/>
        </Box>
        )
}

export default Main;