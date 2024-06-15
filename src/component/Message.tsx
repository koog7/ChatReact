import Card from "@mui/material/Card";
import {CardActions, CardContent,  Typography} from "@mui/material";
import {useEffect, useState} from "react";

interface Props{
    _id: string;
    message: string;
    author: string;
    datetime: string;
}

const Message = () => {

    const [dataMessages, setDataMessages] = useState<Props[]>([]);
    const url = 'http://146.185.154.90:8000/messages';

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            if (response.ok) {
                const item = await response.json() as Props[];
                const reverseItems = item.reverse();
                setDataMessages(reverseItems);
                console.log(item)
                console.log(dataMessages)
            }
        };

        void fetchData();
    }, []);


    return (
        <div className={'card-block'} style={{height: '500px' , overflow: 'auto', width: '380px'}}>
            {dataMessages.map((item) => (
                <Card sx={{ maxWidth: 345, backgroundColor: '#242424', color: 'white', borderRadius: '10px', marginTop: '20px'}}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#ff4081' }}>
                            {item.author}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'white' }}>
                            {item.message}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Typography gutterBottom component="div" sx={{ color: '#ff4081', marginLeft: '10px' }}>
                            {item.datetime}
                        </Typography>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
};

export default Message;