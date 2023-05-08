import { useEffect, useState } from 'react';
import useHttp from '../../hooks/use-http';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import { getAllComments } from '../../lib/api';
import { useParams } from 'react-router';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from './CommentsList';

const Comments = () => {
  const {
    sendRequest,
    data: loadedComments,
    status,
    error,
  } = useHttp(getAllComments);
  const [isAddingComment, setIsAddingComment] = useState(false);

  const params = useParams();
  const quoteId = params.quoteId;

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const stopAddCommmentHandler = () => {
    setIsAddingComment(false);
  };

  useEffect(() => {
    if (!isAddingComment) {
      sendRequest(quoteId);
    }
  }, [sendRequest, quoteId, isAddingComment]);

  let comments = <p>Comments...</p>;
  if (status === 'pending') {
    // show loading spinner
    comments = (
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  } else if (status === 'completed') {
    if (!error) {
      comments = <CommentsList comments={loadedComments}></CommentsList>;
    } else {
      comments = <p>Could not load comments</p>;
    }
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm onFinish={stopAddCommmentHandler} quoteId={quoteId} />
      )}
      {comments}
    </section>
  );
};

export default Comments;
