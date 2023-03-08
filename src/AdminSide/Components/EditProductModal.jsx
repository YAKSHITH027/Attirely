import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  FormControl,
  FormLabel,
  Box,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";

import { useState } from "react";

export default function EditProductModal({ item, lamb, reload }) {
  const [prodData, setProdData] = useState({
    images: [item.images[0]],
    quantity: item.quantity,
    title: item.title,
    offerPrice: item.offerPrice,
    brand: item.brand,
    category: item.category,
    originalPrice: item.originalPrice,
    rating: item.rating,
    ratingCount: item.ratingCount,
    subCategory: item.subCategory,
    discount: item.discount,
    size: item.size,
  });

  const {
    images,
    title,
    offerPrice,
    brand,
    category,
    originalPrice,
    quantity,
    rating,
    ratingCount,
    subCategory,
  } = prodData;
  //   console.log(prodData)
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const [categoryState, setCategoryState]= useState(category);
  // const [lamb, setLamb] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();

    // if (category === "Mens") {
    //   setLamb("MensData");
    // }

    // if (category === "Womens") {
    //   setLamb("WomensData");
    // }

    // if (category === "Child") {
    //   setLamb("ChildrensData");
    // }
    try {
      let url = `https://rc201-jsondata-serverapi.onrender.com/${lamb}/${item.id}`;
      let res = await axios.patch(url, prodData);
      // console.log(res);
      // console.log(url);
      reload();
      // console.log(res.data);
      // console.log(prodData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name == "image") {
      setProdData({ ...prodData, [name]: [value] });
    } else {
      setProdData({ ...prodData, [name]: value });
    }
  };
  // console.log(prodData);

  //   console.log(prodData);

  return (
    <div>
      <Button onClick={onOpen} backgroundColor={"green"} color={"white"}>
        Edit
      </Button>

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size="3xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form>
              <FormControl>
                <FormLabel>Image URL</FormLabel>
                <Input
                  type={"url"}
                  name="images"
                  isRequired
                  value={images}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl>
                <Flex justifyContent={"space-around"} gap="4">
                  <Box width={"full"}>
                    <FormLabel>Title</FormLabel>
                    <Input
                      value={title}
                      isRequired
                      name="title"
                      onChange={handleChange}
                    />
                  </Box>
                  <Box width={"full"}>
                    <FormLabel>Brand</FormLabel>
                    <Input
                      value={brand}
                      isRequired
                      name="brand"
                      onChange={handleChange}
                    />
                  </Box>
                </Flex>
              </FormControl>

              <FormControl>
                <FormLabel>Category</FormLabel>
                <Input
                  value={category}
                  name="category"
                  isRequired
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <Flex justifyContent={"space-around"} gap="4">
                  <Box width={"full"}>
                    <FormLabel>Original Price</FormLabel>
                    <Input
                      name="offerPrice"
                      type={"number"}
                      isRequired
                      value={originalPrice}
                      onChange={handleChange}
                    />
                  </Box>
                  <Box width={"full"}>
                    <FormLabel>Offer Price</FormLabel>
                    <Input
                      name="offerPrice"
                      type={"number"}
                      isRequired
                      value={offerPrice}
                      onChange={handleChange}
                    />
                  </Box>
                  <Box width={"full"}>
                    <FormLabel>Quanity</FormLabel>
                    <Input
                      name="quantity"
                      type={"number"}
                      isRequired
                      value={quantity}
                      onChange={handleChange}
                    />
                  </Box>
                </Flex>
              </FormControl>
              <FormControl>
                <Flex marginTop={"5px"} justifyContent={"space-around"} gap="4">
                  <Box width={"full"}>
                    <FormLabel>Rating</FormLabel>
                    <Input
                      name="rating"
                      type={"number"}
                      isRequired
                      value={rating}
                      onChange={handleChange}
                    />
                  </Box>
                  <Box width={"full"}>
                    <FormLabel>Rating Count</FormLabel>
                    <Input
                      name="Rating Count"
                      isRequired
                      value={ratingCount}
                      onChange={handleChange}
                    />
                  </Box>
                  <Box width={"full"}>
                    <FormLabel>Sub Cateogry</FormLabel>
                    <Input
                      name="sub category"
                      isRequired
                      value={subCategory}
                      onChange={handleChange}
                    />
                  </Box>
                </Flex>
              </FormControl>
              <Button
                type="submit"
                colorScheme="blue"
                mr={3}
                // value={item.id}
                onClick={(e) => {
                  handleAdd(e);
                  onClose();
                }}
                marginTop="2rem"
                width="full"
              >
                Edit
              </Button>
            </form>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
