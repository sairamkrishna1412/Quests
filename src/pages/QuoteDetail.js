import { Fragment, useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import PageNotFound from './PageNotFound';
import Comments from '../components/comments/Comments';
import LoadingSpinner from '../components/UI/LoadingSpinner';

import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

// const DUMMY_QUOTES = [
//   { id: 'q1', author: 'Sai', text: 'A quote is a quote' },
//   { id: 'q2', author: 'Shiva', text: 'A mot is a mot' },
// ];

const QuoteDetail = (props) => {
  const { sendRequest, data: quote, status } = useHttp(getSingleQuote, true);
  const match = useRouteMatch();
  const params = useParams();
  const { quoteId } = params;
  // const quote = DUMMY_QUOTES.find((el) => el.id === params.quoteId);
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (!quote && status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>;
      </div>
    );
  }
  if (!quote) {
    return <PageNotFound></PageNotFound>;
  }
  return (
    <Fragment>
      <HighlightedQuote
        text={quote.text}
        author={quote.author}
      ></HighlightedQuote>
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
