import AuthModal from "@/components/Modal/Auth/AuthModal";
import { auth } from "@/firebase/clientApp";
import { Button, Flex } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React from "react";
import AuthButtons from "./AuthButtons";

type Props = {
  user: any
};

function RightContent({user}: Props) {
  return (
    <>
      <AuthModal />
      <Flex>
        {user ? <Button onClick={() => signOut(auth)}>Logout</Button> :<AuthButtons />}
      </Flex>
    </>
  );
}

export default RightContent;
