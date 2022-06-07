import React from 'react'
//css-in-js
import styled from 'styled-components'
import TripImage from '../assets/img/street.jpg'
import { useNavigate } from 'react-router-dom'
import { DropdownItem } from '@material-tailwind/react'
import { ButtonGroup } from 'react-bootstrap'
import 'assets/styles/index.css'


const Home = () => {
  const navigate = useNavigate()
  const handleClickButton = () => {
    navigate('/qustion')
  }
    return (
        <Wrapper className='background-trip'>
            <Header>국내 여행지 추천</Header>
            <Contnents>
              <Title >당신에게 어울리는 여행지는?</Title>
              <LogoImage>
                <img src={TripImage} alt = "여행지이미지"  className = "rounded-circle" width={350} height={350}/>
              </LogoImage>
              <Desc>MBTI를 기반으로 하는 나와 어울리는 여행지 찾기!</Desc>
              <ButtonGroup>
                <DropdownItem style={{fontFamily : 'SimKyungha'}} onClick={handleClickButton}>테스트 시작하기</DropdownItem>
              </ButtonGroup>
            </Contnents>
        </Wrapper>
    )
}

export default Home


const Contnents =styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  flex-direction : column;
`
const Wrapper = styled.div`
  height : 100vh;
  font-family: "SimKyungha";
  background-repeat : no-repeat;
  background-size: cover;
`
const Header = styled.div`
  font-size : 40pt;
  display : flex;
  justify-content : center;
  align-items : center
`
const Title = styled.div`
  font-size : 30pt;
  margin-top : 40pt;
`
const LogoImage = styled.div`
  margin-top : 10px;
`
const Desc = styled.div`
  font-size : 20pt;
  margin-top : 20px;
  background-color : white;
` 