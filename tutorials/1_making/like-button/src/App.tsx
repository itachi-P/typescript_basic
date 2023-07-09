import React from 'react';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<LikeButton />
			</header>
		</div>
	);
}

// ReactのJSX, TSXでは、関数名は大文字で始める
// 自分で定義した関数もタグとして使える(ただし、戻り値にJSXを返す必要がある)
function LikeButton() {
	const count = 999;
	return <span className='likeButton'>♥ {count}</span>;
}

export default App;
