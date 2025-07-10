import React from "react";
import * as S from "./ProfileStyled.js";
import Footer from "../components/Footer.jsx";
import { ReactComponent as ProfileIcon } from "../assets/myprofile.svg";
import { ReactComponent as HeadIcon1 } from "../assets/head1.svg";
import { ReactComponent as HeadIcon2 } from "../assets/head2.svg";
import { ReactComponent as StackIcon } from "../assets/stack.svg";
import { ReactComponent as YellowTimeline } from "../assets/yellowline.svg";
import { ReactComponent as PinkTimeline } from "../assets/pinkline.svg";
import { ReactComponent as InstarIcon } from "../assets/instar.svg";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as PJ1 } from "../assets/1.svg";
import { ReactComponent as PJ2 } from "../assets/2.svg";
import { ReactComponent as PJ3 } from "../assets/3.svg";
import { ReactComponent as PJ4 } from "../assets/4.svg";
import { ReactComponent as PJ5 } from "../assets/5.svg";
import { ReactComponent as PJ6 } from "../assets/6.svg";
import { ReactComponent as PJ7 } from "../assets/7.svg";
import { ReactComponent as PJ8 } from "../assets/8.svg";
import { ReactComponent as PJ9 } from "../assets/9.svg";
import { ReactComponent as PJ10 } from "../assets/10.svg";
import { ReactComponent as PJ11 } from "../assets/11.svg";
import { ReactComponent as PJ12 } from "../assets/12.svg";
import { ReactComponent as PJ13 } from "../assets/13.svg";
import { ReactComponent as PJ14 } from "../assets/14.svg";
import { ReactComponent as PJ15 } from "../assets/15.svg";
import { ReactComponent as PJ16 } from "../assets/16.svg";
import { ReactComponent as PJ17 } from "../assets/17.svg";
import { ReactComponent as PJ18 } from "../assets/18.svg";
import { ReactComponent as PJ19 } from "../assets/19.svg";
import { ReactComponent as PJ20 } from "../assets/20.svg";
import { ReactComponent as PJ21 } from "../assets/21.svg";
import { ReactComponent as PJ22 } from "../assets/22.svg";
import { ReactComponent as PJ23 } from "../assets/23.svg";
import { ReactComponent as PJ24 } from "../assets/24.svg";

function Profile() {
  return (
    <>
      {/* <S.LeftSection style={{ transform: `translateY(${scrollY}px)` }}> */}
      <S.LeftSection>
        <HeadIcon1 />
        {/* 프로필사진 부분 */}
        <S.ProfileWrapper>
          <ProfileIcon width="366px" height="366px" />
        </S.ProfileWrapper>
        <S.ProfileDiv>No Jinkyeong</S.ProfileDiv>
      </S.LeftSection>

      <S.RightSectionAll>
        <S.RightSectionHead>
          <S.RightSection>
            {/* <S.SpaceDiv /> */}
            <S.FirstGroup>
              <S.TitlePink>Introduce</S.TitlePink>
              <S.DivLine />
              <S.Text>
                <span>생일 : </span> 2004.01.06
              </S.Text>
              <S.Text>
                <span>MBTI : </span> INTP
              </S.Text>
              <S.Text>
                <span>거주지 : </span> Seoul, South Korea
              </S.Text>
              <S.Text>
                <span>전공 : </span> 디지털소프트웨어공학부
              </S.Text>
              <S.Text>
                <span>이메일 : </span> nojk0106@naver.com
              </S.Text>
            </S.FirstGroup>

            <S.Group>
              <S.TitlePink>Interest</S.TitlePink>
              <S.DivLine />
              <StackIcon />
            </S.Group>
          </S.RightSection>

          <S.RightSection2>
            <S.HeadWrapper>
              <HeadIcon2 width="580px" />
            </S.HeadWrapper>
            <S.FirstYellowGroup>
              <S.TitleYellow>Activities</S.TitleYellow>
              <S.DivLine />
              <S.LineWrapper>
                <YellowTimeline />
                <S.TextWrapper>
                  <S.Text2>
                    <span>2024 </span> 12기 아기사자
                  </S.Text2>
                  <S.Text3>
                    <span>2025 </span> 13기 운영진
                  </S.Text3>
                </S.TextWrapper>
              </S.LineWrapper>
            </S.FirstYellowGroup>

            <S.YellowGroup>
              <S.TitleYellow>Contact</S.TitleYellow>
              <S.DivLine />
              <S.TextWrapper>
                <S.LineWrapper>
                  <S.IconWrapper>
                    <InstarIcon />
                  </S.IconWrapper>
                  <S.Text4>@ hi_hee_0304</S.Text4>
                </S.LineWrapper>

                <S.LineWrapper>
                  <S.IconWrapper>
                    <GithubIcon />
                  </S.IconWrapper>
                  <S.Text4>@ yeon-yeon1</S.Text4>
                </S.LineWrapper>
              </S.TextWrapper>
            </S.YellowGroup>
          </S.RightSection2>
        </S.RightSectionHead>
        <S.ProjectSection>
          <S.Group>
            <S.TitlePink>Project</S.TitlePink>
            <S.DivLine />
            <S.ProjectLineWrapper>
              <S.MedalWrapper>
                <S.MedalText>🥇</S.MedalText>
                <S.MedalText>🏅</S.MedalText>
                <S.MedalText>🥈</S.MedalText>
              </S.MedalWrapper>
              <PinkTimeline width="40px" height="789px" />
              <S.TextWrapper>
                <S.Text5>
                  비교과
                  <br />
                  개발프로젝트
                </S.Text5>
                <S.Text6>중앙 해커톤</S.Text6>
                <S.Text7>데모데이</S.Text7>
                <S.Text7>덕멋 사이트</S.Text7>
                <S.Text7>트렌디톤</S.Text7>
              </S.TextWrapper>
              <S.ImgWrapperAll>
                {/* 비교과 개발프로젝트 */}
                <S.ImgWrapper>
                  <S.Img>
                    <PJ1 />
                  </S.Img>
                  <S.Img>
                    <PJ2 />
                  </S.Img>
                  <S.Img>
                    <PJ3 />
                  </S.Img>
                  <S.Img>
                    <PJ4 />
                  </S.Img>
                  <S.Img>
                    <PJ5 />
                  </S.Img>
                </S.ImgWrapper>
                {/* 중앙 해커톤 */}
                <S.ImgWrapper>
                  <S.Img>
                    <PJ6 />
                  </S.Img>
                  <S.Img>
                    <PJ7 />
                  </S.Img>
                </S.ImgWrapper>
                {/* 데모데이 */}
                <S.ImgWrapper>
                  <S.Img>
                    <PJ8 />
                  </S.Img>
                  <S.Img>
                    <PJ9 />
                  </S.Img>
                  <S.Img>
                    <PJ10 />
                  </S.Img>
                  <S.Img>
                    <PJ11 />
                  </S.Img>
                </S.ImgWrapper>
                {/* 덕멋 사이트 */}
                <S.ImgWrapper>
                  <S.Img>
                    <PJ12 />
                  </S.Img>
                  <S.Img>
                    <PJ13 />
                  </S.Img>
                  <S.Img>
                    <PJ14 />
                  </S.Img>
                  <S.Img>
                    <PJ15 />
                  </S.Img>
                  <S.Img>
                    <PJ16 />
                  </S.Img>
                  <S.Img>
                    <PJ17 />
                  </S.Img>
                </S.ImgWrapper>
                {/* 트렌디톤 */}
                <S.ImgWrapper>
                  <S.Img>
                    <PJ18 />
                  </S.Img>
                  <S.Img>
                    <PJ19 />
                  </S.Img>
                  <S.Img>
                    <PJ20 />
                  </S.Img>
                  <S.Img>
                    <PJ21 />
                  </S.Img>
                  <S.Img>
                    <PJ22 />
                  </S.Img>
                  <S.Img>
                    <PJ23 />
                  </S.Img>
                  <S.Img>
                    <PJ24 />
                  </S.Img>
                </S.ImgWrapper>
              </S.ImgWrapperAll>
            </S.ProjectLineWrapper>
          </S.Group>
        </S.ProjectSection>
      </S.RightSectionAll>
      <Footer />
    </>
  );
}

export default Profile;
