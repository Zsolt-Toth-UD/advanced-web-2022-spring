import React from 'react';
import { Button, TextField} from '@mui/material';

const GreetingsForm:React.FC = () => {

    const [name, setName] = React.useState<String>('');

    return (
        <>
            <TextField
                value={name}
                onChange={(event) => {
                    setName(event.target.value)
                }
            }/>
            <Button
                onClick={()=>{alert(name)}}
                variant={'contained'}
            >Say Hello</Button>
            </>
    )
}

export default GreetingsForm;
