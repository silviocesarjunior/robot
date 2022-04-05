import "./App.css";
import { animated, useSpring } from "react-spring";
import { useState } from "react";

const movimentos = [
  "M750 517 l0 -30 40 0 40 0 0 108 0 108 -40 39 -40 39 0 -147z",
  "M207 800 l-37 -38 -0 -107 0 -107 40 0 40 0 0 145 c0 80 -1 145 -3 145 -2 0 -20 -17 -40 -38z",
  "M540 205 l0 -50 62 3 c50 2 63 6 66 21 2 12 -3 17 -17 17 -20 0 -21 5 -21 105 l0 105 -45 0 -45 0 0 -125z",
  "M370 300 c0l -100 -1 -105 -21 -105 -14 0 -19 -5 -17 -17 3 -15 16 -19 66 -21 l62 -3 0 126 0 125 -45 0 -45 0 0 -105z",
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const animationProps = useSpring({
    movimento:() => movimentos[activeIndex],
  });

  return (
    <div className="App">
      <svg
        width="300"
        height="300"
        viewBox="0 0 100.000000 100.000000"
      >

        <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
          fill="#000000" stroke="none">
          <animated.path
            d="M377 914 c-4 -4 -7 -43 -7 -86 l0 -78 130 0 131 0 -3 83 -3 82 -121
            3 c-66 1 -123 -1 -127 -4z m78 -104 c0 -22 -29 -18 -33 3 -3 14 1 18 15 15 10
            -2 18 -10 18 -18z m125 6 c0 -20 -19 -31 -32 -18 -6 6 -7 15 -4 21 10 16 36
            13 36 -3z"/>
          <animated.path
            d="M292 543 l3 -168 205 0 205 0 3 168 2 167 -210 0 -210 0 2 -167z
            m168 -3 l0 -80 -40 0 -40 0 0 80 0 80 40 0 40 0 0 -80z m160 -20 l0 -60 -40 0
            -40 0 0 60 0 60 40 0 40 0 0 -60z"/>
          <animated.path
            d="M207 622 l-37 -38 -0 -107 0 -107 40 0 40 0 0 145 c0 80 -1 145 -3
            145 -2 0 -20 -17 -40 -38z"/>
          <animated.path
            d="M750 517 l0 -147 40 0 40 0 0 108 0 108 -40 39 -40 39 0 -147z" />
          <animated.path
            d="M370 225 c0 -100 -1 -105 -21 -105 -14 0 -19 -5 -17 -17 3 -15 16
            -19 66 -21 l62 -3 0 126 0 125 -45 0 -45 0 0 -105z"/>
          <animated.path
            d="M540 205 l0 -126 62 3 c50 2 63 6 66 21 2 12 -3 17 -17 17 -20 0 -21
            5 -21 105 l0 105 -45 0 -45 0 0 -125z"/>
        </g>
      </svg>
      <div>
        {["braço direito", "braço esquerdo", "perna esquerda", "perna direita"].map((text, index) => (
          <button
          type="button"
          key={index}
          onClick={() => {
            setActiveIndex(index);
          }}
          style={{
            background: activeIndex === index ? "yellow" : "white",
            color: activeIndex === index ? "black" : "black"
          }}
        >
          {text}
        </button>
        ))}
      </div>
    </div>



  );
}

export default App;

