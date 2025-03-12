import { Navbar } from "../components/Navbar";

const HomePage = () => {
    return <>
      <div>
        {/* Navigation */}
        <Navbar className='navigation'>
          <div className="nav-item">about</div>
          <div className="nav-item">experience</div>
          <div className="nav-item">skills</div>
          <div className="nav-item">portfolio</div>
          <div className="nav-item">contact</div>
        </Navbar>
        
        {/* Presentation */}
        <div>Presentation</div>
      </div>
    </>
}

export default HomePage;