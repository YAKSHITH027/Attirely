import { Box, Flex } from "@chakra-ui/react";
import "./MegaMenu.css";
import React from "react";
import { Link } from "react-router-dom";

const MegaMenu = () => {
  return (
    <Flex
      height={"100%"}
      align="center"
      display={{ base: "none", lg: "Flex" }}
      width="36%"
      minW={"28rem"}
      justify={"space-around"}
      pos="relative"
    >
      <Flex
        height="100%"
        align={"center"}
        width="15%"
        justify={"center"}
        className="dropDown"
      >
        <Link to="/product/MensData">Mens</Link>
        <Box
          top="4rem"
          className="child"
          left="-2rem"
          pos={"absolute"}
          width="1000px"
          transition={"all 0.3s"}
          height={"0vh"}
          overflow="hidden"
          bg="white"
        >
          <Link to="/product/MensData">
            <div className="menu">
              <div className="menulist">
                <ul>
                  <p className="men-p">Topwear</p>
                  <li>
                    <Link to="/product/MensData">T-Shirts</Link>
                  </li>
                  <li>
                    <Link to="/product/MensData">Casual Shirts</Link>
                  </li>
                  <li>
                    <Link to="/product/MensData">Formal Shirts</Link>
                  </li>
                  <li>
                    <Link to="/product/MensData">Sweatshirts</Link>
                  </li>
                  <li>
                    <Link to="/product/MensData">Sweaters</Link>
                  </li>
                  <li>
                    <Link to="/product/MensData">Jackets</Link>
                  </li>

                  <li>
                    <Link to="/product/MensData">Blazers & Coats</Link>
                  </li>
                  <li>
                    <Link to="/product/MensData">Suits</Link>
                  </li>
                  <li>
                    <Link to="/product/MensData">Rain Jackets</Link>
                  </li>
                </ul>
                <hr />
                <ul>
                  <p className="men-p">Indian & Festive Wear</p>
                  <li>
                    <Link to="/product/MensData">Kurtas & Suits</Link>
                  </li>
                  <li>
                    <Link to="/product/MensData">Sherwanis</Link>
                  </li>
                  <li>
                    <Link to="/product/MensData">Nehru Jackets</Link>
                  </li>
                  <li>
                    <Link to="/product/MensData">Dhotis</Link>
                  </li>
                </ul>
                <hr />
              </div>

              <div className="menulist">
                <ul>
                  <p className="men-p">Bottomwear</p>

                  <li>
                    <Link to="/product/MensData">Jeans</Link>
                  </li>
                  <li>
                    <Link to="/product/MensData">Casual Shirts</Link>
                  </li>
                  <li>
                    <Link to="/product/MensData">Formal Shirts</Link>
                  </li>
                  <li>
                    <Link to="/product/MensData">Shorts</Link>
                  </li>
                  <li>
                    <Link to="/product/MensData">Track Pants & Joggers</Link>
                  </li>
                </ul>
                <hr />
                <ul>
                  <p className="men-p">Innerwear & Sleepwear</p>
                  <li>
                    <Link to="/product/MensData">Briefs & Trunks</Link>
                  </li>
                  <li>
                    <Link to="/product/MensData">Boxers</Link>
                  </li>
                  <li>
                    <Link to="/product/MensData">Vests</Link>
                  </li>
                  <li>
                    <Link to="/product/MensData">Sleepwear & Loungewear</Link>
                  </li>
                  <li>
                    <Link to="/product/MensData">Thermals</Link>
                  </li>
                  <hr />
                  <p className="men-p">Plus Size</p>
                </ul>
              </div>

              <div className="menulist">
                <ul>
                  <p className="men-p">Footwear</p>
                  <li>
                    <Link to="/product/MensData">Casual Shoes</Link>
                  </li>
                  <li>
                    <Link to="/product/MensData">Sports Shoes</Link>
                  </li>
                  <li>
                    <Link to="/product/MensData">Formal Shoes</Link>
                  </li>
                  <li>
                    <Link to="/product/MensData">Sneakers</Link>
                  </li>
                  <li>
                    <Link to="/product/MensData">Sandals & Floaters</Link>
                  </li>
                  <li>
                    <Link to="/product/MensData">Flip Flops</Link>
                  </li>
                  <li>
                    <Link to="/product/MensData">Socks</Link>
                  </li>
                </ul>
                <hr />
                <ul>
                  <p className="men-p"> Personal Care & Grooming</p>

                  <p className="men-p"> Sunglasses & Frames</p>
                  <p className="men-p"> Watches</p>
                </ul>
              </div>

              <div className="menulist">
                <ul>
                  <p className="men-p">Sports & Active Wear</p>

                  <li>
                    <Link>Sports Shoes</Link>
                  </li>
                  <li>
                    <Link>Sports Sandals</Link>
                  </li>
                  <li>
                    <Link>Active T-Shirts</Link>
                  </li>
                  <li>
                    <Link>Track Pants & Shorts</Link>
                  </li>
                  <li>
                    <Link>Tracksuits</Link>
                  </li>

                  <li>
                    <Link>Jackets & Sweatshirts</Link>
                  </li>
                  <li>
                    <Link> Sports Accessories</Link>
                  </li>
                  <li>
                    <Link>Swimwear</Link>
                  </li>
                </ul>
                <hr />
                <ul>
                  <p className="men-p">Gadgets</p>

                  <li>
                    <Link>Smart Wearables</Link>
                  </li>
                  <li>
                    <Link>Fitness Gadgets</Link>
                  </li>
                  <li>
                    <Link>Headphones</Link>
                  </li>
                  <li>
                    <Link>Speakers</Link>
                  </li>
                </ul>
              </div>

              <div className="menulist">
                <ul>
                  <p className="men-p"> Fashion Accessories</p>
                  <li>
                    <Link>Wallets</Link>
                  </li>
                  <li>
                    <Link>Belts</Link>
                  </li>
                  <li>
                    <Link>Perfumes & Body Mists</Link>
                  </li>
                  <li>
                    <Link>Trimmers</Link>
                  </li>

                  <li>
                    <Link>Deodorants</Link>
                  </li>
                  <li>
                    <Link>Ties, Cufflinks & Pocket Squares</Link>
                  </li>
                  <li>
                    <Link> Accessory Gift Sets</Link>
                  </li>
                  <li>
                    <Link>Caps & Hats</Link>
                  </li>
                  <li>
                    <Link>Mufflers, Scarves & Gloves</Link>
                  </li>
                  <li>
                    <Link>Phone Cases</Link>
                  </li>
                  <li>
                    <Link>Rings & Wristwear</Link>
                  </li>
                  <li>
                    <Link>Helmets</Link>
                  </li>
                </ul>
                <hr />
                <ul>
                  <p className="men-p"> Bags & Backpacks</p>

                  <p className="men-p">Luggages & Trolleys</p>
                </ul>
              </div>
            </div>
          </Link>
        </Box>
      </Flex>
      <Flex
        height="100%"
        align={"center"}
        width="15%"
        className="dropDown"
        justify={"center"}
      >
        <Link to="/product/WomensData">Womens</Link>
        <Box
          top="4rem"
          className="child"
          left="-2rem"
          pos={"absolute"}
          width="1000px"
          transition={"all 0.3s"}
          height={"0vh"}
          overflow="hidden"
          bg="white"
        >
          <div className="menu">
            <div className="menulist">
              <ul>
                <p className="women-p">Indian & Fusion Wear</p>
                <li>
                  <Link>Kurtas & Suits</Link>
                </li>
                <li>
                  <Link>Kurtis, Tunics & Tops</Link>
                </li>
                <li>
                  <Link>Sarees</Link>
                </li>
                <li>
                  <Link>Ethnic Wear</Link>
                </li>
                <li>
                  <Link>Leggings, Salwars & Churidars</Link>
                </li>
                <li>
                  <Link>Skirts & Palazzos</Link>
                </li>
                <li>
                  <Link>Dress Materials</Link>
                </li>
                <li>
                  <Link>Lehenga Cholis</Link>
                </li>
                <li>
                  <Link>Dupattas & Shawls</Link>
                </li>
                <li>
                  <Link>Jackets</Link>
                </li>
              </ul>
              <hr />
              <ul>
                <p className="women-p">Belts, Scarves & More</p>
                <p className="women-p">Watches & Wearables</p>
              </ul>
            </div>

            <div className="menulist">
              <ul>
                <p className="women-p"> Western Wear</p>
                <li>
                  <Link>Dresses</Link>
                </li>
                <li>
                  <Link> Tops</Link>
                </li>
                <li>
                  <Link>Tshirts</Link>
                </li>
                <li>
                  <Link>Jeans</Link>
                </li>
                <li>
                  <Link>Trousers & Capris</Link>
                </li>
                <li>
                  <Link>Shorts & Skirts</Link>
                </li>
                <li>
                  <Link>Co-ords</Link>
                </li>
                <li>
                  <Link>Playsuits</Link>
                </li>
                <li>
                  <Link>Jumpsuits</Link>
                </li>
                <li>
                  <Link>Shrugs</Link>
                </li>
                <li>
                  <Link>Sweaters & Sweatshirts</Link>
                </li>
                <li>
                  <Link>Jackets & Coats</Link>
                </li>
                <li>
                  <Link>Blazers & Waistcoats</Link>
                </li>
              </ul>
              <hr />
              <ul>
                <p className="women-p">Plus Size</p>
              </ul>
            </div>

            <div className="menulist">
              <ul>
                <p className="women-p">Maternity</p>
                <p className="women-p">Sunglasses & Frames</p>
                <p className="women-p">Footwear</p>
                <li>
                  <Link>Flats</Link>
                </li>
                <li>
                  <Link>Casual Shoes</Link>
                </li>
                <li>
                  <Link>Heels</Link>
                </li>
                <li>
                  <Link>Boots</Link>
                </li>
                <li>
                  <Link>Sports Shoes & Floaters</Link>
                </li>
              </ul>
              <hr />
              <ul>
                <p className="women-p"> Sports & Active Wear</p>
                <li>
                  <Link>Clothing</Link>
                </li>
                <li>
                  <Link>Footwear</Link>
                </li>
                <li>
                  <Link>Sports Accessories</Link>
                </li>
                <li>
                  <Link>Sports Equipment</Link>
                </li>
              </ul>
            </div>

            <div className="menulist">
              <ul>
                <p className="women-p">Lingerie & Sleepwear</p>

                <li>
                  <Link>Bra</Link>
                </li>
                <li>
                  <Link>Briefs</Link>
                </li>
                <li>
                  <Link>Shapewear</Link>
                </li>
                <li>
                  <Link>Sleepwear & Loungewear</Link>
                </li>
                <li>
                  <Link>Swimwear</Link>
                </li>

                <li>
                  <Link>Camisoles & Thermals</Link>
                </li>
              </ul>
              <hr />
              <ul>
                <p className="women-p"> Beauty & Personal Care</p>

                <li>
                  <Link>Makeup</Link>
                </li>
                <li>
                  <Link>Skincare</Link>
                </li>
                <li>
                  <Link>Premium Beauty</Link>
                </li>
                <li>
                  <Link>Lipsticks</Link>
                </li>
                <li>
                  <Link>Fragrances</Link>
                </li>
              </ul>
            </div>

            <div className="menulist">
              <ul>
                <p className="women-p"> Gadgets</p>
                <li>
                  <Link>Smart Wearables</Link>
                </li>
                <li>
                  <Link>Fitness Gadgets</Link>
                </li>
                <li>
                  <Link>Headphones</Link>
                </li>
                <li>
                  <Link>Speakers</Link>
                </li>
              </ul>
              <hr />
              <ul>
                <p className="women-p"> Jewellery</p>
                <li>
                  <Link>Fashion Jewellery</Link>
                </li>
                <li>
                  <Link>Fine Jewellery</Link>
                </li>
                <li>
                  <Link>Earrings</Link>
                </li>
              </ul>
              <hr />
              <ul>
                <p className="women-p"> Backpacks</p>
                <p className="women-p"> Handbags, Bags & Wallets</p>
                <p className="women-p"> Luggages & Trolleys</p>
              </ul>
            </div>
          </div>
        </Box>
      </Flex>
      <Flex
        height="100%"
        align={"center"}
        width="15%"
        justify={"center"}
        className="dropDown"
      >
        <Link to="/product/ChildrensData">Kids</Link>
        <Box
          top="4rem"
          className="child"
          left="-2rem"
          pos={"absolute"}
          width="1000px"
          transition={"all 0.3s"}
          height={"0vh"}
          overflow="hidden"
          bg="white"
        >
          <div className="menu">
            <div className="menulist">
              <ul>
                <p className="kids-p">Boys Clothing</p>
                <li>
                  <Link>T-Shirts</Link>
                </li>
                <li>
                  <Link> Shirts</Link>
                </li>
                <li>
                  <Link>Shorts</Link>
                </li>
                <li>
                  <Link>Jeans</Link>
                </li>
                <li>
                  <Link>Trousers</Link>
                </li>
                <li>
                  <Link>Clothing Sets</Link>
                </li>

                <li>
                  <Link>Ethnic Wear</Link>
                </li>
                <li>
                  <Link>Track Pants & Pyjamas</Link>
                </li>
                <li>
                  <Link>Jacket, Sweater & Sweatshirts</Link>
                </li>
                <li>
                  <Link>Party Wear</Link>
                </li>
                <li>
                  <Link>Innerwear & Thermals</Link>
                </li>
                <li>
                  <Link>Nightwear & Loungewear</Link>
                </li>
                <li>
                  <Link>Value Packs</Link>
                </li>
              </ul>
              <hr />
            </div>

            <div className="menulist">
              <ul>
                <p className="kids-p">Girls Clothing</p>

                <li>
                  <Link>Dresses</Link>
                </li>
                <li>
                  <Link>Tops</Link>
                </li>
                <li>
                  <Link>Tshirts</Link>
                </li>
                <li>
                  <Link>Clothing Sets</Link>
                </li>
                <li>
                  <Link>Lehenga choli</Link>
                </li>
                <li>
                  <Link>Kurta Sets</Link>
                </li>
                <li>
                  <Link>Party wear</Link>
                </li>
                <li>
                  <Link>Dungarees & Jumpsuits</Link>
                </li>
                <li>
                  <Link>Skirts & shorts</Link>
                </li>
                <li>
                  <Link>Tights & Leggings</Link>
                </li>
                <li>
                  <Link>Jeans, Trousers & Capris</Link>
                </li>
                <li>
                  <Link>Jacket, Sweater & Sweatshirts</Link>
                </li>
                <li>
                  <Link>Innerwear & Thermals</Link>
                </li>
                <li>
                  <Link>Nightwear & Loungewear</Link>
                </li>
                <li>
                  <Link>Value Packs</Link>
                </li>
              </ul>
              <hr />
            </div>

            <div className="menulist">
              <ul>
                <p className="kids-p">Footwear</p>
                <li>
                  <Link>Casual Shoes</Link>
                </li>
                <li>
                  <Link>Flip Flops</Link>
                </li>
                <li>
                  <Link>Sports Shoes</Link>
                </li>
                <li>
                  <Link>Flats</Link>
                </li>
                <li>
                  <Link>Sandals </Link>
                </li>
                <li>
                  <Link>Heels</Link>
                </li>

                <li>
                  <Link>School Shoes</Link>
                </li>
                <li>
                  <Link>Socks</Link>
                </li>
              </ul>
              <hr />
              <ul>
                <p className="kids-p"> Toys</p>
                <li>
                  <Link>Learning & Development</Link>
                </li>
                <li>
                  <Link>Activity Toys</Link>
                </li>
                <li>
                  <Link>Soft Toys</Link>
                </li>
                <li>
                  <Link>Action Figure / Play set</Link>
                </li>
              </ul>
            </div>

            <div className="menulist">
              <ul>
                <p className="kids-p">Infants</p>

                <li>
                  <Link>Bodysuits</Link>
                </li>
                <li>
                  <Link>Rompers & Sleepsuits</Link>
                </li>
                <li>
                  <Link>Clothing Sets</Link>
                </li>
                <li>
                  <Link>Tshirts & Tops</Link>
                </li>
                <li>
                  <Link>Dresses</Link>
                </li>

                <li>
                  <Link>Bottom wear</Link>
                </li>
                <li>
                  <Link> Winter Wear</Link>
                </li>
                <li>
                  <Link>Innerwear & Sleepwear</Link>
                </li>
                <li>
                  <Link>Infant Care</Link>
                </li>
              </ul>
              <hr />
              <ul>
                <p className="kids-p"> Home & Bath</p>
                <p className="kids-p">Personal Care</p>
              </ul>
            </div>

            <div className="menulist">
              <ul>
                <p className="kids-p"> Kids Accessories</p>
                <li>
                  <Link>Bags & Backpacks</Link>
                </li>
                <li>
                  <Link>Watches</Link>
                </li>
                <li>
                  <Link>Jewellery & Hair accessory</Link>
                </li>
                <li>
                  <Link>Sunglasses</Link>
                </li>
                <li>
                  <Link>Masks & Protective Gears</Link>
                </li>
                <li>
                  <Link>Caps & Hats</Link>
                </li>
              </ul>
              <hr />
              <ul>
                <p className="kids-p"> Brands</p>
                <li>
                  <Link>H&M</Link>
                </li>
                <li>
                  <Link>Max Kids</Link>
                </li>
                <li>
                  <Link>Pantaloons</Link>
                </li>
                <li>
                  <Link>United Colors Of Benetton Kids</Link>
                </li>
                <li>
                  <Link>YK</Link>
                </li>
                <li>
                  <Link>U.S. Polo Assn. Kids</Link>
                </li>
                <li>
                  <Link>Mothercare</Link>
                </li>
                <li>
                  <Link>HRX</Link>
                </li>
              </ul>
            </div>
          </div>
        </Box>
      </Flex>
      <Flex
        className="dropDown"
        height="100%"
        align={"center"}
        width="24%"
        justify={"center"}
      >
        <Link>Home & Living</Link>
        <Box
          top="4rem"
          className="child"
          left="-2rem"
          pos={"absolute"}
          width="1000px"
          transition={"all 0.3s"}
          height={"0vh"}
          overflow="hidden"
          bg="white"
        >
          <div className="menu">
            <div className="menulist">
              <ul>
                <p className="home-p">Bed Linen & Furnishing</p>
                <li>
                  <Link>Bed Runners</Link>
                </li>
                <li>
                  <Link>Mattress Protectors</Link>
                </li>
                <li>
                  <Link>Bedsheets</Link>
                </li>
                <li>
                  <Link>Bedding Sets</Link>
                </li>
                <li>
                  <Link>Blankets, Quilts & Dohars</Link>
                </li>
                <li>
                  <Link>Pillows & Pillow Covers</Link>
                </li>

                <li>
                  <Link>Bed Covers</Link>
                </li>
                <li>
                  <Link>Diwan Sets</Link>
                </li>
                <li>
                  <Link>Chair Pads & Covers</Link>
                </li>
                <li>
                  <Link>Sofa Covers</Link>
                </li>
              </ul>
              <hr />
              <ul>
                <p className="home-p">Flooring</p>
                <li>
                  <Link>Floor Runners</Link>
                </li>
                <li>
                  <Link>Carpets</Link>
                </li>
                <li>
                  <Link>Floor Mats & Dhurries</Link>
                </li>
                <li>
                  <Link>Door Mats</Link>
                </li>
              </ul>
              <hr />
            </div>

            <div className="menulist">
              <ul>
                <p className="home-p">Bath</p>

                <li>
                  <Link>Bath Towels</Link>
                </li>
                <li>
                  <Link>Hand & Face Towels</Link>
                </li>
                <li>
                  <Link>Beach Towels</Link>
                </li>
                <li>
                  <Link>Towels Set</Link>
                </li>
                <li>
                  <Link>Bath Rugs</Link>
                </li>
                <li>
                  <Link>Bath Robes</Link>
                </li>
                <li>
                  <Link>Bathroom Accessories</Link>
                </li>
                <li>
                  <Link>Shower Curtains</Link>
                </li>
              </ul>
              <hr />
              <ul>
                <p className="home-p">Lamps & Lighting</p>
                <li>
                  <Link>Floor Lamps</Link>
                </li>
                <li>
                  <Link>Ceiling Lamps</Link>
                </li>
                <li>
                  <Link>Table Lamps</Link>
                </li>
                <li>
                  <Link>Wall Lamps</Link>
                </li>
                <li>
                  <Link>Outdoor Lamps</Link>
                </li>
                <li>
                  <Link>String Lights</Link>
                </li>
              </ul>
            </div>

            <div className="menulist">
              <ul>
                <p className="home-p">Home Décor</p>
                <li>
                  <Link>Plants & Planters</Link>
                </li>
                <li>
                  <Link>Aromas & Candles</Link>
                </li>
                <li>
                  <Link>Clocks</Link>
                </li>
                <li>
                  <Link>Mirrors</Link>
                </li>
                <li>
                  <Link>Wall Décor</Link>
                </li>
                <li>
                  <Link>Festive Decor</Link>
                </li>
                <li>
                  <Link>Pooja Essentials</Link>
                </li>
                <li>
                  <Link>Wall Shelves</Link>
                </li>
                <li>
                  <Link>Fountains</Link>
                </li>
                <li>
                  <Link>Showpieces & Vases</Link>
                </li>
                <li>
                  <Link>Ottoman</Link>
                </li>
              </ul>
              <hr />
              <ul>
                <p className="home-p"> Cushions & Cushion Covers</p>
                <p className="home-p"> Curtains</p>
              </ul>
            </div>

            <div className="menulist">
              <ul>
                <p className="home-p">Home Gift Sets</p>
                <p className="home-p">Kitchen & Table</p>

                <li>
                  <Link>Table Runners</Link>
                </li>
                <li>
                  <Link>Dinnerware & Serveware</Link>
                </li>
                <li>
                  <Link>Cups and Mugs</Link>
                </li>
                <li>
                  <Link>Bakeware & Cookware</Link>
                </li>
                <li>
                  <Link>Kitchen Storage & Tools</Link>
                </li>

                <li>
                  <Link>Bar & Drinkware</Link>
                </li>
                <li>
                  <Link> Table Covers & Furnishings</Link>
                </li>
              </ul>
              <hr />
              <ul>
                <p className="home-p">Storage</p>

                <li>
                  <Link>Bins</Link>
                </li>
                <li>
                  <Link>Hangers</Link>
                </li>
                <li>
                  <Link>Organisers</Link>
                </li>
                <li>
                  <Link>Hooks & Holders</Link>
                </li>
                <li>
                  <Link>Laundry Bags</Link>
                </li>
              </ul>
            </div>

            <div className="menulist">
              <ul>
                <p className="home-p"> Brands</p>
                <li>
                  <Link>H&M</Link>
                </li>
                <li>
                  <Link>Marks & Spencer</Link>
                </li>
                <li>
                  <Link>Home Centre</Link>
                </li>
                <li>
                  <Link>Spaces</Link>
                </li>

                <li>
                  <Link>D'Decor</Link>
                </li>
                <li>
                  <Link>Story@Home</Link>
                </li>
                <li>
                  <Link> Pure Home & Living</Link>
                </li>

                <li>
                  <Link>Swayam</Link>
                </li>
                <li>
                  <Link>Raymond Home</Link>
                </li>
                <li>
                  <Link>Maspar</Link>
                </li>
                <li>
                  <Link>Trident</Link>
                </li>
                <li>
                  <Link>Cortina</Link>
                </li>
                <li>
                  <Link>Random</Link>
                </li>
                <li>
                  <Link>Ellementry</Link>
                </li>
                <li>
                  <Link>ROMEE</Link>
                </li>
                <li>
                  <Link>SEJ by Nisha Gupta</Link>
                </li>
              </ul>
            </div>
          </div>
        </Box>
      </Flex>
      <Flex
        className="dropDown"
        height="100%"
        align={"center"}
        width="15%"
        justify={"center"}
      >
        <Link>Beauty</Link>
        <Box
          top="4rem"
          className="child"
          left="-2rem"
          pos={"absolute"}
          width="1000px"
          transition={"all 0.3s"}
          height={"0vh"}
          overflow="hidden"
          bg="white"
        >
          <div className="menu">
            <div className="menulist">
              <ul>
                <p className="beauty-p">Makeup</p>
                <li>
                  <Link>Lipstick</Link>
                </li>
                <li>
                  <Link>Lip Gloss</Link>
                </li>
                <li>
                  <Link>Lip Liner</Link>
                </li>
                <li>
                  <Link>Mascara</Link>
                </li>
                <li>
                  <Link>Eyeliner</Link>
                </li>
                <li>
                  <Link>Kajal</Link>
                </li>
                <li>
                  <Link>Eyeshadow</Link>
                </li>
                <li>
                  <Link>Foundation</Link>
                </li>
                <li>
                  <Link>Primer</Link>
                </li>
                <li>
                  <Link>Concealer</Link>
                </li>
                <li>
                  <Link>Compact</Link>
                </li>
                <li>
                  <Link>Nail Polish</Link>
                </li>
              </ul>
            </div>

            <div className="menulist">
              <ul>
                <p className="beauty-p"> Skincare, Bath & Body</p>

                <li>
                  <Link>Face Moisturiser</Link>
                </li>
                <li>
                  <Link>Cleanser</Link>
                </li>
                <li>
                  <Link>Masks & Peel</Link>
                </li>
                <li>
                  <Link>Sunscreen</Link>
                </li>
                <li>
                  <Link>Serum</Link>
                </li>
                <li>
                  <Link>Face Wash</Link>
                </li>
                <li>
                  <Link>Eye Cream</Link>
                </li>
                <li>
                  <Link>Lip Balm</Link>
                </li>
                <li>
                  <Link>Body Lotion</Link>
                </li>
                <li>
                  <Link>Body Wash</Link>
                </li>
                <li>
                  <Link>Body Scrub</Link>
                </li>
                <li>
                  <Link>Hand Cream</Link>
                </li>
              </ul>
              <hr />
              <ul>
                <p className="beauty-p">Baby Care</p>

                <p className="beauty-p">Masks</p>
              </ul>
            </div>

            <div className="menulist">
              <ul>
                <p className="beauty-p">Haircare</p>
                <li>
                  <Link>Shampoo</Link>
                </li>
                <li>
                  <Link>Conditioner</Link>
                </li>
                <li>
                  <Link>Hair Cream</Link>
                </li>
                <li>
                  <Link>Hair Oil</Link>
                </li>
                <li>
                  <Link>Hair Gel</Link>
                </li>
                <li>
                  <Link>Hair Color</Link>
                </li>
                <li>
                  <Link>Hair Serum</Link>
                </li>
                <li>
                  <Link>Hair Accessory</Link>
                </li>
              </ul>
              <hr />
              <ul>
                <p className="beauty-p">Fragrances</p>
                <li>
                  <Link>Perfume</Link>
                </li>
                <li>
                  <Link>Deodorant</Link>
                </li>
                <li>
                  <Link>Body Mist</Link>
                </li>
              </ul>
            </div>

            <div className="menulist">
              <ul>
                <p className="beauty-p">Appliances</p>

                <li>
                  <Link>Hair Straightener</Link>
                </li>
                <li>
                  <Link>Hair Dryer</Link>
                </li>
                <li>
                  <Link>Epilator</Link>
                </li>
              </ul>
              <hr />
              <ul>
                <p className="beauty-p">Men's Grooming</p>

                <li>
                  <Link>Trimmers</Link>
                </li>
                <li>
                  <Link>Beard Oil</Link>
                </li>
                <li>
                  <Link>Hair Wax</Link>
                </li>
              </ul>
              <hr />
              <ul>
                <p className="beauty-p">Beauty Gift & Makeup Set</p>

                <li>
                  <Link>Beauty Gift</Link>
                </li>
                <li>
                  <Link>Makeup Kit</Link>
                </li>
              </ul>
              <hr />
              <ul>
                <p className="beauty-p">Premium Beauty</p>
                <p className="beauty-p">Wellness & Hygiene</p>
              </ul>
            </div>

            <div className="menulist">
              <ul>
                <p className="beauty-p">Top Brands</p>
                <li>
                  <Link>Lakme</Link>
                </li>
                <li>
                  <Link>Maybelline</Link>
                </li>
                <li>
                  <Link>LOreal</Link>
                </li>
                <li>
                  <Link>Philips</Link>
                </li>
                <li>
                  <Link>Bath & Body Works</Link>
                </li>

                <li>
                  <Link>THE BODY SHOP</Link>
                </li>
                <li>
                  <Link>Biotique</Link>
                </li>
                <li>
                  <Link>Mamaearth</Link>
                </li>
                <li>
                  <Link>MCaffeine</Link>
                </li>
                <li>
                  <Link>Nivea</Link>
                </li>
                <li>
                  <Link>Lotus Herbals</Link>
                </li>
                <li>
                  <Link>LOreal Professionnel</Link>
                </li>
                <li>
                  <Link>KAMA AYURVEDA</Link>
                </li>
                <li>
                  <Link>M.A.C</Link>
                </li>
                <li>
                  <Link>Forest Essentials</Link>
                </li>
              </ul>
            </div>
          </div>
        </Box>
      </Flex>
    </Flex>
  );
};

export default MegaMenu;
