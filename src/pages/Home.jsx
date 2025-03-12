import { Navbar } from "../components/Navbar";
import { useState } from "react";
import { SocialBt } from "../components/Button";
import { SocialCard, SkillCard, CatalogCard } from "../components/Card";
import { Tag } from "../components/Tag";
import { CardDeckScrollable } from "../components/Scrollbox";

const Nav = {
  ABOUT: "About",
  EXPERIENCE: "Experience",
  SKILL: "Skill",
  PORTFOLIO: "Portfolio",
  CONTACT: "Contact"
}

const HomePage = () => {
    const [activeNav, setNav] = useState(Nav.ABOUT);

    const NavClickHandler = (event) => {
      const text = event.target.textContent;
      setNav(text);
    }

    return <>
      <div>
        {/* Navigation */}
        <Navbar className='navigation'>
          <div className="nav-item" onClick={(e)=>NavClickHandler(e)}>{Nav.ABOUT}</div>
          <div className="nav-item" onClick={(e)=>NavClickHandler(e)}>{Nav.EXPERIENCE}</div>
          <div className="nav-item" onClick={(e)=>NavClickHandler(e)}>{Nav.SKILL}</div>
          <div className="nav-item" onClick={(e)=>NavClickHandler(e)}>{Nav.PORTFOLIO}</div>
          <div className="nav-item" onClick={(e)=>NavClickHandler(e)}>{Nav.CONTACT}</div>
        </Navbar>
        
        {/* Presentation */}
        {/* <div>Presentation: {activeNav}</div> */}

        {/* ABOUT */}
        {(activeNav === Nav.ABOUT) && <div>
          <p>Dedicated professional specializing in creating innovative platforms and applications that streamline operations in the utilities and industrial sectors. With 4+ years of experience and driven by a passion for innovation and reliability, I thrive on building software that bridges the gap between complex engineering challenges and user-friendly solutions.</p>
          <SocialCard>
            <SocialBt>
              <span className="social-icon">
                <svg width="33" height="33" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.8572 0C5.75361 0 0 5.73902 0 12.8175C0 18.4817 3.6836 23.2851 8.79113 24.978C9.43399 25.0987 9.66971 24.7024 9.66971 24.3617C9.66971 24.0573 9.65899 23.2509 9.65364 22.1828C6.07718 22.9561 5.32289 20.4631 5.32289 20.4631C4.73789 18.9837 3.89253 18.5885 3.89253 18.5885C2.72788 17.7938 3.98253 17.8099 3.98253 17.8099C5.27361 17.8996 5.95183 19.1301 5.95183 19.1301C7.09826 21.0901 8.96149 20.524 9.6965 20.196C9.81221 19.3672 10.1433 18.8021 10.5108 18.4817C7.65541 18.1613 4.65432 17.059 4.65432 12.1477C4.65432 10.7485 5.15254 9.60562 5.97754 8.7084C5.8329 8.38476 5.39897 7.08165 6.09004 5.31604C6.09004 5.31604 7.16683 4.97211 9.62578 6.62983C10.6544 6.34464 11.7472 6.20365 12.8401 6.19724C13.933 6.20365 15.0258 6.34464 16.0544 6.62983C18.4973 4.97211 19.5741 5.31604 19.5741 5.31604C20.2651 7.08165 19.8312 8.38476 19.7026 8.7084C20.5223 9.60562 21.0205 10.7485 21.0205 12.1477C21.0205 17.0718 18.0151 18.1559 15.1544 18.471C15.6044 18.8556 16.0223 19.6417 16.0223 20.8423C16.0223 22.5577 16.0062 23.9355 16.0062 24.3521C16.0062 24.6886 16.2312 25.0891 16.8901 24.9609C22.0341 23.2797 25.7145 18.4732 25.7145 12.8175C25.7145 5.73902 19.9576 0 12.8572 0Z" fill="white"></path>
                </svg>
              </span>
            </SocialBt>
            <SocialBt href="#tweeter">
              <span className="social-icon">
                <svg width="33" height="33" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.954 2.323C23.069 2.712 22.124 2.977 21.129 3.098C22.143 2.487 22.923 1.524 23.292 0.375C22.341 0.93 21.287 1.334 20.165 1.559C19.269 0.6 17.992 0 16.574 0C13.857 0 11.654 2.203 11.654 4.917C11.654 5.307 11.699 5.682 11.781 6.041C7.691 5.848 4.066 3.884 1.64 0.915C1.213 1.637 0.974 2.476 0.974 3.39C0.974 5.1 1.844 6.603 3.162 7.486C2.355 7.46 1.596 7.238 0.934 6.87V6.931C0.934 9.316 2.627 11.305 4.88 11.758C4.467 11.869 4.031 11.929 3.584 11.929C3.27 11.929 2.969 11.899 2.668 11.843C3.299 13.796 5.113 15.22 7.272 15.26C5.592 16.579 3.463 17.365 1.17 17.365C0.78 17.365 0.391 17.342 0 17.298C2.189 18.692 4.768 19.507 7.557 19.507C16.611 19.507 21.556 12.011 21.556 5.521C21.556 5.312 21.556 5.101 21.541 4.891C22.502 4.202 23.341 3.331 24.001 2.343L23.954 2.323Z" fill="#1DA1F2"></path>
                </svg>
              </span>
            </SocialBt>
            <SocialBt href="#linkedin">
              <span className="social-icon">
                <svg width="33" height="33" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.2991 21.3043H17.597V15.5032C17.597 14.1199 17.5689 12.3397 15.6678 12.3397C13.7376 12.3397 13.4428 13.8449 13.4428 15.4011V21.3043H9.74069V9.37506H13.297V11.0011H13.3449C13.8418 10.0636 15.0501 9.07402 16.8553 9.07402C20.6064 9.07402 21.3001 11.5428 21.3001 14.7564V21.3043H21.2991ZM5.55941 7.74276C4.36774 7.74276 3.41044 6.77817 3.41044 5.5917C3.41044 4.40628 4.36878 3.44273 5.55941 3.44273C6.74692 3.44273 7.70943 4.40628 7.70943 5.5917C7.70943 6.77817 6.74588 7.74276 5.55941 7.74276ZM7.41568 21.3043H3.70315V9.37506H7.41568V21.3043ZM23.1512 0H1.8448C0.825006 0 0 0.806255 0 1.80105V23.1991C0 24.195 0.825006 25.0002 1.8448 25.0002H23.1481C24.1668 25.0002 25.0002 24.195 25.0002 23.1991V1.80105C25.0002 0.806255 24.1668 0 23.1481 0H23.1512Z" fill="white"></path>
                </svg>
              </span>
            </SocialBt>
          </SocialCard>
        </div>}

        {/* Portfolio */}
        {(activeNav == Nav.PORTFOLIO) && <CardDeckScrollable>
            <CatalogCard bg='AutonomousRobotLocalization.webp'>
              <span className="title">Autonomous Robot Navigation System</span>
              <p className="subtitle">Built a ROS-based robot using STM32 microcontrollers and LiDAR for obstacle avoidance in dynamic environments.</p>
              {/* <p>Tech Stack: STM32, ROS2, Python, LiDAR, SLAM.</p> */}
            </CatalogCard>
            <CatalogCard bg='IoTSmatHomeAUtomationSystem.webp'>
              <span className="title">IoT Smart Home Automation System</span>
              <p className="subtitle">Designed a low-power IoT system to control lights, HVAC, and security via a custom PCB with ESP32 and BLE.</p>
              {/* <p>Tech Stack: ESP32, C++, FreeRTOS, MQTT, Raspberry Pi Gateway.</p> */}
            </CatalogCard>
            <CatalogCard bg='EnergyEfficientEdgeAIDevice.webp'>
              <span className="title">Energy-Efficient Edge AI Device</span>
              <p className="subtitle">Deployed TinyML on a Raspberry Pi Pico for facial recognition with TensorFlow Lite</p>
              {/* <p>Tech Stack: Raspberry Pi Pico, TensorFlow Lite, MicroPython, OpenCV.</p> */}
            </CatalogCard>
            <CatalogCard bg='BluetoothControlledLEDMatrix.webp'>
              <span className="title">Bluetooth-Controlled LED Matrix Display</span>
              <p className="subtitle">Designed an 8x8 LED grid that displays custom patterns via a smartphone app over Bluetooth.</p>
              {/* <p>Arduino Uno, HC-05 Bluetooth module, LED matrix, MIT App Inventor.</p> */}
            </CatalogCard>
            <CatalogCard bg='DataLogger.webp'>
              <span className="title">Temperature & Humidity Data Logger</span>
              <p className="subtitle">Built a portable sensor node using DHT11 to log environmental data to an SD card. Data visualized via a Python script.</p>
              {/* <p>Arduino Nano, DHT11 sensor, SD card module, Python (matplotlib).</p> */}
            </CatalogCard>
            <CatalogCard bg='OTAUpdate.webp'>
              <span className="title">Wi-Fi-Enabled OTA Firmware Upgrader</span>
              <p className="subtitle">Built a basic OTA system for ESP32 devices to update firmware wirelessly via a local web server. Demonstrated rollback safety.</p>
              {/* <p>ESP32, ArduinoOTA, PlatformIO, Simple HTTP Server</p> */}
            </CatalogCard>
        </CardDeckScrollable>} 

        {/* SKILLS */}
        {(activeNav == Nav.SKILL) && <SkillCard>
          <Tag>C++</Tag>
          <Tag>Python</Tag>
          <Tag>C</Tag>
          <Tag>JavaScript</Tag>
          <Tag>Linux</Tag>
          <Tag>OpenCV</Tag>
          <Tag>Database</Tag>
          <Tag>Microcontrollers</Tag>
          <Tag>Electronics</Tag>
          <Tag>Web/Software Development</Tag>
        </SkillCard>}
      </div>
    </>
}

export default HomePage;