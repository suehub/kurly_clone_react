import './App.css';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import SideNav from './components/SideNav';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import NewProduct from './pages/NewProduct';
import BestProduct from './pages/BestProduct';
import TimeSales from './pages/TimeSales';
import Benefit from './pages/Benefit';
import ScrollToTop from './components/ScrollToTop';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import TopBanner from './components/TopBanner';
import Cart from './pages/Cart';

function App() {

  return (
    <>
        <BrowserRouter>
          <ScrollToTop/>
            <TopBanner/>
            <Header/>
                <Routes>
                  <Route path='/' element={ // 메인 페이지
                    <MainContent>
                        <Main />
                        <SideNav />
                    </MainContent> 
                  }/>
                  <Route path='/signup' element={<SignUp/>}></Route>
                  <Route path='/login' element={<LogIn/>}></Route>
                  <Route path='/cart' element={<Cart/>}></Route>
                  <Route path='/product/:id' element={  // 상품 상세 페이지
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
  width: 100%;
  @media screen and (max-width: 820px){  /* Pad */
    max-width: 820px;
  }
`;

