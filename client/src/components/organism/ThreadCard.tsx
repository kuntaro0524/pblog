import { Box, FormControl, Heading } from "@chakra-ui/react";
import { log } from "console";
import { MouseEventHandler } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { ThreadInfo } from "../types/postinfo";

type post_definition = {
  date: string;
  comment: string;
  postby: string;
};

type Props = {
  threadInfo: ThreadInfo;
};

export const ThreadCard = (props: Props) => {
  const { threadInfo } = props;

  console.log("TITLETITLE");
  console.log(threadInfo.thread_title);
  console.log("TITLETITLE");

  const navigate = useNavigate();

  const onClickBox = (e: React.MouseEvent<HTMLInputElement>) => {
    console.log(threadInfo.thread_id);
    navigate("/detail", { state: { post_id: threadInfo.thread_id } });
  };

  return (
    <>
      <FormControl>
        <Box
          id={threadInfo.thread_id}
          w={500}
          h={150}
          background={"lightblue"}
          borderRadius={20}
          onClick={onClickBox}
          m={5}
        >
          <Heading borderRadius={25} background={"lightblue"}>
            {threadInfo.thread_title}
          </Heading>
          <Box textShadow={"0 0 20px blue"}>
            ポスト数 {threadInfo.posts.length}
          </Box>
          <Box textShadow={"0 0 20px red"}> 添付ファイル 2個 </Box>
        </Box>
      </FormControl>
    </>
  );
};
