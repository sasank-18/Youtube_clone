import {Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckBox, CheckCircle } from '@mui/icons-material';
import {Link} from 'react-router-dom';
import { demoChannelTitle, demoProfilePicture } from '../utils/constants';

const ChannelCard = ({channelDetail, channelTitle, marginTop}) => {
  console.log(channelDetail)
  return (
    <Box
    sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow:'none', borderRadius: '5%', width: {xs:'356px', md: '320px'}, height: '326px', margin : 'auto', marginTop:marginTop}}
    >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ display : 'flex', flexDirection:'column',justifyContent: 'center', textAlign: 'center', color:"#fff" }}>
            <CardMedia 
                image= {channelDetail?.snippet?.thumbnails?.high?.url|| demoProfilePicture}
                alt= {channelDetail?.snippet?.title}
                sx={{borderRadius: '50%', height : '180px', width: '180px', mb: 2 , border: '1px solid #e3e3e3'}}
            /> 
            <Typography 
             fontWeight= 'bold'
             variant = 'subtitle2'
              sx= {{ color:"gray",cursor: 'pointer' }}>    

       {channelTitle|| demoChannelTitle.slice(0,60) }
             
             <CheckCircle  sx={{ fontSize:12, color:'gray', ml: '5px' }}/>
             </Typography>
             {channelDetail?.statistics?.subscriberCount && (
                <Typography>
                    {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} {" "}
                    Subscribers
                </Typography>
             )}


        </CardContent>
    </Link>
     
    </Box>
  )
}

export default ChannelCard