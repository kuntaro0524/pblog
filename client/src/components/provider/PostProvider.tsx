import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { PostInfo } from "../types/postinfo";

// 保持する変数と設定関数
export type AllPostType = {
  // ポスト情報を保持する配列
  postArray: PostInfo[];
  // useState などの更新関数の型は以下のようになるらしい→おぼえげー
  setPostArray: Dispatch<SetStateAction<Array<PostInfo>>>;
};

// Type scriptの表現方法として {} を as で受けて型を指定する
export const AllPostContext = createContext<AllPostType>({} as AllPostType);

export const AllPostProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const today = new Date();
  // 再レンダリングする規模によっては変数と関数は別にしたほうが良い場合もある
  const [postArray, setPostArray] = useState<Array<PostInfo>>([]);
  return (
    <AllPostContext.Provider value={{ postArray, setPostArray }}>
      {children}
    </AllPostContext.Provider>
  );
};
