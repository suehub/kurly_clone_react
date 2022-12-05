import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';


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


        <Footer/>
    </>
  );
}

export default App;
