import { Age } from "./components/age/Age";
import { Color } from "./components/color/Color";
import { Counter } from "./components/counter/Counter";

export const App = () => {
  return (
    <>
      <h1>-- Counter --</h1>
      <Counter />
      <br />
      <br />

      <h1>-- Age --</h1>
      <Age />
      <br />
      <br />

      <h1>-- Color --</h1>
      <Color />
    </>
  );
};
