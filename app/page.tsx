import Image from "next/image";
import Button from "./components/button";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <h1>Hello, World</h1>
      <Button label="Enter Now" />
    </div>
  );
};

export default Home;
