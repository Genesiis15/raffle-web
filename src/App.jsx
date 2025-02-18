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
        className="bg-white flex flex-col justify-between"
        style={{ minHeight: "80vh", padding: "80px" }}
      >
        <TeamRaffle />
      </div>
      <div
        className="bg-secondary flex flex-col justify-between"
        style={{
          minHeight: "100vh",
          padding: "100px",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,18%), rgba(255,255,255,21%)), url('../src/assets/2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Contact />
      </div>
    </div>
  );
}

export default App;
