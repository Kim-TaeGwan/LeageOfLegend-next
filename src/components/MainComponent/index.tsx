import Image from "next/image";
import LogoImg from "assets/images/logo.png";
import { Logo } from "./styles";

const MainComponent = () => {
  return (
    <div>
      <Logo>
        <Image src={LogoImg} alt="logo" width={420} height={200} />
      </Logo>
      <div>MainPage</div>
      {/*<input type="text" value={setSummonerName} />*/}
    </div>
  );
};

export default MainComponent;
