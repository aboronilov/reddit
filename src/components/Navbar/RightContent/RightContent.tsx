import AuthModal from "@/components/Modal/Auth/AuthModal";
import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthButtons from "./AuthButtons";

type Props = {
  // user: any
};

function RightContent({}: Props) {
  return (
    <>
      <AuthModal />
      <Flex>
        <AuthButtons />
      </Flex>
    </>
  );
}

export default RightContent;
