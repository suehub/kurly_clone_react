import React from 'react';
import styles from './login.module.css';

export default function LogIn() {
  return (
    <div className={styles.container}>
        <div className={styles.title}>로그인</div>
        <div className={styles.loginBox}>
          <form>
            <div className={styles.inputBox}>
              <div>
                <div>
                  <input type="text" placeholder='아이디를 입력해주세요'/>
                </div>
              </div>
              <div>
                <div>
                  <input type="text" placeholder='비밀번호를 입력해주세요'/>
                </div>
              </div>
            </div>
            <div className={styles.search}>
              <a href="">아이디 찾기</a>
              <span></span>
              <a href=""> 비밀번호 찾기</a>
            </div>
            <div className={styles.buttonBox}>
              <button>
                <span>로그인</span>
              </button>
              <button>
                <span>회원가입</span>
              </button>
            </div>
          </form>
        </div>
    </div>
  )
}
