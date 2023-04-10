import {
  border,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { searchOutput } from '../../../Utils/SearchOutpu'

const Searchbar = () => {
  const [color, setColor] = useState('#edf2f2')
  const [show, setShow] = useState(false)
  const [text, setText] = useState('')
  const [data, setData] = useState([])

  const handleChange = (e) => {
    setText(e.target.value)
    if (e.target.value.length == 0) {
      return
    }
  }
  useEffect(() => {
    const id = setTimeout(() => {
      if (text) {
        let filterData = searchOutput.filter((item) => {
          if (item.title.toLowerCase().includes(text.toLowerCase())) {
            return item
          }
        })

        setData(filterData)
      }
    }, 900)
    return () => {
      clearTimeout(id)
    }
  }, [text])

  return (
    <Box bg={color} borderRadius={'md'} pos='relative'>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          children={<FiSearch color='gray.300' />}
        />
        <Input
          type='text'
          border={'none'}
          value={text}
          outline='none'
          onChange={handleChange}
          _focus={{
            boxShadow: 'none',
            border: '1px solid #787373',
            outline: 'none',
          }}
          placeholder='Search for products brands and more'
          onBlur={() => {
            setColor('gray.100')
            setTimeout(() => {
              setShow(false)
            }, 200)
          }}
          onFocus={() => {
            setColor('white')
            setShow(true)
          }}
        />
      </InputGroup>
      {show && text.length > 0 && (
        <Box
          pos={'absolute'}
          top='3.2rem'
          width='full'
          height='19.4rem'
          bg='gray.100'
          borderRadius={'md'}
          overflowY='scroll'
          sx={{
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {data.map((item) => {
            return (
              <Link
                to={item.link}
                key={item.title}
                onClick={() => {
                  setText('')
                }}
              >
                <Text
                  padding='8px'
                  pb='1.7px'
                  pl='15ssssssssssssssspx'
                  borderBottomWidth={'1px'}
                >
                  {item.title}
                </Text>
              </Link>
            )
          })}
        </Box>
      )}
    </Box>
  )
}

export default Searchbar
