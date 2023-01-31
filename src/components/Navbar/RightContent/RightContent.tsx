import AuthModal from "@/components/Modal/Auth/AuthModal";
import { auth } from "@/firebase/clientApp";
import { Button, Flex } from "@chakra-ui/react";
import { signOut, User } from "firebase/auth";
import React from "react";
import AuthButtons from "./AuthButtons";
import Icons from "./Icons";
import UserMenu from "./UserMenu";

type Props = {
  user?: User | null;
};

function RightContent({user}: Props) {
  return (
    <>
      <AuthModal />
      <Flex alignItems="center">
        {user ? <Icons /> :<AuthButtons />}
        <UserMenu user={user} />
      </Flex>
    </>
  );
}

export default RightContent;
