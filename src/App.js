import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { AppProvider } from './contexts/context';
import NavBar from './components/NavBar';
import Preloader from './components/Preloader';
import React from 'react';


function App() {
  const[loading, setLoading] = useState(true);
  const[content, setContent] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setContent(true);
    }, 1000)
  }, []) 

  return (
      <Container>
        <div className="fw-bolder display-5 py-4">Spacious</div>
        <AppProvider>
          {loading && <Preloader/>}
          {content && <NavBar/>}
        </AppProvider>    
      </Container>
  );
}

export default App;
