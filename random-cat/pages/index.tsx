import { NextPage } from "next";

const IndexPage: NextPage = () => {
	return <div>猫画像予定地</div>;
};
export default IndexPage;

//The Cat APIにリクエストし、猫画像を取得する関数
//fetch及びres.json()は非同期処理なので待機の為にasync/awaitを使う
const fetchImage = async () => {
	//fetchはHTTPリクエストでリソース(Responseオブジェクト)を取得するブラウザ標準のAPI
	const res = await fetch("https://api.thecatapi.com/v1/images/search");
	const images = await res.json();
	console.log(images);
	return images[0];
};

//fetchImage(); //関数呼び出しテスト用