import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './pages/Home';
import './App.css'

const BASE_NAME = '/Portfolio';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ProfileContainer = styled.div`
  img {
    height: 300px;
  }

  span{
    magin-top: -1rem;
    font-weight: 500;
    font-size: large;
  }

  margin-bottom: 3rem;
`

const MainContent = styled.main`
  position: relative;
  flex: 1;
`;

function App() {
  return (
    <Router basename={BASE_NAME}>
      <AppContainer>
        {/* Gllobal style applied here */}
        {/* <GlobalStyles/>*/}

        <ProfileContainer>
          <img src={`./Author.webp`} alt="author" />
          <h1>Gidion Siwi Nugroho</h1>
          <span>Embedded System Specialist</span>
        </ProfileContainer>

        <MainContent>
          <Routes>
            <Route path="/" element={<HomePage base={BASE_NAME}/>}/>
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  )
}

export default App
