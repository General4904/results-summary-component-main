const Card = ({ icon, altText, score, title, style }) => {
  const reactionIconStyle = {
    marginLeft: "12px",
  };

  return (
    <div className="card" style={style}>
      <div className="icon-title">
        <img className="cardIcon" src={icon} alt={altText} />
        <span className="title" style={reactionIconStyle}>
          {title}
        </span>
      </div>
      <span className="score-right">
        <span>{score}</span> <span className="hundred">/ 100</span>
      </span>
    </div>
  );
};

export default Card;
