import React from "react";
import pnfImg from "../../Assets/pageNotFound.png";
import { HeadingPNF, PNFImage, PNFMainDiv } from "../../Styles/PNF.style";

const PNF = () => {
  return (
    <PNFMainDiv>
      <HeadingPNF>Sorry,there is no result for keyword you searched</HeadingPNF>
      <PNFImage src={pnfImg} alt="pnf" />
    </PNFMainDiv>
  );
};

export default PNF;
