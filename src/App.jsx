
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from 'components/GlobalStyle';

import Spinner from 'components/Shared/Spinner';

const SharedLayout = lazy(() => import('./pages/SharedLayout/SharedLayout'));
const Home = lazy(() => import('./pages/Home/Home'));
const Tweets = lazy(() => import('./pages/Tweets/Tweets'));

function App() {
  return (
    <>
      <GlobalStyle/>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/tweets" element={<Tweets />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
