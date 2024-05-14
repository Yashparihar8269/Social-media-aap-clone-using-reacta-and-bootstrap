import Post from "./Post"
import { useContext } from "react"
import {PostList  as PostListStore} from  '../store/Posts-list-store'


function PostList() {

  const {postList} = useContext(PostListStore)

  return (

    <>
    {postList.map((post) => <Post key={post.id} post={post}/>)}
    </>
  )
}

export default PostList