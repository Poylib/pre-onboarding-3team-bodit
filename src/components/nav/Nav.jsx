import { useState } from 'react';
import { Fade } from 'react-reveal';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { blue, pearl } from '../../theme';
import Calendar from '../Calender/Calendar';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  console.log('ahk', location);

  return (
    <NavBlock>
      <Fade>
        {/* 로고영역박스 */}
        <div className='header-inner-box'>
          <div className='header-logo-box'>
            <h1 className='logo-title'>BoDit!</h1>
            <span className='mb-menu-btn'>
              <AiOutlineMenu
                onClick={() => {
                  setToggle(!toggle);
                }}
              />
            </span>
          </div>

          {/* 로고밑콘텐츠영역 */}
          <div className='header-content-inner-box'>
            <div className='calendar-inner-box'>
              <div className='calender-btn'>{location.pathname === '/graph' && <Calendar />}</div>

              {/* 이동메뉴 */}
              <ul className='menu-list-box'>
                <li>
                  <NavLink to='/'>SensorList</NavLink>
                </li>
                <li>
                  <NavLink to='/graph'>GraphScreen</NavLink>
                </li>
              </ul>

              {/* 모바일 이동메뉴 */}
              <ul className={toggle == true ? 'mb-menu-list-box-on' : 'mb-menu-list-box'}>
                <div className='header-logo-box'>
                  <h1 className='logo-title'>BoDit!</h1>
                  <span className='close'>
                    <AiOutlineClose
                      onClick={() => {
                        setToggle(!toggle);
                      }}
                    />
                  </span>
                </div>
                <li>
                  <NavLink to='/'>SensorList</NavLink>
                </li>
                <li>
                  <NavLink to='/graph'>GrphScreen</NavLink>
                </li>
              </ul>

              {/* Export */}
              <div className='export-btn-box'>
                <NavLink to='/' className='export-btn'>
                  EXPROT
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </NavBlock>
  );
};

export default Nav;
const NavBlock = styled.header`
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
  position: relative;

  .header-inner-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 20%;
    height: 100vh;
    z-index: 10;
    /* 로고영역박스 */
    .header-logo-box {
      width: 100%;
      height: 150px;
      .logo-title {
        display: flex;
        justify-content: center;
        padding-top: 50px;
        font: bold 50px/1 'Pacifico';
        color: ${blue};
      }
      .mb-menu-btn {
        display: none;
        position: absolute;
        top: 50px;
        right: 50px;
        font-size: 30px;
        cursor: pointer;
      }
    }

    /* 로고밑콘텐츠영역 */
    .header-content-inner-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
      /* 캘린더박스 */
      .calendar-inner-box {
        width: 100%;
        height: 10%;
        .calender-btn {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          width: 100%;
          height: 100%;
          font: 25px/1 'apple';
          color: ${blue};
        }
      }

      /* 메뉴리스트박스 */
      .menu-list-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 60%;
        li {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          transition: all 0.5s;
          &:hover {
            background: ${blue};
          }
          a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 50px;
            font: 30px/1 'apple';
            color: ${blue};
            transition: all 0.5s;
            c &:hover {
              color: ${pearl};
            }
          }
        }
      }

      /* 모바일 메뉴리스트박스 */
      .mb-menu-list-box {
        position: absolute;
        top: -1000px;
        right: 0%;
        width: 100%;
        height: 100vh;
        background-color: #ffffffe4;
        transition: all 1s;
        .close {
          position: absolute;
        }
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 50px;
          transition: all 0.5s;
          &:hover {
            background: #fff;
          }
          a {
            font: bold 25px/1 'apple';
            color: ${blue};
          }
        }
      }
      .mb-menu-list-box-on {
        position: absolute;
        top: 0;
        right: 0%;
        width: 100%;
        height: 100vh;
        background-color: #fff;
        transition: all 1s;
        .close {
          position: absolute;
        }
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 50px;
          transition: all 0.5s;
          &:hover {
            background: #fff;
          }
          a {
            font: bold 25px/1 'apple';
            color: ${blue};
          }
        }
      }

      .export-btn-box {
        position: absolute;
        bottom: 50px;
        left: 0%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        .export-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 200px;
          height: 50px;
          background: ${blue};
          border-radius: 50px;
          font: bold 25px/1 'Pacifico';
          color: ${pearl};
          cursor: pointer;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .header-inner-box {
      /* 로고영역박스 */
      .header-logo-box {
        .logo-title {
          font: bold 40px/1 'Pacifico';
        }
      }

      /* 로고밑콘텐츠영역 */
      .header-content-inner-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        /* 캘린더박스 */
        .calendar-inner-box {
          width: 100%;
          height: 10%;
          .calender-btn {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            width: 100%;
            height: 100%;
            font: 20px/1 'apple';
            color: ${blue};
          }
        }

        /* export 박스 */
        .export-btn-box {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          .export-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 150px;
            height: 40px;
            background: ${blue};
            border-radius: 50px;
            font: bold 18px/1 'Pacifico';
            color: ${pearl};
            cursor: pointer;
          }
        }
      }
    }
  }

  @media screen and (max-width: 890px) {
    .header-inner-box {
      position: unset;
      top: 0;
      left: 0;
      width: 100%;
      height: 50px;
      /* 로고영역박스 */
      .header-logo-box {
        width: 100%;
        height: 150px;
        .logo-title {
          display: flex;
          justify-content: center;
          padding-top: 50px;
          font: bold 50px/1 'Pacifico';
        }
        .close {
          position: absolute;
          top: 50px;
          right: 50px;
          font-size: 30px;
          cursor: pointer;
        }
        .mb-menu-btn {
          display: block;
          position: absolute;
          top: 50px;
          right: 50px;
          font-size: 30px;
          cursor: pointer;
        }
      }

      /* 로고밑콘텐츠영역 */
      .header-content-inner-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100px;
        background-color: ${blue};
        /* 캘린더박스 */
        .calendar-inner-box {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          margin-top: 35px 0px 50px 0px;
          .calender-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            font: 25px/1 'apple';
            color: ${pearl};
          }
        }

        /* 메뉴리스트박스 */
        .menu-list-box {
          display: none;
          li {
            display: none;
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            transition: all 0.5s;
            &:hover {
              background: ${blue};
            }
            a {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 50px;
              font: 30px/1 'apple';
              color: ${blue};
              transition: all 0.5s;
              c &:hover {
                color: ${pearl};
              }
            }
          }
        }

        .export-btn-box {
          position: initial;
          top: 0;
          left: 0%;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          .export-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 200px;
            height: 50px;
            background: ${blue};
            border-radius: 50px;
            font: bold 25px/1 'Pacifico';
            color: ${pearl};
            cursor: pointer;
          }
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-width: 378px) {
  }
`;
