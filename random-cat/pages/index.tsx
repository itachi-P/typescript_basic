import { NextPage } from "next";
import { useEffect, useState } from "react";

//[https://typescriptbook.jp/tutorials/nextjs]

const IndexPage: NextPage = () => {
	//猫画像のURLを保持するためにuseStateを使う。初期値は空文字列
	const [imageUrl, setImageUrl] = useState("");
	//API呼び出し中かどうかを管理する変数を宣言。初期値は呼び出し中を意味するtrue
	const [loading, setLoading] = useState(true);

	//コンポーネントがマウントされた時にAPIから画像情報を取得する
	//ReactのuseEffect関数:第1引数は処理内容、第2引数はどのタイミングで処理を実行するかを指定
	useEffect(() => { //useEffectには直接非同期関数を指定できないので、async/awaitは使えない
		//　fetchImageは非同期関数なので、thenメソッドで処理を繋げる
		fetchImage().then((newImage) => {
			setImageUrl(newImage.url);//画像URLの状態を更新
			setLoading(false);//ローディング状態を更新
		});
	}, []);//第2引数に空配列を指定することで、コンポーネントがマウントされた時のみ実行される

	//API読み込み中でなければ(loading == false)、画像を表示する
	//JSXの{}内には、JavaScriptの式は記述できるが、if等の文は記述できない
	return <div>{loading || <img src={imageUrl} />}</div>;
};
export default IndexPage;

//下のfetchImage関数の戻り値の型を定義(any型でなく限定する)
type Image = {
	//APIレスポンスには他の情報も含まれるが、今回必要なのはURLだけなので他は省略
	url: string;
};

//The Cat APIにリクエストし、猫画像を取得する関数
//fetch及びres.json()は非同期処理なので待機の為にasync/awaitを使う
/*クライアントサイドが期待するデータ構造をサーバーサイドが必ず返すことを前提とした書き方
本来であれば、より防衛的にサーバーから返ってくるデータ構造をチェックする必要がある
厳密にレスポンスをチェックする場合は、unknown型や型ガード関数を使う*/
const fetchImage = async (): Promise<Image> => {
	//fetchはHTTPリクエストでリソース(Responseオブジェクト)を取得するブラウザ標準のAPI
	const res = await fetch("https://api.thecatapi.com/v1/images/search");
	const images = await res.json();
	console.log(images);
	return images[0];
};

//テスト用コード
// fetchImage().then((image) => {
// 	console.log(image.url);
// 	//console.log(image.alt);//型Imageにaltを定義していないのでエラーになる
// });
