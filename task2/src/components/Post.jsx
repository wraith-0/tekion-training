import React, {useState, useEffect} from 'react'
import CommentSection from './CommentSection';
import { POST, POST_COMMENTS, POST_IMAGE_URL, POST_ID } from '../constants';
import { AddCommentContainer } from '../containers/AddCommentContainer';

function Post({posts = [], currPostID = ""}) {
        
  const [currPost, setCurrPost] = useState(POST);

  useEffect(() => {
    setCurrPost(posts.find((post) => post[POST_ID] === currPostID));
  }, [currPostID, posts])

  return (
    <div className="mainDiv">
      <img className="mainDiv_image" src={currPost?.[POST_IMAGE_URL]}></img>
      <AddCommentContainer type="comment" />
      <CommentSection comments={currPost?.[POST_COMMENTS]} />
    </div>
  )
}

export default Post