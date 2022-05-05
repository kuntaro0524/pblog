import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { PostInfo, ThreadInfo, User } from "../types/postinfo";

// 保持する変数と設定関数
export type AllThreadType = {
  // スレッド情報を保持する配列
  threadArray: ThreadInfo[];
  // useState などの更新関数の型は以下のようになるらしい→おぼえげー
  setThreadArray: Dispatch<SetStateAction<Array<ThreadInfo>>>;
};

// Type scriptの表現方法として {} を as で受けて型を指定する
export const AllThreadContext = createContext<AllThreadType>(
  {} as AllThreadType
);

export const AllThreadProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const today = new Date();
  // とりあえずの情報としてベタが帰する
  const user1: User = {
    _id: "kuntaro",
    name: "Kunio Hirata",
    jobs: "Senior Technical Scientist",
  };
  const user2: User = {
    _id: "ibukin",
    name: "Ibuki Hirata",
    jobs: "Junior Highschool Student",
  };
  const post1 = {
    _id: "asdfasdfasdfasdfasdf",
    date: today,
    message: "くにおからメッセージ１",
    creater: user1,
  };
  const post2 = {
    _id: "asdfasdfasdfasdfasdf",
    date: today,
    message: "くにおからメッセージ2",
    creater: user1,
  };
  const post3 = {
    _id: "lkjhasdfasdf",
    date: today,
    message: "くにおからメッセージ3",
    creater: user1,
  };
  const post4 = {
    _id: "lkjhasdfasdf",
    date: today,
    message: "いぶきからメッセージ1",
    creater: user2,
  };
  const post5 = {
    _id: "lkjhasdfasdf",
    date: today,
    message: "いぶきからメッセージ2",
    creater: user2,
  };
  const post6 = {
    _id: "asdfasdfasdfasdfasdf",
    date: today,
    message: "いぶきからメッセージ3",
    creater: user2,
  };

  const thread1 = {
    thread_id: "thread1",
    thread_title: "スレッドの１個めだよ",
    creater: user1,
    posts: [post1, post4, post6],
  };

  const thread2 = {
    thread_id: "thread2",
    thread_title: "スレッドの2個めだよ",
    creater: user2,
    posts: [post2, post3, post5],
  };

  // 再レンダリングする規模によっては変数と関数は別にしたほうが良い場合もある
  const [threadArray, setThreadArray] = useState<Array<ThreadInfo>>([
    thread1,
    thread2,
  ]);

  console.log(threadArray);

  return (
    <AllThreadContext.Provider value={{ threadArray, setThreadArray }}>
      {children}
    </AllThreadContext.Provider>
  );
};
