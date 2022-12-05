import React from 'react';
import '../css/footer.css';

export default function Footer() {
  return (
    <div className="footerWrapper">
    <div className="footer">
        <div className="footerInner1">
            <div className="footerInner1Left">
                <h2>고객행복센터</h2>
                <strong>
                    1644-1107
                    <span>월~토요일 오전 7시 ~ 오후 6시</span>
                </strong>
                <div className="footerInner1Leftdiv1">
                    <div>
                        <button>카카오톡 문의</button>
                        <div className="footerInner1Leftdiv1Text">
                            월~토요일
                            <svg width="1" height="10" viewBox="0 0 1 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.5" y1="2.18557e-08" x2="0.5" y2="10" stroke="#ccc"></line>
                            </svg>
                            오전 7시 ~ 오후 6시
                            <br/>
                            일/공휴일
                            <svg width="1" height="10" viewBox="0 0 1 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.5" y1="2.18557e-08" x2="0.5" y2="10" stroke="#ccc"></line>
                            </svg>
                            오전 7시 ~ 오후 1시
                        </div>
                    </div>
                    <div>
                        <button>1:1 문의</button>
                        <div className="footerInner1Leftdiv1Text">
                            365일
                            <br/>
                            고객센터 운영시간에 순차적으로 답변드리겠습니다.
                        </div>
                    </div>
                    <div>
                        <button>대량주문 문의</button>
                        <div className="footerInner1Leftdiv1Text">
                            월~금요일
                            <svg width="1" height="10" viewBox="0 0 1 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.5" y1="2.18557e-08" x2="0.5" y2="10" stroke="#ccc"></line>
                            </svg>
                            오전 9시 ~ 오후 6시
                            <br/>
                            점심시간
                            <svg width="1" height="10" viewBox="0 0 1 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.5" y1="2.18557e-08" x2="0.5" y2="10" stroke="#ccc"></line>
                            </svg>
                            낮 12시 ~ 오후 1시
                        </div>
                    </div>
                </div>
                <div className="footerInner1Leftdiv2">
                    비회원 문의 : 
                    <a href="mailto:help@kurlycorp.com">
                        help@kurlycorp.com
                    </a>
                    <br/>
                    비회원 대량주문 문의 : 
                    <a href="mailto:kurlygift@kurlycorp.com">
                        kurlygift@kurlycorp.com
                    </a>
                </div>
            </div>
            <div className="footerInner1Right">
                <ul>
                    <li className="footerInner1RightList">
                        <a href="">컬리소개</a>
                    </li>
                    <li className="footerInner1RightList">
                        <a href="">컬리소개영상</a>
                    </li>
                    <li className="footerInner1RightList">
                        <a href="">인재채용</a>
                    </li>
                    <li className="footerInner1RightList">
                        <a href="">이용약관</a>
                    </li>
                    <li className="footerInner1RightList">
                        <a href=""><b>개인정보처리방침</b></a>
                    </li>
                    <li className="footerInner1RightList">
                        <a href="">이용안내</a>
                    </li>
                </ul>
                <div>
                    법인명 (상호) : 주식회사 컬리
                    <svg width="1" height="10" viewBox="0 0 1 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="2.18557e-08" x2="0.5" y2="10" stroke="#ccc"></line>
                    </svg>
                    사업자등록번호 : 261-81-23567
                    <a href="">
                        사업자정보 확인
                    </a>
                    <br/>
                    통신판매업 : 제 2018-서울강남-01646 호
                    <svg width="1" height="10" viewBox="0 0 1 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="2.18557e-08" x2="0.5" y2="10" stroke="#ccc"></line>
                    </svg>
                     개인정보보호책임자 : 이원준
                    <br/>
                    주소 : 서울특별시 강남구 테헤란로 113, 18층(역삼동)
                    <svg width="1" height="10" viewBox="0 0 1 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="2.18557e-08" x2="0.5" y2="10" stroke="#ccc"></line>
                    </svg>
                     대표이사 : 김슬아
                    <br/>
                    입점문의 :
                    <a href="">임점문의하기</a>
                    <svg width="1" height="10" viewBox="0 0 1 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="2.18557e-08" x2="0.5" y2="10" stroke="#ccc"></line>
                    </svg>
                    제휴문의 :
                    <a href="">business@kurlycorp.com</a>
                    <br/>
                    채용문의 :
                    <a href="">recruit@kurlycorp.com</a>
                    <br/>
                    팩스 : 070 - 7500 - 6098
                </div>
                <ul className="footerInner1SNSIcon">
                    <a href="https://instagram.com/marketkurly" target="_blank" rel="noreferrer">
                        <img src="https://res.kurly.com/pc/ico/1810/ico_instagram.png" alt="마켓컬리 인스타그램 바로가기"/>
                    </a>
                    <a href="https://www.facebook.com/marketkurly" target="_blank" rel="noreferrer">
                        <img src="https://res.kurly.com/pc/ico/1810/ico_fb.png" alt="마켓컬리 페이스북 바로가기"/>
                    </a>
                    <a href="https://blog.naver.com/marketkurly" target="_blank" rel="noreferrer">
                        <img src="https://res.kurly.com/pc/ico/1810/ico_blog.png" alt="마켓컬리 네이버블로그 바로가기"/>
                    </a>
                    <a href="https://m.post.naver.com/marketkurly" target="_blank" rel="noreferrer">
                        <img src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png" alt="마켓컬리 네이버포스트 바로가기"/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCfpdjL5pl-1qKT7Xp4UQzQg" target="_blank" rel="noreferrer">
                        <img src="https://res.kurly.com/pc/ico/1810/ico_youtube.png" alt="마켓컬리 유튜브 바로가기"/>
                    </a>
                </ul>
            </div>
        </div>
        <div className="footerInner2">
            <button>
                <img className="footer2Icon" src="https://res.kurly.com/pc/ico/2208/logo_isms.svg" alt="isms 로고"/>
                <p>[인증범위] 마켓컬리 쇼핑몰 서비스 개발·운영
                    <br/>(심사받지 않은 물리적 인프라 제외)
                    <br/>[유효기간] 2022.01.19 ~ 2025.01.18
                </p>
            </button>
            <button>
                <img className="footer2Icon" src="https://res.kurly.com/pc/ico/2208/logo_privacy.svg" alt="eprivacy plus 로고"/>
                <p>개인정보보호 우수 웹사이트 ·
                    <br/>개인정보처리시스템 인증 (ePRIVACY PLUS)
                </p>
            </button>
            <button>
                <img className="footer2Icon2" src="https://res.kurly.com/pc/ico/2208/logo_tosspayments.svg" alt="payments 로고"/>
                <p>토스페이먼츠 구매안전(에스크로)
                    <br/>서비스를 이용하실 수 있습니다.
                </p>
            </button>
            <button>
                <img className="footer2Icon" src="https://res.kurly.com/pc/ico/2208/logo_wooriBank.svg" alt="우리은행 로고"/>
                <p>고객님이 현금으로 결제한 금액에 대해 우리은행과<br/>채무지급보증 계약을 체결하여 안전거래를 보장하고
                    <br/>있습니다.
                </p>
            </button>
        </div>
    </div>

    <div className="underFooter">
        마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
        <br/>
        마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.
        <em>© KURLY CORP. ALL RIGHTS RESERVED</em>            
    </div>
</div>
  )
}
