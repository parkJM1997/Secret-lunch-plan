import React, {useState} from 'react';

function App() {
  const [cookie, setCookie] = useState('');
  

  function DrawStart(e) {
    if (e.currentTarget.id == "1Draw") {
      setCookie(Math.floor (Math.random() * 10) + 1);
    } else if (e.currentTarget.id == "10Draw") {
      setCookie(cookie + " " + Math.floor (Math.random() * 10 + 1));
    }
  }

  return (
    <div className="App">
      쿠키뽑기 test 
      <>
      <button id="1Draw" onClick={DrawStart}> 뽑기 </button> <button id="10Draw" onClick={DrawStart}> 10회뽑기 </button>
      </>
      <div>
        {cookie}
      </div>
    </div>
  );
}

export default App;