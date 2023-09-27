import React from "react";
import bg from "../assets/pageBg2.png";

const Page = React.forwardRef(({ bookPage, bgImage = bg, children }, ref) => {
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
          justifyContent: "center",
          alignItems: "center",
          gap: 30,
          flexDirection: "column",
          height: "100%",
          backgroundImage: `url('${bgImage}')`,
          backgroundColor: "#C7BFB0",
          backgroundPosition: "30% 100%",
          backgroundSize: "cover",
          overflow: "hidden",
          width: "auto",
          color: "#694642",
          textAlign: "center",
          fontFamily: "Carlson Antique",
          textJustify: "auto",
        }}
      >
        <img width={450} src={bookPage} />
        <p
          style={{
            fontSize: 22,
            whiteSpace: "pre-wrap",
            fontWeight: "normal",
            width: "90%",
          }}
        >
          {children}
        </p>
      </div>
    </div>
  );
});

export default Page;
