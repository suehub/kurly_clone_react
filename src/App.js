import './App.css';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Contents from './components/Contents';
import SideNav from './components/SideNav';
import MainBanner from './components/MainBanner';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import NewProduct from './pages/NewProduct';
import BestProduct from './pages/BestProduct';
import TimeSales from './pages/TimeSales';
import Benefit from './pages/Benefit';
import ScrollToTop from './components/ScrollToTop';
import SignUp from './pages/SignUp';

function App() {

  return (
    <>
        <BrowserRouter>
          <ScrollToTop/>
            <div className='TopBanner'>
                <div>
                    <a href="">
                        <div>지금 가입하고 인기상품 <b>100원</b>에 받아가세요!</div>
                    </a>
                    <button type="button"></button>
                </div>
            </div>
            <Header/>
                <Routes>
                  <Route path='/' element={ // 메인 페이지
                    <MainContent>
                        <div>
                            <MainBanner />
                            <Contents />
                        </div>
                        <SideNav />
                    </MainContent> 
                  }/>
                  <Route path='/signup' element={<SignUp/>}></Route>
                  <Route path='/product' element={  // 상품 상세 페이지
                    <MainContent>
                        <SideNav/>
                        <Product />
                    </MainContent> 
                  }></Route>

                  <Route path='/newproduct' element={ // nav 이동
                    <MainContent>                    
                      <NewProduct />
                      <SideNav/>
                    </MainContent>
                  }></Route>
                  <Route path='/bestproduct' element={
                    <MainContent>                    
                      <BestProduct />
                      <SideNav/>
                    </MainContent>
                  }></Route>
                  <Route path='/timeSales' element={
                    <MainContent>                    
                      <TimeSales />
                      <SideNav/>
                    </MainContent>
                  }></Route>
                  <Route path='/benefit' element={
                    <MainContent>                    
                      <Benefit />
                      <SideNav/>
                    </MainContent>
                  }></Route>

                  <Route path='*' element={<NotFound />}></Route>
                </Routes>
              <Footer/>
        </BrowserRouter>
        
    </>
  );
}

export default App;

const MainContent = styled.div`
  position: relative; 
  margin: 0 auto 40px auto;
`;

