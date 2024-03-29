const PLATFORM1 = (
  <div
    style={{
      height: "50px",
      width: "10px",
      background: "black",
      position: "absolute",
      top: 0,
      right: 0,
    }}
  />
);

const PLATFORM2 = (
  <div
    style={{
      height: "10px",
      width: "200px",
      background: "black",
      marginLeft: "120px",
    }}
  />
);
const PLATFORM3 = (
  <div
    style={{
      height: "400px",
      width: "10px",
      background: "black",
      marginLeft: "120px",
    }}
  />
);
const PLATFORM4 = (
  <div
    style={{
      height: "10px",
      width: "250px",
      background: "black",
    }}
  />
);

const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: "0px",
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "0px",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const BODY_PARTS = [
  PLATFORM1,
  PLATFORM2,
  PLATFORM3,
  PLATFORM4,
  HEAD,
  BODY,
  LEFT_ARM,
  RIGHT_ARM,
  LEFT_LEG,
  RIGHT_LEG,
];
type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
    </div>
  );
}
