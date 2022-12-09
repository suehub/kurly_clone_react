import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Contents from './components/Contents';
import SideNav from './components/SideNav';
import MainBanner from './components/MainBanner';

function App() {
  return (
    <>
       {/* 상단 배너 */}
        <div className='TopBanner'>
            <div>
                <a href="">
                    <div>지금 가입하고 인기상품 <b>100원</b>에 받아가세요!</div>
                </a>
                <button type="button"></button>
            </div>
        </div>

        <Header/>

        <MainContent>
          <div>
            <MainBanner />
            <Contents />
          </div>
          <SideNav/>
        </MainContent>
        
        <Footer/>
    </>
  );
}

export default App;

const MainContent = styled.div`
  position: relative; 
  margin-bottom: 40px;
`;