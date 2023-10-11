import PostList from './components/PostList';

function App() {
  return(
  <main> 
    <PostList/>
  </main>
  );

}

//반환되는 요소가 하나여야함
//jsx에는 촤상위 컴포넌트가 하나만 있어야 함
//=>여기선 main
/*최상위 컴포넌트를 고르기 어려울 경우에는 
 시작과 종료 테그를 빈 채로 추가해줘도됨
 내용 없이 테그만 있을경우
          1)self-closing <~~~/>
          2)<post></post>
 */
export default App;
