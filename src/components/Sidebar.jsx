import React from 'react'
import {Stack} from '@mui/material'
import { categories } from '../utils/constants'


const Sidebar = ({selectedCategory, setSelectedCategory}) =>{


  return  (
    <Stack
    sx={{
      overflowY:'auto',
      height:{xs:'auto', md:'95%'},
      flexDirection:{xs:'row', md:'column'},
    }}
    >
         {categories.map((category)=>(
          <button
          className='category-btn'
          onClick={()=>{
            setSelectedCategory(category.name);
          }}
          style={{
           background:selectedCategory=== category.name ? '#FC1503':null
          }}
          value={selectedCategory}
          key= {category.name}
          >
            <span style = {{ color: category.name=== selectedCategory?'white' : 'red', marginRight : '15px'}}> {category.icon}</span>

            <span style= {{ opacity : category.name === selectedCategory ? '1' : '0.8'}}> {category.name}</span>
          </button>
         ))}
    </Stack>

  )
        }


export default Sidebar;