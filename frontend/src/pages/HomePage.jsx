import React, { useEffect } from "react";
import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useProductStore } from "../store/product";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("loaded");
  return (
    <Container maxW="container.xl" py={12}>
      <VStack>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.200, blue.500)"}
          _hover={{
            bgGradient: "linear(to-r, red.500, yellow.500)",
          }}
          bgClip={"text"}
        >
          Current Products 📦
        </Text>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
          mt={10}
          w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
        
        {products.length === 0 && (
          <Text
            fontSize="xl"
            textAlign={"center"}
            fontWeight="bold"
            color="gray.500"
          >
            No products found 😢{" "}
            <Link to={"/create"}>
              <Text
                as="span"
                color="blue.500"
                _hover={{ textDecoration: "underline" }}
              >
                Create a product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
    // <> </>
  );
};

export default HomePage;
