import React from 'react'
import {Stack, Box} from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({videos , direction, justifyContents}) => {
  
  if(!videos?.length){
    return 'loading..';
  }

  return (
     
    <Stack  direction={direction||'row'} flexWrap= 'wrap' justifyContent='start' gap={2}>
       { videos.map((item, idx)=>{
       return  <Box key={idx}>
        {/* {item.id.videoId && <VideoCard video={item} />}
        {item.id.channelId && <ChannelCard channelDetail={item} />} */}
        {item.id.videoId ? <VideoCard video={item} /> :  <ChannelCard channelDetail={item} channelTitle={item?.snippet?.channelTitle} />}

        </Box>
       })}
    </Stack>

    )
}

export default Videos;