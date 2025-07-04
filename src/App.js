import './App.css';
import { Routes, Route } from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/privateRoute';


// 1. 전체 상품 , 로그인, 상품상세 -> Navigation bar
// 2. 전체상품페이지 -> 전체 상품목록 조회
// 3. 로그인 버튼 클릭 시 로그인 페이지로 이동
// 4. 유효성 검사 ( 로그인이 되어 있을 때와 되어 있지 않을 때 구분 )
// 5. 상품 검색

function App() {

  const [authenticate, setAuthenticate] = useState(false)
  useEffect(()=>{
    console.log(authenticate);
  },[authenticate]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>}/>
      </Routes>

    </div>
  );
}

export default App;
