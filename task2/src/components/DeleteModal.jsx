import React from 'react'
import { COMMENT_ID } from '../constants';

function DeleteModal({
    updateModal = () => {},
    currCommentID="",
    currPostID = "",
    deleteComment = () => {}
}) {

    const handleDelete = () => {
        deleteComment(currPostID, currCommentID.parentCommentId, currCommentID[COMMENT_ID]);
        updateModal()
    }

  return (
    <div className='deleteModal'>
        <h3>Delete comment</h3>
        <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
        <div className='deleteModal-buttonsDiv'>
            <button 
                onClick={updateModal}
                className="deleteModal-buttonsDiv-cancel"
            >
                NO, CANCEL
            </button>
            <button
                onClick={handleDelete}
                className='deleteModal-buttonsDiv-delete'
            >
                YES, DELETE
            </button>
        </div>
    </div>
  )
}

export default DeleteModal