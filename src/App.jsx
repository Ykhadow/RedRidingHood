import { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./App.css";
import CoverStart from "./components/CoverStart";
import Page from "./components/Page";
import imgPage1 from "../src/assets/bookImages/1.png";
import imgPage2 from "../src/assets/bookImages/2.png";
import imgPage3 from "../src/assets/bookImages/3.png";
import imgPage4 from "../src/assets/bookImages/4.png";
import imgPage5 from "../src/assets/bookImages/5.png";
import imgPage6 from "../src/assets/bookImages/6.png";
import imgPage7 from "../src/assets/bookImages/7.png";
import imgPage8 from "../src/assets/bookImages/8.png";
import imgPage9 from "../src/assets/bookImages/9.png";
import imgPage10 from "../src/assets/bookImages/10.png";
import CoverEnd from "./components/CoverEnd";

const poem = {
  page1:
    "In a village nestled deep, where shadows swayed and gleamed,\nLived a girl named Red, with dreams that teemed.\nHer cloak, a crimson river in the morning light,\nShe tread through woods, under the sun's soft sight.",
  page2:
    "\"Grandma's house, I shall visit today,\nWith bread and wine, I'll find my way.\nAs the sun climbed high, casting secrets long,\nRed ventured forth, singing a spirited song.\"",
  page3:
    "In shadows deep, Red met a wolf, so sly,\nHe asked to deliver the basket, a crafty lie.\nNaive Red, seeking a riverside reprieve,\nGave her trust, unaware of what she'd conceive.",
  page4:
    "At a nearby lake, she paused and smiled,\nThe water's reflection, pure and beguiled.\nHanding the basket to the wolf, so discreet,\nShe savored the moment, the lake at her feet.",
  page5:
    "Red decided it was time to check on her grandma,\nBefore leaving the river, a growing enigma.\nArriving at Granny's, the door stood ajar,\nA sight so eerie, her senses did spar.",
  page6:
    '"Grandma, dear Grandma," Red called with might,\nBut silence answered, her heart took flight.\nApproaching the bed where Granny should lay,\nRed\'s heart skipped a beat, in a foreboding display.',
  page7:
    "Eyes like embers, teeth sharp as guilt,\nThe wolf's true nature, a twisted tilt.\nAs Red stood frozen, the truth became unsealed,\nThe wolf's icy stare, her destiny revealed.",
  page8:
    '"Dear Red," the wolf sneered, his tone unkind,\n"You embraced a stranger\'s tale, to your trust confined.\nLike a star that falls from a fickle day\'s embrace,\nYour innocence, my dear, is a treasure I did chase."',
  page9:
    "In panic, Red fled, her heart heavy with dread,\nThrough the forest, she ran, the wolf close on her thread.\nBut fortune favored Red, as she escaped the night,\nTo safety and daylight, she emerged in her flight.",
  // page10:
  //   "The lesson etched deep, her trust rearranged,\nInnocence tarnished, her world forever changed.\nFor the wolf's twisted dance had stolen her kin,\nIn her naivety's grip, she had let darkness win.",
  page10:
    "So, dear reader, heed this tale's somber cry,\nIn a world where masks disguise and truths belie.\nFor the wolves still wander, their cunning so well-refined,\nBeware false faces, where innocence may unwind.",
};

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "rgb(20 20 20)",
          overflow: "hidden",
          width: "auto",
        }}
      >
        <HTMLFlipBook
          width={550}
          height={733}
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          className="demo-book"
        >
          <CoverStart />
          <Page bookPage={imgPage1}>{poem.page1}</Page>
          <Page bookPage={imgPage2}>{poem.page2}</Page>
          <Page bookPage={imgPage3}>{poem.page3}</Page>
          <Page bookPage={imgPage4}>{poem.page4}</Page>
          <Page bookPage={imgPage5}>{poem.page5}</Page>
          <Page bookPage={imgPage6}>{poem.page6}</Page>
          <Page bookPage={imgPage7}>{poem.page7}</Page>
          <Page bookPage={imgPage8}>{poem.page8}</Page>
          <Page bookPage={imgPage9}>{poem.page9}</Page>
          <Page bookPage={imgPage10}>{poem.page10}</Page>
          <CoverEnd />
        </HTMLFlipBook>
      </div>
    </>
  );
}

export default App;
