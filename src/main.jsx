import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Home
import Home from './Pages/Home/Home.jsx';
import './Pages/Home/Home.css';

//Form
// import Form from './Components/Form/Form.jsx';
// import './Components/Form/Form.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);

