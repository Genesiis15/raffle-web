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
        href="https://twitter.com/tu-usuario"
        style={{
          color: "#1DA1F2",
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
        <i className="fab fa-twitter" />
      </a>
  
      <a
        href="https://facebook.com/tu-usuario"
        style={{
          color: "#1877F2",
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
        <i className="fab fa-facebook" />
      </a>
  
      <a
        href="https://instagram.com/tu-usuario"
        style={{
          color: "#E4405F",
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
        <i className="fab fa-instagram" />
      </a>
    </div>
</>
}