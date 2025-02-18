import "./App.css";
import { Navbar } from "./Navbar";
import { NetworkIcons } from "./NetworkIcons";
import { AboutSection } from "./AboutSection";
import { AboutSectionImg } from "./AboutSectionImg";
import { Services } from "./Services";
import { Lottery } from "./Lottery";
import { TeamRaffle } from "./TeamRaffle";
import { Contact } from "./Contact";

import { Comments } from "./Comments";

function App() {
  return (
    <div>
      <header
        className="bg-secondary"
        style={{
          position: "relative",

          padding: "80px",
          minHeight: "80vh",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            borderRadius: "8px",
            backgroundColor: "#fff",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Navbar />
        </div>
      </header>

      <NetworkIcons />
      <div
      id="AboutSection"
        className="bg-secondary "
        style={{
          minHeight: "80vh",
          padding: "80px",
          background:
            "linear-gradient(180deg, rgba(41,28,64,1) 0%, rgba(113,63,255,0.64) 100%)",
        }}
      >
        <AboutSection />
      </div>
      <div
        className="bg-secondary flex justify-between mb-5"
        style={{
          minHeight: "80vh",
          padding: "80px 80px 80px 80px",
          background:
            "linear-gradient(0deg, rgba(41,28,64,1) 0%, rgba(113,63,255,0.64) 100%)",
        }}
      >
        <AboutSectionImg />
      </div>
      <div
      id="Services"
        className="bg-white flex flex-col justify-between"
        style={{ minHeight: "80vh", padding: "80px" }}
      >
        <Services />
      </div>
      <div
        className="bg-primary flex flex-col justify-between"
        style={{ minHeight: "100vh", padding: "100px" }}
      >
        <Lottery />
      </div>
      <div
        className="bg-primary flex flex-col justify-between"
        style={{ minHeight: "100vh", padding: "100px" }}
      >
        <Comments />
      </div>
      
     
      <div
      id="TeamRaffle"
        className="bg-secondary flex flex-col justify-between"
        style={{ minHeight: "80vh", padding: "80px" }}
      >
        <TeamRaffle />
      </div>
      <div
  id="Contact"
  className="bg-white flex flex-col justify-between"
  style={{
    minHeight: "90vh",
    padding: "100px",
  }}
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
  
    <div>
      <Contact />
    </div>
    <div 
      className="hidden md:block"
      style={{
        backgroundImage: "url('../src/assets/2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        maxHeight: "100vh",
        borderRadius:'10px'
      }}
    />
  </div>
</div>
    </div>
  );
}

export default App;
