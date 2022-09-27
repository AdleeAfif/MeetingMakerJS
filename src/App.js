import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favourites from './pages/Favourites';
import Layout from './layout/Layout';

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetups />} />
          <Route path="/new-meetup" element={<NewMeetup />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </Layout>
  );
}

export default App;

//Routes is used to make sure the app doesn't look at other route when load the pointed route.
