import Card from "@mui/material/Card";
import {CardActions, CardContent,  Typography} from "@mui/material";

const Message = () => {
    return (
        <div className={'card-block'}>
            <Card sx={{ maxWidth: 345, backgroundColor: '#242424', color: 'white', borderRadius: '10px' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: '#ff4081' }}>
                        Заголовок
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'white' }}>
                        Описание карточки. Это может быть информация о продукте, пользователе или что-то еще, что вы хотите показать на карточке.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Typography gutterBottom component="div" sx={{ color: '#ff4081', marginLeft: '10px' }}>
                        13:37:53  15.06.2024
                    </Typography>
                </CardActions>
            </Card>
        </div>
    );
};

export default Message;