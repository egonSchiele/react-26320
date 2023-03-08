import { useInsertionEffect, useLayoutEffect } from "react";

export default function App() {
  useLayoutEffect(() => {
    console.log("@ Layout Effect");

    return () => console.log("@ Layout Effect (cleanup)");
  });

  useInsertionEffect(() => {
    console.log("@ Insertion Effect");
    return () => console.log("@ Insertion Effect (cleanup)");
  });

  return <p>Hello from Foo!</p>;
}
