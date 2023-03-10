import { useState } from "react";
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  Select,
  Flex,
  Checkbox,
  Stack,
  Heading,
  Box,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

const AddProducts = () => {
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState("Mens");
  const [subCategory, setSubCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [discount, setDiscount] = useState("");
  const [rating, setRating] = useState("");
  const [ratingCount, setRatingCount] = useState("");
  const [size, setSize] = useState([]);
  const [offerPrice, setOfferPrice] = useState(null);
  const [originalPrice, setOriginalPrice] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const product = {
      images,
      title,
      category,
      subCategory,
      brand,
      discount,
      rating,
      ratingCount,
      size,
      offerPrice,
      originalPrice,
      quantity,
    };
    // console.log("pp", product);
    // return;
    if (
      !images ||
      !title ||
      !category ||
      !subCategory ||
      !brand ||
      !discount ||
      !rating ||
      !ratingCount ||
      !size ||
      !offerPrice ||
      !originalPrice ||
      !quantity
    ) {
      toast({
        title: "task failed",
        description: "please fill all the details",
        status: "error",
        position: "top",
        duration: 4000,
        isClosable: true,
      });
      return;
    }
    try {
      let response;
      if (category === "Mens") {
        response = await axios.post(
          "https://rc201-jsondata-serverapi.onrender.com/MensData",
          product
        );
      } else if (category === "Womens") {
        response = await axios.post(
          "https://rc201-jsondata-serverapi.onrender.com/WomensData",
          product
        );
      } else if (category === "Chlid") {
        response = await axios.post(
          "https://rc201-jsondata-serverapi.onrender.com/ChildrensData",
          product
        );
      }

      setTitle("");
      setCategory("");
      setSubCategory("");
      setBrand("");
      setDiscount("");
      setRating("");
      setRatingCount("");
      setSize([]);
      setOfferPrice(0);
      setOriginalPrice(0);
      setQuantity(0);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSizeChange = (event) => {
    const { value } = event.target;
    setSize(value.split(","));
  };

  return (
    <Box>
      <Heading fontWeight={"thiner"} as="h2" size="xl" mb={"30px"}>
        Add products
      </Heading>
      <Box>
        <Flex direction={"column"} h="100vh">
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Image</FormLabel>
              <Input
                type="url"
                value={images[0]}
                onChange={(event) => setImages([event.target.value])}
                isRequired
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Category</FormLabel>
              <Select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option value="Mens">Men</option>
                <option value="Womens">Women</option>
                <option value="Child">Kids</option>
                <option value="beauty">Beauty</option>
                <option value="homedecor">Home & Living</option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Subcategory</FormLabel>
              <Select
                value={subCategory}
                onChange={(event) => setSubCategory(event.target.value)}
              >
                <option value="shirt">Shirt</option>
                <option value="t-shirts">T-Shirts</option>
                <option value="jeans">Jeans</option>
                <option value="jacket">Jacket</option>
                <option value="trouser">Trouser</option>
                <option value="sweatshirt">SweatShirt</option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Brand</FormLabel>
              <Input
                type="text"
                value={brand}
                onChange={(event) => setBrand(event.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Discount</FormLabel>
              <Input
                type="text"
                value={discount}
                onChange={(event) => setDiscount(event.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Rating</FormLabel>
              <Input
                type="text"
                value={rating}
                onChange={(event) => setRating(event.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Rating Count</FormLabel>
              <Input
                type="text"
                value={ratingCount}
                onChange={(event) => setRatingCount(event.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Size</FormLabel>
              <Input
                type="text"
                value={size.join(",")}
                onChange={handleSizeChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Offer Price</FormLabel>
              <Input
                type="number"
                value={offerPrice}
                onChange={(event) => setOfferPrice(event.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Original Price</FormLabel>
              <Input
                type="number"
                value={originalPrice}
                onChange={(event) => setOriginalPrice(event.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Quantity</FormLabel>
              <Input
                type="number"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
              />
            </FormControl>

            <Stack mt={4} spacing={4}>
              <Button type="submit" colorScheme="blue">
                Add Product
              </Button>
            </Stack>
          </form>
        </Flex>
      </Box>
    </Box>
  );
};

export default AddProducts;
