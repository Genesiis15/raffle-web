import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';

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
        <Instagram />
      </a>
  
      <a
        href="https://facebook.com/tu-usuario"
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
        <Facebook />
      </a>
  
      <a
        href="https://instagram.com/tu-usuario"
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
         <Twitter />
      </a>
    </div>
</>
}