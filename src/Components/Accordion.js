import { useState } from "react";
import { AccordionItem } from "./AccordionItem";

export function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}

      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="Test"
        num={12}
        key="Test"
      >
        <p>Text What You Want</p>
        <ul>
          <li>Text 1</li>
          <li>Text 2</li>
          <li>Text 3</li>
          <li>Text 4</li>
        </ul>
      </AccordionItem>
    </div>
  );
}
