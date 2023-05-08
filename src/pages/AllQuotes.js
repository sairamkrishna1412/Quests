import LoadingSpinner from '../components/UI/LoadingSpinner';
import QuoteList from '../components/quotes/QuoteList';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';
import { useEffect } from 'react';

// const DUMMY_QUOTES = [
//   { id: 'q1', author: 'Sai', text: 'A quote is a quote' },
//   { id: 'q2', author: 'Shiva', text: 'A mot is a mot' },
// ];

const AllQuotes = (props) => {
  const { sendRequest, data, status } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>;
      </div>
    );
  }

  return <QuoteList quotes={data || []}></QuoteList>;
};

export default AllQuotes;
