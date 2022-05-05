import { Button, Flex, Grid, GridItem, VStack } from "@chakra-ui/react";
import {
  MouseEventHandler,
  useState,
  MouseEvent,
  ChangeEventHandler,
  ChangeEvent,
} from "react";
import { User } from "../types/postinfo";
import { ModModal } from "./ModModal";

type post_definition = {
  date: Date;
  comment: string;
  creater: User;
};

export const Post = (props: post_definition) => {
  let { date, comment, creater } = props;

  const [sentense, setSentense] = useState(comment);

  const modSentense = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
  };

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSentense(e.target.value);
  };

  return (
    <>
      <Grid
        templateColumns="repeat(3,1fr)"
        gap={6}
        bgImage={"../discussion.jpg"}
        m={12}
      >
        <Flex borderRadius={"100px"}>
          <GridItem
            w="100px"
            h="50"
            bg={"blue"}
            borderRadius={"10px"}
            border="solid"
            borderColor={"green"}
            color={"white"}
          >
            <p> {date.toString()} </p>
          </GridItem>
          <GridItem w="600px" h="50" bg={"lightgreen"} borderRadius={"20px"}>
            <p> {comment} </p>
          </GridItem>
          <GridItem w="200px" h="50" bg={"lightgreen"}>
            <p> 投稿者:{creater.name}</p>
          </GridItem>
          <Button value={sentense} onClick={modSentense}>
            返信する
          </Button>
          <ModModal comment={sentense} onChangeText={onChangeText} />
        </Flex>
      </Grid>
    </>
  );
};
