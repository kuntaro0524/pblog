import { Heading } from "@chakra-ui/react";
import { ThreadCard } from "../organism/ThreadCard";

export const InitLayout = () => {
  const post_contents = [
    {
      thread_id: "thread01",
      thread_title: "資源回収の件",
      thread_master: "平田邦生",
      posts: [
        {
          date: "2022-04-19 20:20:19",
          comment: "資源回収っていつやるんですか？",
          postby: "平田邦生",
        },
        {
          date: "2022-04-19 20:25:19",
          comment: "先程の件、解決しました",
          postby: "平田邦生",
        },
        {
          date: "2022-04-21 19:25:19",
          comment: "そろそろ資料を準備しないといけませんね。",
          postby: "かしの会長",
        },
      ],
    },
    {
      thread_id: "thread02",
      thread_title: "運動会の件",
      thread_master: "花田未来",
      posts: [
        {
          date: "2022-04-19 20:20:19",
          comment: "運動会の打ち合わせっていつやるんですか？",
          postby: "平田邦生",
        },
        {
          date: "2022-04-19 20:25:19",
          comment: "PTA競技の件、解決しました",
          postby: "平田邦生",
        },
        {
          date: "2022-04-21 19:25:19",
          comment: "そろそろ旗を準備しないといけませんね。",
          postby: "かしの会長",
        },
      ],
    },
  ];

  return (
    <>
      <Heading colorScheme={"teal"} as="h1" size="4xl" isTruncated>
        This is a layout page.
      </Heading>
      {post_contents.map((athread, index) => (
        <ThreadCard threadInfo={athread} />
      ))}
    </>
  );
};
