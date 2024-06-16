import {Button, TextField} from "@mui/material";
import React, { useState} from "react";
interface Props{
    username: string;
    message: string;
}
const FormSendler = () => {

    const [textToPost, setTextToPost] = useState<Props>({ username: '', message: '' });
    const url = 'http://146.185.154.90:8000/messages';

    const followChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTextToPost(prevState => ({...prevState, [name]: value}));
    };

    const btnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTextToPost({ username: '', message: '' });

        const data = new URLSearchParams();
        data.set('message', textToPost.message);
        data.set('author', textToPost.username);

        await fetch(url, {
            method: 'post',
            body: data,
        });
    };

    return (
        <div>
            <form onSubmit={btnSubmit}>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-normal"
                    placeholder={'Username'}
                    variant="filled"
                    name={'username'}
                    onChange={followChange}
                    value={textToPost.username}
                    sx={{
                        '& .MuiInputBase-input': {
                            color: 'white',
                            backgroundColor: '#242424',
                            borderRadius: '5px',
                            borderTopLeftRadius: '5px',
                            borderTopRightRadius: '5px',
                            borderBottomLeftRadius: '0px',
                            borderBottomRightRadius: '0px',

                        },
                        '& .MuiFilledInput-underline:after': {
                            borderBottomColor: '#ff4081',
                        },
                    }}
                />
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-normal"
                    placeholder={'Message'}
                    variant="filled"
                    name={'message'}
                    value={textToPost.message}
                    onChange={followChange}
                    sx={{
                        '& .MuiInputBase-input': {
                            color: 'white',
                            backgroundColor: '#242424',
                            borderRadius: '5px',
                            marginLeft: '10px',
                            borderTopLeftRadius: '5px',
                            borderTopRightRadius: '5px',
                            borderBottomLeftRadius: '0px',
                            borderBottomRightRadius: '0px',

                        },
                        '& .MuiFilledInput-underline:after': {
                            borderBottomColor: '#ff4081',
                            marginLeft: '10px',
                        },
                    }}/>
                <Button
                    variant="outlined"
                    type={'submit'}
                    sx={{
                        color: 'white',
                        borderColor: 'white',
                        '&:hover': {
                            borderColor: '#ff4081',
                            color: '#ff4081',
                        },
                        borderRadius: '4px',
                        padding: '10px 20px',
                        margin: '5px 0 0 10px',
                    }}>
                    Send it!
                </Button>
            </form>
        </div>
    );
};

export default FormSendler;