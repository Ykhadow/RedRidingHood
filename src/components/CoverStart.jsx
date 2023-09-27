import React from "react";
import bg from "../assets/bookImages/cover.png";

const CoverStart = React.forwardRef((props, ref) => {
  return (
    <div
      style={{
        overflow: "clip",
      }}
      ref={ref}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 20,
          alignItems: "center",
          gap: 5,
          flexDirection: "column",
          height: "100%",
          backgroundImage: `url('${bg}')`,
          backgroundColor: "#C7BFB0",
          backgroundPosition: "40% 100%",
          backgroundSize: "cover",
          overflow: "hidden",
          width: "auto",
          textAlign: "center",
          fontFamily: "Carlson Antique",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
        }}
      >
        <h1
          style={{
            fontWeight: 200,
            fontSize: "7.2rem",
            width: "70%",
            fontFamily: "BlackChancery",
            margin: "40px",
            color: "#ffee00",
            textShadow: "3px 4px 7px rgba(81,67,21,0.8)",
          }}
        >
          The Red Riding Hood
        </h1>

        <h2
          style={{
            fontWeight: 200,
            fontFamily: "auto",
            fontSize: "1.7rem",
            width: "80%",
            margin: "20px",
            color: "whitesmoke",
            textShadow: "3px 8px 5px rgba(81,67,21,0.8)",
          }}
        >
          Yasir Raees Khan
        </h2>
      </div>
    </div>
  );
});

export default CoverStart;
