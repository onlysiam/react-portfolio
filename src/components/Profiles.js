import React from "react";
import git from "../img/git.svg";

import styled from "styled-components";

import { motion } from "framer-motion";
import { fadeAnimation } from "../animation";

import { useScroll } from "./useScroll";

const Profiles = () => {
  const [element, controls] = useScroll();
  return (
    <ProfileStyle
      variants={fadeAnimation}
      animate={controls}
      initial="hidden"
      ref={element}
      id="profile"
    >
      <h2>Get In Touch</h2>
      <div className="socials">
        <div className="linkedin">
          <svg
            onClick={() => {
              window.open("https://www.linkedin.com/in/siam-ahmed-15b967194/");
            }}
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.4159 4.98894C10.4159 7.74428 8.40924 9.97788 5.11017 9.97788C2.00665 9.97357 0 7.74428 0 4.98894C0 2.1646 2.07043 0 5.24196 0C8.40924 0 10.3521 2.1646 10.4159 4.98894ZM0.259335 46V13.9104H10.0928V46H0.259335Z" />
            <path d="M15.9767 24.147C15.9767 20.1455 15.8492 16.7994 15.7174 13.9104H24.2584L24.7133 18.3733H24.9089C26.2013 16.2734 29.3728 13.1903 34.6786 13.1903C41.1492 13.1903 46 17.5885 46 27.036V46H36.1665V28.2175C36.1665 24.0823 34.7423 21.2623 31.1839 21.2623C28.4673 21.2623 26.8518 23.1639 26.1375 25.0008C25.8782 25.6562 25.8144 26.5746 25.8144 27.4931V46H15.9767V24.147Z" />
          </svg>

          <a
            href="/#"
            onClick={() => {
              window.open("https://www.linkedin.com/in/siam-ahmed-15b967194/");
            }}
          >
            in/siamahmed
          </a>
        </div>
        <div className="github">
          <img
            onClick={() => {
              window.open("https://github.com/onlysiam");
            }}
            src={git}
            alt=""
          />{" "}
          <a
            href="/#"
            onClick={() => {
              window.open("https://github.com/onlysiam");
            }}
          >
            github/onlysiam
          </a>
        </div>
        <div className="email">
          <svg
            onClick={() => {
              window.open(
                "https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrgmQMpVPqxlSmGZpbZPqTNXLsSfgMzhNLCNZgdsnbqJtNKbBZvfNWxcJPljDWWJWQGGVV"
              );
            }}
            width="82"
            height="62"
            viewBox="0 0 82 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.58445 62.0285H18.6148V30.0543L0 15.9799V56.3987C0 59.5023 2.50584 62.0285 5.58445 62.0285Z" />
            <path d="M63.3621 62.0285H76.3924C79.4711 62.0285 81.9769 59.5023 81.9769 56.3987V15.9799L63.3621 30.0543V62.0285Z" />
            <path
              d="M63.3621 5.65864V30.0543L81.9769 15.9799V8.47352C81.9769 3.78205 78.2539 0.0288696 73.6002 0.0288696C71.8103 0.0288696 70.0204 0.606282 68.5885 1.68893L63.3621 5.65864Z"
              fill="#FBBC04"
            />
            <path
              d="M18.6148 30.0543V5.65863L40.9526 22.5479L63.2905 5.65863V30.0543L41.0242 46.9436L18.6148 30.0543Z"
              fill="#EA4335"
            />
            <path
              d="M0 8.47347V15.9798L18.6148 30.0542V5.65859L13.3884 1.68888C9.737 -1.126 4.43892 -0.332058 1.6467 3.34894C0.572764 4.86465 0 6.59689 0 8.47347Z"
              fill="#C5221F"
            />
          </svg>

          <a
            href="/#"
            onClick={() => {
              window.open(
                "https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrgmQMpVPqxlSmGZpbZPqTNXLsSfgMzhNLCNZgdsnbqJtNKbBZvfNWxcJPljDWWJWQGGVV"
              );
            }}
          >
            bzs.siam@gmail.com
          </a>
        </div>
      </div>

      <div className="footer">
        <div className="socialsFooter">
          <svg
            onClick={() => {
              window.open("https://twitter.com/only_siam");
            }}
            viewBox="0 0 274 223"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_5_36)">
              <path d="M273.39 26.3C263.33 30.76 252.52 33.78 241.18 35.13C252.76 28.19 261.65 17.2 265.84 4.1C255 10.53 243 15.2 230.22 17.71C219.99 6.81 205.41 0 189.28 0C158.3 0 133.19 25.11 133.19 56.09C133.19 60.49 133.69 64.77 134.64 68.87C88.03 66.53 46.7 44.2 19.03 10.27C14.2 18.55 11.44 28.19 11.44 38.47C11.44 57.93 21.34 75.1 36.39 85.16C27.2 84.87 18.55 82.35 10.98 78.14C10.98 78.37 10.98 78.61 10.98 78.85C10.98 106.03 30.31 128.7 55.97 133.85C51.26 135.13 46.31 135.82 41.19 135.82C37.58 135.82 34.06 135.47 30.64 134.81C37.78 157.09 58.49 173.31 83.04 173.76C63.84 188.8 39.66 197.77 13.38 197.77C8.85 197.77 4.39 197.5 0 196.99C24.82 212.9 54.3 222.19 85.98 222.19C189.15 222.19 245.56 136.72 245.56 62.6C245.56 60.17 245.51 57.75 245.4 55.34C256.36 47.43 265.87 37.55 273.39 26.3Z" />
            </g>
            <defs>
              <clipPath id="clip0_5_36">
                <rect width="273.39" height="222.18" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            onClick={() => {
              window.open("https://www.facebook.com/onlysiam");
            }}
            viewBox="0 0 27 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_5_38)">
              <path
                d="M8.16 27.06H0V18.53H8.16V9.28C8.16 3.73 13.19 0 17.25 0H26.38V7.76H22.17C20.09 7.76 17.33 9.44 17.33 11.52V18.54H25.56V27.07H17.33V51.8"
                fill="white"
              />
              <path d="M16.97 52.16V26.7H25.2V18.89H16.97V11.51C16.97 9.28999 19.83 7.38999 22.17 7.38999H26.03V0.359985H17.25C13.6 0.359985 8.52 3.74999 8.52 9.27999V18.9H0.360001V26.71H8.52V52.17H16.97V52.16Z" />
            </g>
            <defs>
              <clipPath id="clip0_5_38">
                <rect width="26.38" height="52.16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            onClick={() => {
              window.open("https://www.instagram.com/onlysiam/");
            }}
            viewBox="0 0 359 359"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M254.68 0H103.33C46.26 0 0 46.26 0 103.33V254.67C0 311.74 46.26 358 103.33 358H254.67C311.74 358 358 311.74 358 254.67V103.33C358.01 46.26 311.75 0 254.68 0ZM325.04 257.34C325.04 295.22 294.33 325.93 256.45 325.93H101.56C63.68 325.93 32.97 295.22 32.97 257.34V102.45C32.97 64.57 63.68 33.86 101.56 33.86H256.44C294.32 33.86 325.03 64.57 325.03 102.45V257.34H325.04Z" />
            <path d="M179.01 87C127.71 87 86.12 128.59 86.12 179.89C86.12 231.19 127.71 272.78 179.01 272.78C230.31 272.78 271.9 231.19 271.9 179.89C271.9 128.59 230.31 87 179.01 87ZM179.01 240.11C145.75 240.11 118.79 213.15 118.79 179.89C118.79 146.63 145.75 119.67 179.01 119.67C212.27 119.67 239.23 146.63 239.23 179.89C239.22 213.15 212.26 240.11 179.01 240.11Z" />
            <path d="M274.99 105.11C286.941 105.11 296.63 95.4215 296.63 83.47C296.63 71.5186 286.941 61.83 274.99 61.83C263.039 61.83 253.35 71.5186 253.35 83.47C253.35 95.4215 263.039 105.11 274.99 105.11Z" />
          </svg>
        </div>
        <div className="copywrite">
          <p>Developed By Siam Ahmed.</p>
          <p>©ONLYSIAM 2022. All Rights Reserved.</p>
        </div>
      </div>
    </ProfileStyle>
  );
};

const ProfileStyle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
  h2 {
    padding: 12rem 15vw 0rem 15vw;
    margin-bottom: 2rem;
    font-size: 4rem;
    font-weight: 600;
    color: #70e8fd;
  }
  .socials {
    padding: 0rem 15vw 0rem 15vw;
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
    a {
      padding-left: 20px;
      font-size: 1.7rem;
      font-weight: 400;
      text-decoration: none;
      cursor: pointer;
      color: #72d9ff;
      transition: all 0.5s ease;
      &:hover {
        color: #03e8b9;
      }
    }
    .github {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 40px;
        border-radius: 50%;
        background-color: #77babe;
        cursor: pointer;
        transition: all 0.5s ease;
        &:hover {
          background-color: #03e8b9;
        }
      }
    }
    .linkedin {
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        height: 30px;
        fill: #77babe;
        cursor: pointer;
        transition: all 0.5s ease;
        &:hover {
          fill: #03e8b9;
        }
      }
    }
    .email {
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        height: 30px;
        fill: #77babe;
        cursor: pointer;
        transition: all 0.5s ease;
        &:hover {
          fill: #03e8b9;
        }
      }
    }
  }
  .footer {
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 15rem;
    border-top: 1px solid #2e355a;
    margin-top: 22rem;
    .socialsFooter {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding-bottom: 1rem;
      margin: 0rem 30vw 1rem 30vw;
      border-bottom: 1px solid #2e355a;
      svg {
        height: 40px;
        fill: #77babe;
        cursor: pointer;
        transition: all 0.5s ease;
        &:hover {
          fill: #03e8b9;
        }
      }
    }
    p {
      padding-left: 20px;
      font-size: 1.2rem;
      font-weight: 200;
      color: #dadada;
      margin-bottom: 0.5rem;
    }
    .copywrite {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media (max-width: 1200px) {
    .socials {
      display: flex;
      flex-direction: column;
      .github {
        margin-top: 2rem;
      }
      .linkedin {
        margin-top: 2rem;
      }
      .email {
        margin-top: 2rem;
      }
    }
    .footer {
      margin-top: 12rem;
      .socialsFooter {
        svg {
          height: 30px;
        }
      }
      p {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 700px) {
    h2 {
      padding: 5rem 5vw 0rem 5vw;
      margin-bottom: 1rem;
      font-size: 3rem;
    }
    .socials {
      display: flex;
      flex-direction: column;
      padding: 0rem 0vw 0rem 0vw;
      .github {
        margin-top: 2rem;
      }
      .linkedin {
        margin-top: 2rem;
      }
      .email {
        margin-top: 2rem;
      }
    }
    .footer {
      margin-top: 7rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .socialsFooter {
        svg {
          height: 30px;
        }
        width: 50vw;
        margin: 0 0 1rem 0;
      }
      p {
        font-size: 1rem;
        padding: 0;
      }
    }
  }
`;

export default Profiles;
