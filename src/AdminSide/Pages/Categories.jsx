import {
  Box,
  Heading,
  IconButton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React,{useEffect, useState} from "react";
import { BsThreeDots } from "react-icons/bs";

// const data = [
//   {
//     id: 1,
//     name: "Mens Products",
//     Description: "Mens Products category",
//   },
//   {
//     id: 2,
//     name: "WoMens Products",
//     Description: "Womens Products category",
//   },
//   {
//     id: 3,
//     name: "Kids Products",
//     Description: "Kids Products category",
//   },
// ];

const Categories = () => {

  const [categoryName, setCategoryName] = useState('');
  const [categoryImage, setCategoryImage] = useState(null);
  const [categoryDescription, setCategoryDescription] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(()=>{

  })
  const handleCreateCategory =  (e) => {
    e.preventDefault()

    const newCategory = {
      id: categories.length + 1,
      name: categoryName,
      image: categoryImage,
      description: categoryDescription,
    };

    const newCategories = [...categories, newCategory];
    setCategories(newCategories);

    setCategoryName('');
    setCategoryImage(null);
    setCategoryDescription('');
  }

  const handleDeleteCategory = (categoryId) => {
    
    const newCategories = categories.filter((el) => el.id !== categoryId);
    setCategories(newCategories);
  };

  const handleImageChange = (event) => {
   
    setCategoryImage(event.target.files[0]);
  };
  
  return (
    <Box >
      <Heading fontWeight={"thiner"} as="h2" size="xl" mb={"30px"}>
        Categories
      </Heading>

      <Box  display={"flex"} justifyContent={"space-between"} gap="10px" border={"1px solid gray"}>
        
        <Box  p={"20px"} width={"33%"}>
          <Box as="form">
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" border={"1px solid gray"} value={categoryName} onChange={(e) => setCategoryName(e.target.value)}/>
              <FormHelperText mb={"10px"}>Enter the name of the category.</FormHelperText>
            </FormControl>

            <FormControl id="image" isRequired>
              <FormLabel>Image</FormLabel>
              <Input type="file" border={"1px solid gray"} onChange={handleImageChange} />
              <FormHelperText mb={"10px"}>
                Choose an image to represent the category.
              </FormHelperText>
            </FormControl>

            <FormControl id="description" isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea border={"1px solid gray"} value={categoryDescription} onChange={(e) => setCategoryDescription(e.target.value)}/>
              <FormHelperText mb={"10px"}>
                Provide a description of the category.
              </FormHelperText>
            </FormControl>

            <Button mt={4} colorScheme="blue" type="submit" w={"100%"} onClick={handleCreateCategory} >
              Create Category
            </Button>
          </Box>
        </Box>
        <Box width={"60%"}  p={5}>
          <Box maxWidth="100%" overflowX="auto">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Name</Th>
                  <Th>Description</Th>
                  <Th>Action</Th>
                  
                </Tr>
              </Thead>
              <Tbody>
                {categories.map((item, index) => (
                  <Tr key={index}>
                    <Td>{item.id}</Td>
                    <Td>{item.name}</Td>
                    <Td>{item.description}</Td>
                    <Td>
                    <Button colorScheme="red" size="sm" onClick={() => handleDeleteCategory(item.id)}>Delete</Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Categories;
