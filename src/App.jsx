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
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  img {
    height: 300px;
  }

  span{
    magin-top: -1rem;
    font-weight: 500;
    font-size: large;
  }

  .prf-name{
    font-weight: 700;
    font-size: 2.7rem;
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  .prf-title{
    color: rgb(147 197 253 / var(--tw-text-opacity, 1));
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    line-height: 1rem;
  }
`

const MainContent = styled.main`
  position: relative;
  flex: 1;

  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));
  border-radius: 0.5rem;
  padding: 2rem 1rem 2rem 1rem;
`;

function App() {
  return (
    <Router basename={BASE_NAME}>
      <AppContainer>
        {/* Gllobal style applied here */}
        {/* <GlobalStyles/>*/}

        <ProfileContainer>
          {/* <img src={`./Author.webp`} alt="author" /> */}
          <span className='prf-name'>Gidion Siwi Nugroho</span>
          <p className='prf-title'>Software Engineer</p>
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
