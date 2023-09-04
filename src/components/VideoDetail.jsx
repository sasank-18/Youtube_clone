import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material'
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';



const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null);
  const  {id} = useParams();
 
   console.log(videoDetail)
   console.log(videos)
   
   useEffect(()=>{
      fetchFromAPI(`videos?part= snippet,statistic&id=${id}`)
      .then((data)=>{
               setVideoDetail(data.items[0])
      })

      fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data)=>{
           setVideos(data.items)   
      })
   }, [id])

   if(!videoDetail?.snippet) return 'loading...'
 const { snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount}}= videoDetail;
   
  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }} >
        <Box color='#fff' flex={1} >
          <Box sx={{ width: '100%' , top: '86px' }}>
            <ReactPlayer controls className= "react-player" url={`https://www.youtube.com/watch?v=${videoDetail?.id}`} />
            <Typography color="#fff"  variant = 'h5' fontWeight= 'bold' p= {2}>
              {title}
            </Typography>
            <Stack direction = 'row'  justifyContent= 'space-between'  sx= {{ color:'#fff'}} py={1} px= {2}>
              <Link  to= {`/channel/${channelId}`}>
                <Typography alignItem='center' sx={{}} variant= {{ sm: 'subtitl1', md: 'h6', }} color= '#fff'>
                             {channelTitle}   
                             <CheckCircle sx={{fontSize: '12px', color: 'gray', ml:'5px'  }}/>                                                                                                                                                              
                </Typography>
              </Link>
              <Stack direction='row' alignItem='center' gap= '20px'>
                <Typography variant= 'body1' sx={{opacity: 0.7}}>
                   {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant= 'body1' sx={{opacity: 0.7}}>
                   {parseInt(likeCount).toLocaleString()} views
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>


        <Box px={2}  py={{md:2, xs:5}} justifyContent="center" alignItems="center">
          <Videos videos= {videos}  direction= 'column'/>
        </Box>
      </Stack>


    </Box>
  )
}

export default VideoDetail