import Image from "next/image";

import Search from "shared/Search";

import LogoImg from "assets/images/logo.png";
import banner from "assets/images/arcane.jpeg";
import { Logo, MainBanner } from "./styles";

const MainComponent = () => {
  return (
    <div>
      <Logo>
        <Image src={LogoImg} alt="logo" width={420} height={200} />
      </Logo>
      <Search />
      <MainBanner>
        <Image
          src={banner}
          alt="logo"
          width={970}
          height={250}
          objectFit="cover"
          layout="responsive"
        />
      </MainBanner>
    </div>
  );
};

export default MainComponent;
