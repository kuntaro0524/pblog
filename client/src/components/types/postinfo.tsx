// ポストするユーザの定義
export type User = {
  _id: string;
  name: string;
  jobs: string;
};

// それぞれのメッセージの定義
export type PostInfo = {
  _id: string;
  date: Date;
  message: string;
  creater: User;
};

// それぞれのスレッドの定義
export type ThreadInfo = {
  thread_id: string;
  thread_title: string;
  creater: User;
  posts: PostInfo[];
};
