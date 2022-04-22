import { Button, Flex, Grid, GridItem, VStack } from "@chakra-ui/react";

type post_definition = {
  date: string;
  comment: string;
  postby: string;
};

export const Post = (props: post_definition) => {
  let { date, comment, postby } = props;
  console.log(date);
  console.log(comment);

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
            <p> {date} </p>
          </GridItem>
          <GridItem w="600px" h="50" bg={"lightgreen"} borderRadius={"20px"}>
            <p> {comment} </p>
          </GridItem>
          <GridItem w="200px" h="50" bg={"lightgreen"}>
            <p> 投稿者:{postby}</p>
          </GridItem>
          <Button>編集する</Button>
          <Button>返信する</Button>
        </Flex>
      </Grid>
    </>
  );
};
