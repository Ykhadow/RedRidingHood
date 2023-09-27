import React from "react";
import bg from "../assets/bookImages/coverEnd.png";

const CoverEnd = React.forwardRef((props, ref) => {
  const epilogue = {
    content:
      "In the enchanted realm of storytelling, where imagination and technology intertwine, this tale came to life. Every word, every line, woven together not by human hands, but by the marvels of Artificial Intelligence.\n\nAs you journeyed through the mysterious woods with Little Red Riding Hood, and pondered the moral depths of trust and deception, remember that this story is not just a retelling, but a demonstration of how we can harness the power of AI to craft new narratives and breathe fresh life into timeless classics.\n\nWith the boundless possibilities of AI, storytelling knows no bounds. It's a testament to the potential that lies within these tools, waiting for creative minds like yours to explore and shape the stories of tomorrow.\n\nThank you for joining us on this adventure, where the past meets the future, and where tales come to life through the magic of technology.\n\n- [Your Name/Project Name]",
  };
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
          padding: 20,
          alignItems: "center",
          gap: 5,
          flexDirection: "column",
          height: "100%",
          backgroundImage: `url('${bg}')`,
          backgroundColor: "#C7BFB0",
          backgroundPosition: "50% 100%",
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
            fontSize: "3rem",
            width: "70%",
            fontFamily: "BlackChancery",
            color: "#ffee00",
            textShadow: "3px 4px 7px rgba(81,67,21,0.8)",
          }}
        >
          Epilogue
        </h1>
        <p
          style={{
            fontWeight: 200,

            fontSize: "1.23rem",
            width: "80%",
            margin: "20px",
            color: "whitesmoke",
            textShadow: "3px 8px 5px rgba(81,67,21,0.8)",
          }}
        >
          In the enchanted realm of storytelling, where imagination and
          technology intertwine, this tale came to life. Every word, every line,
          woven together not by human hands, but by the marvels of Artificial
          Intelligence.
          <br />
          <br />
          As you journeyed through the mysterious woods with Little Red Riding
          Hood, and pondered the moral depths of trust and deception, remember
          that this story is not just a retelling, but a demonstration of how we
          can harness the power of AI to craft new narratives and breathe fresh
          life into timeless classics.
          <br />
          <br />
          With the boundless possibilities of AI, storytelling knows no bounds.
          It's a testament to the potential that lies within these tools,
          waiting for creative minds like yours to explore and shape the stories
          of tomorrow.
          <br />
          <br />
          Thank you for joining me on this adventure, where the past meets the
          future, and where tales come to life through the magic of technology.
          <br />
          <br />
          <span style={{ color: "#ffee00" }}>Yasir Raees Khan</span>
        </p>
      </div>
    </div>
  );
});

export default CoverEnd;
