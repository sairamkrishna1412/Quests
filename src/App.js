import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import AllQuotes from './pages/AllQuotes';
// import NewQuote from './pages/NewQuote';
// import QuoteDetail from './pages/QuoteDetail';
// import PageNotFound from './pages/PageNotFound';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));
const PageNotFound = React.lazy(() => import('./pages/PageNotFound'));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner></LoadingSpinner>
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes"></Redirect>
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes></AllQuotes>
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail></QuoteDetail>
          </Route>
          <Route path="/NewQuote">
            <NewQuote></NewQuote>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
