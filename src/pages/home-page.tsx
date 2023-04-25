import {FC} from "react";

import {List, ListItems} from "../components/list";
import {Button} from "../components/button";


export const HomePage: FC = () => {
    return (
        <div>
            <List>
                <ListItems value={1000000} isNext />
                <br/>
                <ListItems value={1000000} />
                <br/>
                <ListItems value={1000000} disabled />
            </List>

            <Button title="Inactive" color="inactive" />
            <Button title="Text" />
            <Button title="Pressed" color="pressed" />
        </div>
    )
}
