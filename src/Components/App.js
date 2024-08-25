import "../style.css";
import { faqs } from "../faqs";
import { Accordion } from "./Accordion";

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}
