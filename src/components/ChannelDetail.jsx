import React from 'react'
import ChannelCard from './ChannelCard'
import Videos from './Videos'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { useState, useEffect } from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'


const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  console.log(channelDetail, videos);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => {
        console.log(data.items)
        setChannelDetail(data.items[0])
      })
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => {
        console.log(data.items)
        setVideos(data.items)
      })
  }, [id]);

  return (

    <Box minHeight='95vh'>
      <Box>
        <Box sx={{
          height: '300px', width: '100%',
          background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(140,140,196,1) 100%, rgba(0,212,255,1) 100%)',
        }} />
        <ChannelCard marginTop='-123px' channelDetail={channelDetail} channelTitle={channelDetail?.snippet?.title} />

      </Box>
      <Box display='flex' p="2">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />

      </Box>
    </Box>

  )
}

export default ChannelDetail;