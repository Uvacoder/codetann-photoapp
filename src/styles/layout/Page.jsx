import React from "react";
import { VStack } from "@chakra-ui/react";

export default function Page({ children }) {
  return (
    <VStack
      maxW="100vw"
      w="100%"
      minH="100vh"
      p="2rem"
      align="center"
      justify="flex-start"
    >
      {children}
    </VStack>
  );
}
