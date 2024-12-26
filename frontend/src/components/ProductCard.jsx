import {
  Box,
  Image,
  Heading,
  Text,
  IconButton,
  HStack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.800", "gray.200");
  const bg = useColorModeValue("white", "gray.800");
  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />

      <Box p={4}>
        <HStack alignItems={"center"} justifyContent={"space-between"}>
          <Heading as="h3" fontSize="22px" size="lg" mb={2}>
            {product.name}
          </Heading>

          <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
            ${product.price}
          </Text>
        </HStack>

        <HStack spacing={2}>
          <IconButton icon={<EditIcon />} colorScheme="blue" />
          <IconButton icon={<DeleteIcon />} colorScheme="red" />
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
