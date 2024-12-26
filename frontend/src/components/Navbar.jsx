import React from "react";
import {
  Container,
  Flex,
  Text,
  HStack,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { LuMoon, LuSun } from "react-icons/lu";
// import { useColorMode } from "@/components/ui/color-mode";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1760px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize={{ base: "30px", sm: "28px" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.200, blue.500)"}
          _hover={{
            bgGradient: "linear(to-r, red.500, yellow.500)",
          }}
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>

        <HStack spacing={3} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? (
              <LuMoon fontSize={18} />
            ) : (
              <LuSun fontSize={20} />
            )}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
