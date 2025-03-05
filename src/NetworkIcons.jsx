import { TbWorldShare } from "react-icons/tb";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

export const NetworkIcons =()=>{
return <>
      {/* Contenedor de redes sociales */}
      <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        zIndex: 1000,
        display: "flex",
        gap: "10px",
        flexDirection: "column",
        alignItems: "center" 
      }}
    >
      {/* Iconos de redes sociales */}
      <a
      target='_blank'
        href="https://www.instagram.com/raffle.ve/"
        style={{
          color: "#FF7835",
          fontSize: "24px",
          padding: "10px",
          borderRadius: "50%",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
          textDecoration: "none",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.1)",
            backgroundColor: "#f5f8fa",
          },
        }}
      >
        <FaInstagram />
      </a>
  
      
  
      <a
      target='_blank'
        href="https://www.tiktok.com/@raffleofficial?_t=ZM-8tst0IaW8I9&_r=1"
        style={{
          color: "#FF7835",
          fontSize: "24px",
          padding: "10px",
          borderRadius: "50%",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
          textDecoration: "none",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.1)",
            backgroundColor: "#f5f8fa",
          },
        }}
      >
         <AiOutlineTikTok />
      </a>
      <a
        target='_blank'
        href="https://raffleofficial.com"
        style={{
          color: "#FF7835",
          fontSize: "24px",
          padding: "10px",
          borderRadius: "50%",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
          textDecoration: "none",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.1)",
            backgroundColor: "#f5f8fa",
          },
        }}
      >
        <TbWorldShare />
      </a>
    </div>
</>
}