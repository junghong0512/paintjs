const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d"); // canvas를 pixel 단위로 다루기 위해

// for the Pixel Maniplation (canvas 픽셀의 크기를 지정)
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

ctx.strokeStyle = "#2c2c2c"; // context 내부에서 지정되는 line color
ctx.lineWidth = 2.5; //

let painting = false;

const stopPainting = () => (painting = false);
const startPainting = () => (painting = true);

const onMouseMove = event => {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    console.log("creating path in ", x, y);
    ctx.beginPath(); // path 는 line (현재 마우스 위치가 starting point) , click 하면 path 가 만들어지지 않는다.
    ctx.moveTo(x, y);
  } else {
    console.log("creating line in ", x, y);
    ctx.lineTo(x, y); // previous position 에서 현재 위치까지 선을 잇는다
    ctx.stroke(); // stroke the current sub-path with the current stroke style (획을 긋는것)
  }
};

const onMouseDown = event => {
  painting = true;
};

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
