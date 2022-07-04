import React from "react";
import PNFimg from "../Assets/pageNotFound.png";
import { HeadingPNF, PNFImage, PNFMainDiv } from "../Styles/PNF.style";


type Props = {};

const PNF = (props: Props) => {
  return (
    < PNFMainDiv>
    <HeadingPNF>Sorry,there is no result for keyword you searched</HeadingPNF>
      <PNFImage src={PNFimg} alt="pnf" />
    </ PNFMainDiv>
  );
};

export default PNF;
