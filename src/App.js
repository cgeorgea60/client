import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { RestaurantsContextProvider } from './context/RestaurantsContext';
import Home from './routes/Home';
import RestaurantdetailPage from './routes/RestaurantdetailPage';
import UpdatePage from './routes/UpdatePage';


function App() {
  return (
    <RestaurantsContextProvider>
        <div className="text-center w-[80%] mx-auto">
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/restaurants/:id/update" element={<UpdatePage />} />
        <Route exact path="/restaurants/:id" element={<RestaurantdetailPage />} />
        </Routes>
     </Router>
    </div>
      </RestaurantsContextProvider>
  );
}

export default App;
