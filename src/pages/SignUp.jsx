import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './signUp.module.css';

export default function SignUp() {

    const navigate = useNavigate();

    const [memberDatas, setMemberDatas] = useState([]);


    const [id, setId] = useState("");
    const [usableId, setUsableId] = useState(false);
    const [pw, setPw] = useState("");
    const [pwToConfirm, setPwToConfirm] = useState("")
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [usableEmail, setUsableEmail] = useState(false);
    const [tel, setTel] = useState("");
    const [isTel, setIsTel] = useState(false);
    const [isSignup, setIsSignUp] = useState(false);

    useEffect(() => {
        getMemberData();
    }, [isSignup]);

    const isTelButton = (e) => {
        setTel(e.target.value);
        if(e.target.value){
            setIsTel(true);
            return;
        } 
        setIsTel(false);
    };

    const getMemberData = async () => {
        const result = await axios({
            method: "GET",
            url: "/signup"
          })
          console.log(result.data.memberData);
          setMemberDatas(result.data.memberData);  
    };

    const idCheck = async (e) => {   // id 중복 확인
        e.preventDefault();

        for(let i=0; i<memberDatas.length; i++){
            if(id === memberDatas[i].id){
                alert('사용 불가능한 아이디 입니다');
                setUsableId(true);
                setId('');
                return; 
            } else{
                alert('사용 가능한 아이디 입니다');
                setUsableId(false);
            }
        }
    }

    const emailCheck = async (e) => {   // id 중복 확인
        e.preventDefault();
        
        for(let i=0; i<memberDatas.length; i++){
            if(email === memberDatas[i].email){
                alert('사용 불가능한 이메일 입니다');
                setUsableEmail(true);
                setEmail('');
                return; 
            } else{
                alert('사용 가능한 이메일 입니다');
                setUsableEmail(false);
            }
        }
    }

    const addMember = async (e) => {

        const result = await axios({
            method: "POST",
            url: "/signup",
            data: {
                "id": id,
                "pw": pw,
                "name": name,
                "email": email,
                "tel": tel
                
            }
        })
        if(result.status === 200) {
            await getMemberData();
        }
    };
    
    const onClickAddMember = (e) => {
        e.preventDefault();
        if(pw !== pwToConfirm){
            alert('비밀번호를 다시 확인해주세요');
        } else if(id === ''){
            alert('아이디는 필수항목입니다');
        } 
        else{
            addMember();   
            setIsSignUp(true);
            alert('회원가입 완료');
            console.log(memberDatas);
            // setId('');
            // setPw('');
            // setPwToConfirm('');
            // setName('');
            // setEmail('');
            // setTel('');
            // setIsTel(false);
            navigate('/');
        }
    }



    return (
        <div className={styles.container}>
            <div className={styles.title}>회원가입</div>
            <form className={styles.box}>
                <div className={styles.line}>
                    <span className={styles.star}>*</span>
                    필수입력사항
                </div>
                <div className={styles.main}>
                    <div>
                        <div className={styles.label}>
                            <label>
                                아이디
                                <span className={styles.star}>*</span>
                            </label>
                        </div>
                        <div className={styles.input}>
                            <div>
                                <div>
                                    <input value={id} onChange={(e) => setId(e.target.value)} className={styles.input} placeholder="아이디를 입력해주세요" type="text"/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.button}>
                            <button onClick={idCheck}>
                                <span>중복확인</span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className={styles.label}>
                            <label>
                                비밀번호
                                <span className={styles.star}>*</span>
                            </label>
                        </div>
                        <div className={styles.input}>
                            <div>
                                <div>
                                    <input value={pw} onChange={(e) => setPw(e.target.value)} className={styles.input} placeholder="비밀번호를 입력해주세요" type="password" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.button}></div>
                    </div>
                    <div>
                        <div className={styles.label}>
                            <label>
                                비밀번호확인
                                <span className={styles.star}>*</span>
                            </label>
                        </div>
                        <div className={styles.input}>
                            <div>
                                <div>
                                    <input value={pwToConfirm} onChange={(e) => setPwToConfirm(e.target.value)} className={styles.input} placeholder="비밀번호를 한번 더 입력해주세요" type="password" />
                                </div>
                            </div>
                            {pw && (pw === pwToConfirm) ? <p>비밀번호 일치</p> : <p style={{"color":"rgb(240, 63, 64)"}}>비밀번호 불일치</p>}
                        </div>
                        <div className={styles.button}></div>
                    </div>
                    <div>
                        <div className={styles.label}>
                            <label>
                                이름
                                <span className={styles.star}>*</span>
                            </label>
                        </div>
                        <div className={styles.input}>
                            <div>
                                <div>
                                    <input value={name} onChange={(e) => setName(e.target.value)} className={styles.input} placeholder="이름을 입력해주세요" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.button}></div>
                    </div>
                    <div>
                        <div className={styles.label}>
                            <label>
                                이메일
                                <span className={styles.star}>*</span>
                            </label>
                        </div>
                        <div className={styles.input}>
                            <div>
                                <div>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} placeholder="예: marketkurly@kurly.com" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.button}>
                            <button onClick={emailCheck}>
                                <span>중복확인</span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className={styles.label}>
                            <label>
                                휴대폰
                                <span className={styles.star}>*</span>
                            </label>
                        </div>
                        <div className={styles.input}>
                            <div>
                                <div>
                                    <input value={tel} onChange={isTelButton} className={styles.input} placeholder="숫자만 입력해주세요" type="tel"/>
                                </div>
                            </div>
                        </div>
                        <div className={isTel ? styles.button : styles.disabled}>
                            <button>
                                <span>인증번호 받기</span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className={styles.label}>
                            <label>
                                주소
                                <span className={styles.star}>*</span>
                            </label>
                        </div>
                        <div className={styles.input}>
                            <div>
                                <div style={{"height" : "72px"}}>
                                    <button className={styles.addressButton} type='button'>
                                        <span>
                                            <img src="https://res.kurly.com/pc/service/cart/2007/ico_search.svg"/>
                                            주소 검색
                                        </span>
                                    </button>
                                    <span className={styles.addressSpan}>배송지에 따라 상품 정보가 달라질 수 있씁니다.</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.button}></div>
                    </div>
                    <div>
                        <div className={styles.label}>
                            <label>성별</label>
                        </div>
                        <div className={styles.input}>
                            <div className={styles.radio}>
                                <label>
                                    <input type="radio"/>
                                    <span className={styles.radioStyle}><div></div></span>
                                    <span>남자</span>
                                </label>
                                <label>
                                    <input type="radio"/>
                                    <span className={styles.radioStyle}><div></div></span>
                                    <span>여자</span>
                                </label>
                                <label>
                                    <input type="radio"/>
                                    <span className={styles.radioStyle}><div></div></span>
                                    <span>선택안함</span>
                                </label>
                            </div>
                        </div>
                        <div className={styles.button}></div>
                    </div>
                    <div>
                        <div className={styles.label}>
                            <label>생년월일</label>
                        </div>
                        <div className={styles.input}>
                            <div className={styles.birth}>
                                <div>
                                    <div>
                                        <input type="text" placeholder='YYYY' />
                                    </div>
                                </div>
                                <span></span>
                                <div>
                                    <div>
                                        <input type="text" placeholder='MM' />
                                    </div>
                                </div>
                                <span></span>
                                <div>
                                    <div>
                                        <input type="text" placeholder='DD' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.button}></div>
                    </div>
                    <div>
                        <div className={styles.label}>
                            <label>추가입력 사항</label>
                        </div>
                        <div className={styles.input}>
                            <div className={styles.radio}>
                                <label>
                                    <input type="radio"/>
                                    <span className={styles.radioStyle}><div></div></span>
                                    <span>친구초대 추천인 아이디</span>
                                </label>
                                <label>
                                    <input type="radio"/>
                                    <span className={styles.radioStyle}><div></div></span>
                                    <span>참여 이벤트명</span>
                                </label>
                            </div>
                        </div>
                        <div className={styles.button}></div>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.agree}>
                    <div>
                        <div className={styles.label}>
                            <label>
                                이용약관동의
                                <span className={styles.star}>*</span>
                            </label>
                        </div>
                        <div>
                            <div className={styles.agreeFirst}>
                                <label className={styles.labelClass}>
                                    <input type="checkbox" />
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjREREIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY5LjAwMDAwMCwgLTEwOTAuMDAwMDAwKSB0cmFuc2xhdGUoMTAwLjAwMDAwMCwgOTM2LjAwMDAwMCkgdHJhbnNsYXRlKDU1My4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" />
                                    <span>전체 동의합니다.</span>    
                                </label>
                                <p>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>
                            </div>
                            <div className={styles.agreeContent}>
                                <div>
                                    <label className={styles.labelClass}>
                                        <input type="checkbox" />
                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjREREIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY5LjAwMDAwMCwgLTEwOTAuMDAwMDAwKSB0cmFuc2xhdGUoMTAwLjAwMDAwMCwgOTM2LjAwMDAwMCkgdHJhbnNsYXRlKDU1My4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" alt="" />
                                        <span>이용약관 동의</span>
                                    </label>
                                    <span>(필수)</span>
                                </div>
                                <a>약관보기</a>
                            </div>
                            <div className={styles.agreeContent}>
                                <div>
                                    <label className={styles.labelClass}>
                                        <input type="checkbox" />
                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjREREIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY5LjAwMDAwMCwgLTEwOTAuMDAwMDAwKSB0cmFuc2xhdGUoMTAwLjAwMDAwMCwgOTM2LjAwMDAwMCkgdHJhbnNsYXRlKDU1My4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" alt="" />
                                        <span>개인정보 수집∙이용 동의</span>
                                    </label>
                                    <span>(필수)</span>
                                </div>
                                <a>약관보기</a>
                            </div>
                            <div className={styles.agreeContent}>
                                <div>
                                    <label className={styles.labelClass}>
                                        <input type="checkbox" />
                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjREREIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY5LjAwMDAwMCwgLTEwOTAuMDAwMDAwKSB0cmFuc2xhdGUoMTAwLjAwMDAwMCwgOTM2LjAwMDAwMCkgdHJhbnNsYXRlKDU1My4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" alt="" />
                                        <span>개인정보 수집∙이용 동의</span>
                                    </label>
                                    <span>(선택)</span>
                                </div>
                                <a>약관보기</a>
                            </div>
                            <div className={styles.reception}>
                                <div>
                                    <label className={styles.labelClass}>
                                        <input type="checkbox" />
                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjREREIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY5LjAwMDAwMCwgLTEwOTAuMDAwMDAwKSB0cmFuc2xhdGUoMTAwLjAwMDAwMCwgOTM2LjAwMDAwMCkgdHJhbnNsYXRlKDU1My4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" alt="" />
                                        <span>무료배송, 할인쿠폰 등 혜택/정보 수신 동의</span>
                                    </label>
                                    <span>(선택)</span>
                                </div>
                                <div className={styles.sms}>
                                    <label style={{"width" : "64px"}} className={styles.labelClass}>
                                        <input type="checkbox" />
                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjREREIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY5LjAwMDAwMCwgLTEwOTAuMDAwMDAwKSB0cmFuc2xhdGUoMTAwLjAwMDAwMCwgOTM2LjAwMDAwMCkgdHJhbnNsYXRlKDU1My4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" alt="" />
                                        <span>SMS</span>
                                    </label>
                                    <label className={styles.labelClass}>
                                        <input type="checkbox" />
                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjREREIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY5LjAwMDAwMCwgLTEwOTAuMDAwMDAwKSB0cmFuc2xhdGUoMTAwLjAwMDAwMCwgOTM2LjAwMDAwMCkgdHJhbnNsYXRlKDU1My4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" alt="" />
                                        <span>이메일</span>
                                    </label>
                                </div>
                                <div>
                                    <p>동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</p>
                                </div>
                            </div>
                            <div className={styles.agreeContent}>
                                <div>
                                    <label className={styles.labelClass}>
                                        <input type="checkbox" />
                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjREREIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY5LjAwMDAwMCwgLTEwOTAuMDAwMDAwKSB0cmFuc2xhdGUoMTAwLjAwMDAwMCwgOTM2LjAwMDAwMCkgdHJhbnNsYXRlKDU1My4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" alt="" />
                                        <span>본인은 만 14세 이상입니다.</span>
                                    </label>
                                    <span>(필수)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.join}>
                    <button onClick={onClickAddMember} type='submit'>
                        <span>가입하기</span>
                    </button>
                </div>
                
            </form>
        </div>
    )
}
