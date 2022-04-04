import React from 'react';
import {Typography} from "@mui/material";

type GreetingsProps = {
    name: String
};

const Greetings:React.FC<GreetingsProps> = ({name}) => {
    return (
        <>
            <h1>Hello {name}!</h1>
            <Typography variant={'h6'}>Hello {name}!</Typography>
        </>
    )
}

export default Greetings;
