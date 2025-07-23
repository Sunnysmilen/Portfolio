import Homepage from "../components/SinglePage/Homepage";
import Presentation from "../components/SinglePage/Presentation";
import Project from "../components/SinglePage/Project";
import Technologies from "../components/SinglePage/Technologies";

export default function SinglePage() {
  return (
    <>
      <div className="container">
        <Homepage />
        <Presentation />
        <Project />
        <Technologies />
      </div>
    </>
  );
}
