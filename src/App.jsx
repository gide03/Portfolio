import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './pages/Home';
import './App.css'

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        {/* Gllobal style applied here */}
        {/* <GlobalStyles/>*/}

        <div>
          <h1>[Your Name]</h1>
          <h3>[Title]</h3>
        </div>

        <MainContent>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  )
}

export default App
