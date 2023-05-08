import { useRef, Fragment } from 'react';

import classes from './NewCommentForm.module.css';

import { addComment } from '../../lib/api';
import useHttp from '../../hooks/use-http';
import LoadingSpinner from '../UI/LoadingSpinner';

const NewCommentForm = (props) => {
  const { sendRequest, status, error } = useHttp(addComment);
  const commentTextRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
    const requestData = {
      quoteId: props.quoteId,
      commentData: { text: commentTextRef.current.value },
    };
    commentTextRef.current.value = '';
    sendRequest(requestData);
  };
  if (status === 'completed' && !error) {
    props.onFinish();
  }

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className="centered">
          <LoadingSpinner></LoadingSpinner>
        </div>
      )}
      {status !== 'pending' && (
        <Fragment>
          <div className={classes.control} onSubmit={submitFormHandler}>
            <label htmlFor="comment">Your Comment</label>
            <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className="btn">Add Comment</button>
          </div>
        </Fragment>
      )}
    </form>
  );
};

export default NewCommentForm;
