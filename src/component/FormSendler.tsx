import {Button, TextField} from "@mui/material";

const FormSendler = () => {
    return (
        <div>
            <form>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-normal"
                    placeholder={'Username'}
                    variant="filled"
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