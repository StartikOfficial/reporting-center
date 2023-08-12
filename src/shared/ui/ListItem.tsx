import { List, Text, Title } from "@mantine/core";
import { ReactElement } from "react";
import useStyles from "./ListItem.style";


type TListItem = {
    heading: string,
    children?: ReactElement<typeof Text>,
};

const ListItem = ({
    children, heading
}
    : TListItem
) => {
    const { li } = useStyles().classes;
    
    return (
        <List.Item className={li}>
            <Title order={3}>{heading}</Title>
            {children}
        </List.Item>
    )
}

export default ListItem;