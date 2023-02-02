import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { TabItemType } from "./NewPostForm";

type Props = {
  item: TabItemType;
  selected: boolean;
  setSelectedTab: (value: string) => void;
};

const TabItem = ({ item, selected, setSelectedTab }: Props) => {
  return (
    <Flex
      align="center"
      justify="center"
      flexGrow={1}
      p="14px 0px"
      cursor="pointer"
      fontWeight={700}
      _hover={{
        bg: "gray.50",
        transitionDuration: "0.2s",
        transitionTimingFunction: "ease-out",
      }}
      color={selected ? "blue.500": "gray.500"}
      borderWidth={selected ? "0px 1px 2px 0px" : "0px 1px 1px 0px"}
      borderBottomColor={selected ? "blue.500" : "gray.200"}
      borderRightColor="gray.200"
      onClick={() => setSelectedTab(item.title)}
    >
      <Flex align="center" height="20px" mr={2}>
        <Icon as={item.icon} />
      </Flex>
      <Text fontSize="10pt">{item.title}</Text>
    </Flex>
  );
};

export default TabItem;
