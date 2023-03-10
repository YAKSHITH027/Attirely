import React from "react";
import { SellerData } from "../../Utils/SellerData";
import { Box, Image, Text } from "@chakra-ui/react";
import SellersMapbox from "./SellersMapbox";

const Sellers = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
      {SellerData.map((item) => (
        <SellersMapbox props={item} />
      ))}
    </div>
  );
};

export default Sellers;
