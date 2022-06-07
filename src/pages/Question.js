import React from 'react'
import styled from 'styled-components'
import {ProgressBar, Button} from 'react-bootstrap'
import { QuestionData } from '../assets/data/qustionData'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { DropdownItem } from '@material-tailwind/react'

const Question = () => {
  const [questionNo, setQuestionNo] = React.useState(0)
  const [totalScore, setTotalScore] = React.useState([
    {id: "EI", score : 0 },
    {id: "SN", score : 0 },
    {id: "TF", score : 0 },
    {id: "JP", score : 0 }
  ])
  const navigate = useNavigate()
  console.log('totalScore', totalScore)
  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((s) => 
      s.id === type ? { id: s.id, score: s.score + no } : s
    )
    setTotalScore(newScore)
    // 다음 문제로 문제 수 증가 
    // if 전체 문제개 수보다 많지 않을때는 진행 많을때는 result로 이동
    if(QuestionData.length !== questionNo +1 ){
      setQuestionNo(questionNo + 1)
    } else {
      //mbti도출
      const mbti = newScore.reduce(
        (acc, curr) => 
          acc + (curr.score >= 2 ? curr.id.substring(0, 1): curr.id.substring(1,2)), ""
      )
      console.log("mbti" + mbti)
      //결과 페이지로 이동
      navigate({
        pathname: '/result',
        search: `?${createSearchParams({
          mbti : mbti
        })}`
      })
    }

    // if (type === "EI"){
    //   //기존 스코어에 더할 값을 계산 (기존의 값 + 배점)
    // const addScore = totalScore[0].score + no 
    // //새로운 객체
    // const newObject = {id: "EI" , score : addScore}
    // // splice 통해 새로운 객체를 해당객체 자리에 넣어줌 
    // totalScore.splice(0, 1, newObject)
    // } else if (type === "SN") {
    //   const addScore = totalScore[1].score + no 
    //   const newObject = {id: "SN" , score : addScore} 
    //   totalScore.splice(1, 1, newObject)
    // } else if (type === "TF") {
    //   const addScore = totalScore[2].score + no 
    //   const newObject = {id: "TF" , score : addScore} 
    //   totalScore.splice(2, 1, newObject)
    // } else if (type === "JP") {
    //   const addScore = totalScore[3].score + no 
    //   const newObject = {id: "JP" , score : addScore} 
    //   totalScore.splice(3, 1, newObject)
    // }
  }

  //const handleClickButtonB = (no, type) => {
  //   if (type === "EI"){
  //     //기존 스코어에 더할 값을 계산 (기존의 값 + 배점)
  //   const addScore = totalScore[0].score + no 
  //   //새로운 객체
  //   const newObject = {id: "EI" , score : addScore}
  //   // splice 통해 새로운 객체를 해당객체 자리에 넣어줌 
  //   totalScore.splice(0, 1, newObject)
  //   } else if (type === "SN") {
  //     const addScore = totalScore[1].score + no 
  //     const newObject = {id: "SN" , score : addScore} 
  //     totalScore.splice(1, 1, newObject)
  //   } else if (type === "TF") {
  //     const addScore = totalScore[2].score + no 
  //     const newObject = {id: "TF" , score : addScore} 
  //     totalScore.splice(2, 1, newObject)
  //   } else if (type === "JP") {
  //     const addScore = totalScore[3].score + no 
  //     const newObject = {id: "JP" , score : addScore} 
  //     totalScore.splice(3, 1, newObject)
  //   }
  //   setQuestionNo(questionNo + 1)
  //}
    return (
        <Wrapper>
          <ProgressBar striped variant="danger" now={(questionNo/QuestionData.length)*100} style = {{marginTop : '20px'}} />
          <Title>{QuestionData[questionNo].title}</Title>
          <ButtonGroup>
            <DropdownItem>
              <Button style = {{width : '40%', minHeight : '200px', fontSize : '20px'}} onClick = {() => handleClickButton(1, QuestionData[questionNo].type)}>{QuestionData[questionNo].answera}</Button>
            </DropdownItem>
            <DropdownItem>
              <Button style = {{width : '40%', minHeight : '200px', fontSize : '20px', marginLeft : '20px'}} onClick = {() => handleClickButton(0, QuestionData[questionNo].type)} >{QuestionData[questionNo].answerb}</Button>
            </DropdownItem>
          </ButtonGroup>
        </Wrapper>
    )
}

export default Question

const Wrapper = styled.div`
  height : 100vh;
  text-align : center;
  font-family: "SimKyungha";
  background-image: url('https://en.pimg.jp/061/375/908/1/61375908.jpg');
  background-repeat : no-repeat;
  background-size: cover;
`
const Title = styled.div`
  font-size : 30pt;
  margin : 50px 0;
`
const ButtonGroup = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  font-weight : bold;
  font-size : 20px;
`