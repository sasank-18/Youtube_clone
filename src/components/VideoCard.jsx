import {Link} from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckBox, CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl ,demoChannelUrl,demoVideoUrl,demoChannelTitle,demoVideoTitle,demoProfilePicture} from '../utils/constants';

const VideoCard = ({video:{id:{videoId},snippet}}) => {
  return (
      <Card sx= {{ borderRadius: '5%',  width: {xs: '100%', sm:'358px', md: '320px'}  }}>
        <Link to= {videoId? `/video/${videoId}`: demoVideoUrl}>
            <CardMedia 
            image={snippet?.thumbnails?.high?.url}
             alt= {snippet?.titlle}   
             sx={{ width:{xs: '100%', sm:'358px',md: '320px'}, height:  180 }}
            />          
            <CardContent 
            sx={{backgroundColor: '#1e1e1e' , height: '106px'}} >
            <Link to= {videoId? `/video/${videoId}`: demoVideoUrl}>
             <Typography 
             fontWeight= 'bold'
             variant = 'subtitle1'
              sx= {{ color:"#fff",cursor: 'pointer'}}>           
             {snippet?.title.slice(0, 60)|| demoVideoTitle.slice(0,60)} 
             </Typography>
            </Link>
            <Link to= {snippet?.channelId? `/video/${snippet?.channelId}`: demoChannelUrl}>
             <Typography 
             fontWeight= 'bold'
             variant = 'subtitle2'
              sx= {{ color:"gray",cursor: 'pointer' }}>           
             {snippet?.channelTitle.slice(0, 60)|| demoChannelTitle.slice(0,60)} 
             <CheckCircle  sx={{ fontSize:12, color:'gray', ml: '5px' }}/>
             </Typography>
            </Link>


            </CardContent>
            
        </Link>
      </Card>

    )
}

export default VideoCard