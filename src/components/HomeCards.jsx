import Card from "./Card";
import iconReaction from "../assets/images/icon-reaction.svg";
import iconMemory from "../assets/images/icon-memory.svg";
import iconVerbal from "../assets/images/icon-verbal.svg";
import iconVisual from "../assets/images/icon-visual.svg";

const HomeCards = () => {
  return (
    <div className="card-container">
      <Card
        icon={iconReaction}
        altText="Icon Reaction"
        title="Reaction"
        score="80"
        style={{
          backgroundColor: "hsla(0, 100%, 67%, 0.05)",
          color: "hsl(0, 100%, 67%)",
        }}
      />
      <Card
        icon={iconMemory}
        altText="Icon Memory"
        title="Memory"
        score="92"
        style={{
          backgroundColor: "hsl(39, 100%, 56%, 0.05)",
          color: "hsl(39, 100%, 56%)",
        }}
      />
      <Card
        icon={iconVerbal}
        altText="Icon Verbal"
        title="Verbal"
        score="61"
        style={{
          backgroundColor: "hsl(166, 100%, 37%, 0.05)",
          color: "hsl(166, 100%, 37%)",
        }}
      />
      <Card
        icon={iconVisual}
        altText="Icon Visual"
        title="Visual"
        score="73"
        style={{
          backgroundColor: "hsl(234, 85%, 45%, 0.05)",
          color: "hsl(234, 85%, 45%)",
        }}
      />
    </div>
  );
};

export default HomeCards;
