import { useState } from "react";
import Foo from "./Foo";

export default function App() {
  const [showFoo, setShowFoo] = useState(true);
  return (
    <div>
      {showFoo ? <Foo /> : <p>Not Foo</p>}
      <button onClick={() => setShowFoo(!showFoo)}>Toggle Foo</button>
    </div>
  );
}
