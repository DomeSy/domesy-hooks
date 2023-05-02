import { useResponsive, configResponsive } from "../../hooks";

configResponsive({
  small: 0,
  middle: 800,
  large: 1200,
});

const Index = () => {
  const responsive = useResponsive();

  return (
    <>
      <p>尺寸计算： </p>
      {Object.keys(responsive).map((key: string) => (
        <p key={key}>
          {key} {responsive[key] ? "✔" : "✘"}
        </p>
      ))}
    </>
  );
};

export default Index;
