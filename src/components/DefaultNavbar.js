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
import Logo from 'images/logo.png';

//import Button from '@material-tailwind/react/Button';

export default function DefaultNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <Navbar color="transparent" navbar>
            <NavbarContainer>
                <NavbarWrapper>
                        <Link to="/">
                            <img src={Logo} alt='RECO SEOUL' width='50' height='50' />
                        </Link>
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
                                                ?????????
                                            </span>
                                        </div>
                                    }
                                    ripple="light"
                                >
                                    <Link to="/profile">
                                        <DropdownItem color="lightBlue">
                                            ?????????
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/profileFood">
                                        <DropdownItem color="lightBlue">
                                            ?????????
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/profilePlay">
                                        <DropdownItem color="lightBlue">
                                            ?????????
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
                                                ????????????
                                            </span>
                                        </div>
                                    }
                                    ripple="light"
                                >
                                    <Link to="/recoCourse">
                                        <DropdownItem color="lightBlue">
                                            ????????? ????????????
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/home">
                                        <DropdownItem color="lightBlue">
                                            ???????????? MBTI
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
                                                ??????
                                            </span>
                                        </div>
                                    }
                                    ripple="light"
                                >
                                    <Link to="/profile">
                                        <DropdownItem color="lightBlue">
                                            ?????????
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/profile_food">
                                        <DropdownItem color="lightBlue">
                                            ??????
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
                                                ?????????
                                            </span>
                                        </div>
                                    }
                                    ripple="light"
                                >
                                    <Link to="/login">
                                        <DropdownItem color="lightBlue">
                                            ????????? 
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/register">
                                        <DropdownItem color="lightBlue">
                                            ????????????
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
