import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavLink from '@material-tailwind/react/NavLink';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import Icon from '@material-tailwind/react/Icon';
//import Button from '@material-tailwind/react/Button';

export default function DefaultNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <Navbar color="transparent" navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <a
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Link to="/">
                            <DropdownItem>
                                <p style={{color : 'white'}}>RECO SEOUL</p>
                            </DropdownItem>
                        </Link>
                    </a>
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        color="white"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>
                        <div className="flex flex-col z-50 lg:flex-row lg:items-center">
                            <>
                            <div className="text-white">
                                <Dropdown color="transparent" size="sm" buttonType="link"
                                    buttonText={
                                        <div className="py-2.5 font-medium flex items-center">
                                            <Icon
                                                name="view_carousel"
                                                size="2xl"
                                                color="white"
                                            />
                                            <span className="ml-2">
                                                여행지
                                            </span>
                                        </div>
                                    }
                                    ripple="light"
                                >
                                    <Link to="/profile">
                                        <DropdownItem color="lightBlue">
                                            볼거리
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/profileFood">
                                        <DropdownItem color="lightBlue">
                                            먹거리
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/profilePlay">
                                        <DropdownItem color="lightBlue">
                                            놀거리
                                        </DropdownItem>
                                    </Link>
                                </Dropdown>
                            </div>

                            <div className="text-white">
                                <Dropdown color="transparent" size="sm" buttonType="link"
                                    buttonText={
                                        <div className="py-2.5 font-medium flex items-center">
                                            <Icon
                                                name="view_carousel"
                                                size="2xl"
                                                color="white"
                                            />
                                            <span className="ml-2">
                                                여행코스
                                            </span>
                                        </div>
                                    }
                                    ripple="light"
                                >
                                    <Link to="/recoCourse">
                                        <DropdownItem color="lightBlue">
                                            이달의 추천코스
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/home">
                                        <DropdownItem color="lightBlue">
                                            추천코스 MBTI
                                        </DropdownItem>
                                    </Link>
                                </Dropdown>
                            </div>
                            <div className="text-white">
                                <Dropdown color="transparent" size="sm" buttonType="link"
                                    buttonText={
                                        <div className="py-2.5 font-medium flex items-center">
                                            <Icon
                                                name="view_carousel"
                                                size="2xl"
                                                color="white"
                                            />
                                            <span className="ml-2">
                                                언어
                                            </span>
                                        </div>
                                    }
                                    ripple="light"
                                >
                                    <Link to="/profile">
                                        <DropdownItem color="lightBlue">
                                            한국어
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/profile_food">
                                        <DropdownItem color="lightBlue">
                                            영어
                                        </DropdownItem>
                                    </Link>
                                </Dropdown>
                            </div>
                            <div className="text-white">
                                <Dropdown color="transparent" size="sm" buttonType="link"
                                    buttonText={
                                        <div className="py-2.5 font-medium flex items-center">
                                            <Icon
                                                name="view_carousel"
                                                size="2xl"
                                                color="white"
                                            />
                                            <span className="ml-2">
                                                로그인
                                            </span>
                                        </div>
                                    }
                                    ripple="light"
                                >
                                    <Link to="/login">
                                        <DropdownItem color="lightBlue">
                                            로그인 
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/register">
                                        <DropdownItem color="lightBlue">
                                            회원가입
                                        </DropdownItem>
                                    </Link>
                                </Dropdown>
                            </div>
                            </>
                            
                            

                            <NavLink
                                href="https://github.com/gwangmiiin/Project_trip.git"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon
                                    family="font-awesome"
                                    name="fab fa-github"
                                    size="xl"
                                />
                                &nbsp;Github
                            </NavLink>
                        </div>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}
