import React, { useEffect, useState } from "react";
import "./Card.css";

export default function Card(props) {
  // const [id, setId] = useState(0)
  return (
    <div className="card" onClick={(e) => props.onClick(e)}>
      {props.id}
    </div>
  );
}
