import {StrictMode} from 'react';
import {createRoot, Root} from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import App from './App';
import NotFound from './NotFound';
import './index.css';

const root: Root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App/>}/>
              <Route path="*" element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
);
