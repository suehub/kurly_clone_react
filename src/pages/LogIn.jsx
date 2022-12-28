import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import kakaoimg from '../img/kakao_login_large_wide.png';
import KakaoLogin from "react-kakao-login";
import { useRecoilState } from "recoil";
import { LogState } from "../recoil/LogState";

export default function LogIn() {  

  const navigate = useNavigate();

  const [isLogin, setIsLogIn] = useRecoilState(LogState);

  const initKakao = () => {   // JavaScript SDK 초기화 
    const jsKey = "a82090e04e746f2440d7dcbac68a2c01";   // JavaScript 키
    const Kakao = window.Kakao;
    if(Kakao && !Kakao.isInitialized()) {
      Kakao.init(jsKey);    // Javascript SDK를 앱 키로 초기화
      console.log(Kakao.isInitialized());   // 초기화가 잘 되었는지 boolean 데이터를 반환
    }
  };

  useEffect(() => {
    initKakao();
    getUserData();
  }, []);

  const [user, setUser] = useState([]);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [login, setLogin] = useState(false);

  const token = "a82090e04e746f2440d7dcbac68a2c01";

//   const kakao_Login = () => {
//     window.Kakao.Auth.login({
//         scope: 'profile_nickname, account_email, gender, birthday', //동의항목 페이지에 있는 개인정보 보호 테이블의 활성화된 ID값을 넣습니다.
//         success: function(response) {
//             console.log(response) // 로그인 성공하면 받아오는 데이터
//             window.Kakao.API.request({ // 사용자 정보 가져오기 
//                 url: '/v2/user/me',
//                 success: (res) => {
//                     const kakao_account = res.kakao_account;
//                     console.log(kakao_account)
//                 }
//             });
//             // window.location.href='/login' //리다이렉트 되는 코드
//         },
//         fail: function(error) {
//             console.log(error);
//         }
//     });
// }

  const getUserData = async () => {
    const result = await axios({
        method: "GET",
        url: "/signup"
      })
      setUser(result.data.memberData);  
}
  const KakaoSuccess = () => {
      setIsLogIn(true);
      navigate('/');
  }

  const OnClickSetUser = async (e) => {
    e.preventDefault();

    for(let i=0; i<user.length; i++){
      if(id === user[i].id) {
        if(pw === user[i].pw){
          alert('로그인 성공');
          setIsLogIn(true);
          navigate('/');
          console.log('성공');
          setIsLogIn(true);
          return;
        } else{
          alert('아이디 또는 비밀번호를 다시 입력해주세요');
          setLogin(false);
        }
      } else{
        alert('아이디 또는 비밀번호를 다시 입력해주세요');
        setLogin(false);
      }
    }

    // if(login) {
    //   // const result = await axios({
    //   //   method: "POST",
    //   //   url: "/login",
    //   //   data: {
    //   //       "id": id,
    //   //       "pw": pw           
    //   //   }
    //   // })
    //   // if(result.status === 200) {
    //   //     await getUserData();
    //   // }

    //   alert('로그인 성공');
    //   setIsLogIn(true);
    //   navigate('/');
    // } else{
    //   alert('아이디 또는 비밀번호를 다시 입력해주세요');
    // }
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
              <KakaoLogin className="kakao"
                token={token}
                onSuccess={KakaoSuccess}
                onFail={console.error}
                onLogout={console.info}
                useLoginForm
                style={{"display": "block",
                  "padding": "0px 10px 0px 0px",
                  "margin-bottom": "7px",
                  "overflow": "hidden",
                  "width": "100%",
                  "height": "54px",
                  "background-color": "#FEE500",
                  "border-radius": "6px"}}>
                  <img src={kakaoimg} 
                    style={{"width": "100%",
                      "padding-top": "3px"}}/>
              </KakaoLogin>
              {/* <KakaoButton onClick={kakao_Login}>
                <img src={kakaoimg} />
              </KakaoButton> */}
              <Button primary onClick={OnClickSetUser}>
                <span>로그인</span>
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
  margin-top: ${props => props.primary ? "0px" : "7px"};
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 54px;
  border-radius: 6px;
  border: ${props => props.primary ? "0px none" : "1px solid rgb(95, 0, 128)"};
  color: ${props => props.primary ? "rgb(255, 255, 255)" : "rgb(95, 0, 128)"};
  background-color: ${props => props.primary ? "rgb(95, 0, 128)" : "rgb(255, 255, 255)"};
`;