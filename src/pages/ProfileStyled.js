import styled from "styled-components";

// const breakpoints = {
//   mobile: "430px",
//   tablet: "1180px",
// };

// const responsive = {
//   mobile: (styles) => css`
//     @media (min-width: ${breakpoints.mobile}) {
//       ${styles}
//     }
//   `,
//   tablet: (styles) => css`
//     @media (min-width: ${breakpoints.tablet}) {
//       ${styles}
//     }
//   `,
// };

export const ProfileDiv = styled.div`
  font-family: "Righteous", cursive;
  font-size: 65px;
  color: #fff;
  text-align: center;
  -webkit-text-stroke-width: 4px;
  -webkit-text-stroke-color: #000;
  font-family: Righteous;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 40px;
`;

export const Container = styled.div`
  // position: relative;
  // display: flex;
  // width: 1728px;
  // height: 1121px;
  // // overflow: auto;
  // background-color: #cadeee;
  // margin: 0;
  // padding: 0;
`;

// 왼쪽 섹션
export const LeftSection = styled.div`
  display: block;
  flex-direction: column;
  position: fixed;
  background-color: #cadeee;
  width: 716px;
  height: 100%;
`;

export const ProfileWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 366px;
  height: 366px;
  align-items: center;
  justify-content: center;
  display: flex;
  border: 5px solid #12262f;

  margin-left: 165px;
  // margin-top: 50px;
  margin-top: 40px;
`;

// 오른쪽 섹션
export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FirstGroup = styled.div`
  display: flex;
  flex-direction: column;
  // margin-top: -159px;
  // margin-left: -28px;
  margin-top: 110px;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  // margin-left: -28px;
`;

export const TitlePink = styled.p`
  color: #f1719e;
  -webkit-text-stroke-width: 4px;
  -webkit-text-stroke-color: #000;
  font-family: Righteous;
  font-size: 65px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;

export const DivLine = styled.div`
  display: flex;
  border: 3px solid black;
  margin-bottom: 30px;
  width: 440px;
`;

export const Text = styled.p`
  color: #000;
  font-family: "Roboto";
  font-size: 33px;
  font-style: normal;
  font-weight: 400;
  margin: 15px 0;
  line-height: normal;

  span {
    color: #000;
    font-family: "Roboto";
    font-size: 33px;
    font-style: normal;
    font-weight: 700;
  }
`;

// 오른쪽 두 번째 섹션
export const RightSection2 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeadWrapper = styled.div`
  display: flex;
  margin-top: -25px;
  margin-left: -10px;
`;

export const TitleYellow = styled.p`
  color: #ddd081;
  -webkit-text-stroke-width: 4px;
  -webkit-text-stroke-color: #000;
  font-family: Righteous;
  font-size: 65px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;

export const FirstYellowGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -20px;
  margin-left: 70px;
`;

export const LineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 0 20px;
`;

export const Text2 = styled.p`
  color: #000;
  font-family: "Roboto";
  font-size: 33px;
  font-style: normal;
  font-weight: 400;
  margin: 58px 0 0 40px;
  line-height: normal;

  span {
    color: #000;
    font-family: "Roboto";
    font-size: 33px;
    font-style: normal;
    font-weight: 700;
    margin-right: 45px;
  }
`;

export const Text3 = styled.p`
  color: #000;
  font-family: "Roboto";
  font-size: 33px;
  font-style: normal;
  font-weight: 400;
  margin: 80px 0 0 40px;
  line-height: normal;

  span {
    color: #000;
    font-family: "Roboto";
    font-size: 33px;
    font-style: normal;
    font-weight: 700;
    margin-right: 45px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const YellowGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 70px;
`;

export const IconWrapper = styled.div`
  display: flex;
  margin: 20px 0 20px 0;
`;

export const Text4 = styled.p`
  color: #000;
  font-family: "Roboto";
  font-size: 33px;
  font-style: normal;
  font-weight: 400;
  margin: 20px 0 0 50px;
  line-height: normal;
`;

export const RightSectionHead = styled.div`
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const ProjectSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  padding-bottom: 95px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const RightSectionAll = styled.div`
  margin-left: 715px;

  // position: absolute;
  // right: 0;
  background-color: #cadeee;
`;

export const Text5 = styled.p`
  color: #000;
  font-family: "Roboto";
  font-size: 33px;
  font-style: normal;
  font-weight: 400;
  margin: 50px 0 0 40px;
  line-height: normal;
`;

export const Text6 = styled.p`
  color: #000;
  font-family: "Roboto";
  font-size: 33px;
  font-style: normal;
  font-weight: 400;
  margin: 98px 0 0 40px;
  line-height: normal;
`;

export const Text7 = styled.p`
  color: #000;
  font-family: "Roboto";
  font-size: 33px;
  font-style: normal;
  font-weight: 400;
  margin: 120px 0 0 40px;
  line-height: normal;
`;

export const MedalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MedalText = styled.p`
  font-size: 48px;
  padding: 164px 20px 0 0;
  &:first-child {
    padding: 9px 20px 0 0;
  }
`;

export const ProjectLineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
`;

export const ImgWrapper = styled.div`
  width: 610px;
  display: flex;
  flex-direction: row;
  height: 140px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  margin: 20px 0 20px 36px;
`;

export const Img = styled.div`
  margin-left: 15px;
`;

export const ImgWrapperAll = styled.div`
  flex-direction: column;
`;
