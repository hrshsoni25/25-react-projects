import useWindowResize from ".";

export default function UseWindowResizeTest() {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;

  return (
    <div>
      <h1>use window resize</h1>
      <p>width is {width}</p>
      <p>height is {height}</p>
    </div>
  );
}