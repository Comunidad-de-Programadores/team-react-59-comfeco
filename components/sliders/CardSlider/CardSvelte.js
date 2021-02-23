import React from "react";
import Image from "next/image";

const CardSvelte = ({
  avatar,
  nameAvatar,
  descripction,
  facebook = "#",
  github = "#",
  twitter = "#",
  linkedin = "#",
  team,
  idshow,
  idCont,
  idIcon,
}) => {

  
  

  const showInformation = () => {
    const idAllContainerCard = document.querySelectorAll(`#${idCont}`);
    const idAllshowInformation = document.querySelectorAll(`#${idshow}`);
    const idAllIconShowInformation = document.querySelectorAll(`#${idIcon}`);
    const length1 = idAllContainerCard.length;

    for (let i = 0; i < length1; i++) {
      idAllContainerCard[i].classList.toggle("activeRight");

      idAllshowInformation[i].classList.add("activeAnimation");

      idAllshowInformation[i].classList.toggle("activeRightButton");

      setTimeout(() => {
        idAllshowInformation[i].classList.remove("activeAnimation");
      }, 1500);

      idAllIconShowInformation[i].classList.toggle("icon-menu");

      idAllIconShowInformation[i].classList.toggle("icon-reply");
    }

   
  };
  return (
    <>
      {/*  <div className="backgroundColor"></div> */}
      <div className={`${team} container2`}>
        <div className="showInformation" id={idshow}>
          {/*  {console.log(id2)} */}
          <button
            onClick={() => {
              showInformation();
            }}
          >
            <span className="ico icon-menu" id={idIcon}></span>
          </button>
        </div>
        <div className="containerCard" id={idCont}>
          <div className="front">
            <div className="img">
              <Image
                className="avatar"
                width={325}
                height={216}
                src={avatar}
                alt={nameAvatar}
              />
            </div>
            <div className="team">
              <div className="teamTecnologi">
                <div className="containerSvg">
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 1645.000000 405.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,405.000000) scale(0.100000,-0.100000)"
                      fill="#fff"
                      stroke="none"
                    >
                      <path
                        d="M8070 4044 c-298 -28 -542 -96 -778 -220 -200 -105 -339 -212 -522
          -401 -130 -134 -214 -244 -305 -398 -131 -222 -506 -641 -795 -889 -599 -514
          -1281 -882 -2039 -1101 -254 -73 -649 -157 -1596 -340 -544 -105 -1039 -239
          -1338 -361 -199 -81 -389 -179 -567 -292 l-65 -42 8153 0 c5116 0 8152 4 8152
          9 0 26 -375 232 -580 319 -351 149 -864 281 -1690 437 -1189 225 -1608 346
          -2195 635 -319 157 -544 295 -833 513 -218 163 -361 286 -532 457 -252 252
          -438 477 -534 648 -31 56 -91 148 -133 205 -97 131 -309 343 -440 440 -257
          190 -552 312 -873 361 -103 16 -401 28 -490 20z"
                      />
                    </g>
                  </svg>
                  {team === "svelte" ? (
                    <img
                      className="logoLeader"
                      src="/iconosTeam/svelte.svg"
                      alt={team}
                    />
                  ) : null}

                  {team === "react" ? (
                    <img
                      className="logoLeader"
                      src="/iconosTeam/react.svg"
                      alt={team}
                    />
                  ) : null}

                  {team === "vue" ? (
                    <img
                      className="logoLeader"
                      src="/iconosTeam/vue.svg"
                      alt={team}
                    />
                  ) : null}

                  {team === "angular" ? (
                    <img
                      className="logoLeader"
                      src="/iconosTeam/angular.svg"
                      alt={team}
                    />
                  ) : null}

                  <div className="circleLogo"></div>
                </div>
                <div className="name">
                  <p>{nameAvatar}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="backgroudGlassBack"></div>
          <div className="back">
            <div className="avatarBack">
              <div className="img">
                <Image width={325} height={216} src={avatar} alt={nameAvatar} />
              </div>
            </div>
            <p className="name">{nameAvatar}</p>
            <div className="description">
              <p className="svelte">{descripction}</p>
            </div>

            <div className="redesSocials">
              <ul>
                <li className="btn2">
                  <a href={facebook} className="">
                    <span className="ico icon-facebook facebook"></span>
                  </a>
                </li>
                <li className="btn2">
                  <a href={github} className="">
                    <span className="ico icon-github github"></span>
                  </a>
                </li>
                <li className="btn2">
                  <a href={twitter} className="">
                    <span className="ico icon-twitter twitter"></span>
                  </a>
                </li>
                <li className="btn2">
                  <a href={linkedin} className="">
                    <span className="ico icon-linkedin linkedin"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSvelte;
