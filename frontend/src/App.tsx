// import pages
import { useEffect } from 'react';
import Home from './pages/Home';

import { nameSystem } from './config/config.json';

function App() {

  useEffect(() => {
    document.title = nameSystem;
  }, []);

  return (
    <>
      <Home />
    </>
  )
}

export default App
