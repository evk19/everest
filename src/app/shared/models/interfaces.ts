export interface Post {
    id?: string;
    title: string;
    text: string;
    author?: string;
    date: Date;
    attention?: any;
    solved?: boolean;
    sherpas?: boolean;
    postId?:number;
    favourite?: boolean;
    approved?: boolean;
  }
  export interface FbCreateResponse{
    name: string
  }
  export interface CommentSh {
    id?: string,
    text?: string,
    postId?:string
  }