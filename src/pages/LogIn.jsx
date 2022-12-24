import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { RecoilBridge } from "recoil";

export default function LogIn() {

  const [user, setUser] = useState({});
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const result = await axios({
        method: "GET",
        url: "/signup"
      })
      setUser(result.data.userData);  
}

  const OnClickSetUser = async () => {
    const result = await axios({
        method: "POST",
        url: "/login",
        data: {
            "id": id,
            "pw": pw           
        }
    })
    if(result.status === 200) {
        await getUserData();
    }
}

  return (
    <Container>
        <div className='title'>로그인</div>
        <div className='loginBox'>
          <form>
            <InputBox>
              <div>
                <div>
                  <input value={id} onChange={(e) => setId(e.target.value)} type="text" placeholder='아이디를 입력해주세요'/>
                </div>
              </div>
              <div>
                <div>
                  <input value={pw} onChange={(e) => setPw(e.target.value)} type="password" placeholder='비밀번호를 입력해주세요'/>
                </div>
              </div>
            </InputBox>
            <Search>
              <a href="">아이디 찾기</a>
              <span></span>
              <a href=""> 비밀번호 찾기</a>
            </Search>
            <ButtonBox>
              <Button className="kakao" inputColor="rgb(95, 0, 128)">
                <span>로그인</span>
              </Button>
              <Button inputColor="#ffe812">
                <span>카카오 로그인</span>
              </Button>
              <Button>
                <span><Link to='/signup'>회원가입</Link></span>
              </Button>
            </ButtonBox>
          </form>
        </div>
    </Container>
  )
}


const Container = styled.div`
    min-width: 1050px;
    margin-top: 90px;
    margin-bottom: 60px;
    background-color: rgb(255, 255, 255);
    .title{
      font-weight: 800;
      font-size: 20px;
      line-height: 20px;
      text-align: center;
    }
    .loginBox{
      width: 340px;
      margin: 0px auto;
      letter-spacing: -0.6px;
    }
`;

const InputBox = styled.div`
  margin-top: 30px;
  > div:first-of-type{
    margin-bottom: 5px;
    padding-bottom: 12px;
  }
  > div > div{
    position: relative;
    height: 48px;
  }
   input{
    width: 100%;
    height: 54px;
    padding: 0px 11px 1px 15px;
    border-radius: 4px;
    border: 1px solid rgb(221, 221, 221);
    font-weight: 400;
    line-height: 1.5;
    color: rgb(51, 51, 51);
    outline: none;
    box-sizing: border-box;
  }
  > div:last-of-type{
    padding-bottom: 12px;
  }
`;

const Search = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    font-size: 13px;
    a{
      color: rgb(51, 51, 51);
      cursor: pointer;
    }
    span{
      width: 1px;
      height: 10px;
      margin: 3px 6px 0px;
      background-color: rgb(51, 51, 51);
    }
`;

const ButtonBox = styled.div`
  margin-top: 28px;
  button span{
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
`;

const Button = styled.button`
  display: block;
  padding: 0px 10px;
  margin-top: 10px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 54px;
  border-radius: 3px;
  border: ${props => props.inputColor ? "0px none" : "1px solid rgb(95, 0, 128)"};
  color: ${props => props.inputColor ? "rgb(255, 255, 255)" : "rgb(95, 0, 128)"};
  background-color: ${props => props.inputColor || "rgb(255, 255, 255)"};
  `;