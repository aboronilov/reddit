import { Button, Flex } from "@chakra-ui/react";
import React from "react";

function AuthButtons() {
  return (
    <Flex>
      <Button
        variant="outline"
        height="28px"
        display={{ base: "none", md: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        // onClick={() => {}}
      >
        Log In
      </Button>
      <Button
        height="28px"
        display={{ base: "none", md: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        // onClick={() => {}}
      >
        Sign Up
      </Button>
    </Flex>
  );
}

export default AuthButtons;
