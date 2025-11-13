import {StrictMode} from 'react';
import {createRoot, Root} from 'react-dom/client';
import {Route, Routes} from 'react-router';

import App from './App';
import AppRouter from './AppRouter';
import NotFound from './NotFound';
import './index.css';

const root: Root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
      <header>LBRY Web</header>
      <AppRouter>
          <Routes>
              <Route index path="/" element={<App/>}/>
              <Route index path="/about" element={<App/>}/>
              <Route path="*" element={<NotFound/>}/>
          </Routes>
      </AppRouter>
  </StrictMode>
);
