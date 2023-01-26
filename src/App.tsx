import {BrowserRouter , Routes , Route} from 'react-router-dom';
import { FrontPage } from '@/pages/FrontPage';
function App() {

  return (
    <BrowserRouter basename="/">
        <Routes>
            <Route path="/" element={<FrontPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
