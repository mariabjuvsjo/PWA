import { Routes, Route } from 'react-router-dom';

//pages
import SignIn from './components/SignIn';
import Work from './components/Work';
import Raport from './components/Raport';
import Thanks from './components/Thanks'
function App() {
  return (

    <div className="container">
      <Routes>

        <Route
          path="/"
          element={<SignIn />}
        />
        <Route
          path="/work"
          element={<Work />}
        />
        <Route
          path="/raport"
          element={<Raport />}
        />
        <Route
          path="/thanks"
          element={<Thanks />}
        />



      </Routes>
    </div>
  );
}

export default App;
