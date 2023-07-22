import React from "react";

type props = {
  user: string | null;
  onClick: () => void;
};

const Square: React.FC<props> = ({ user, onClick }) => {
  return (
    <div className="square" onClick={onClick}>
      {user}
    </div>
  );
};

export default Square;
