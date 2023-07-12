import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";

//[https://typescriptbook.jp/tutorials/nextjs]

/* クライアントサイドで最初の画像を取得し表示していたのを、
データフェッチAPIのgetServerSidePropsを使って、
サーバーサイドで初期画像を取得するように変更 */

// getServerSidePropsから渡されるpropsの型定義
type Props = {
	initialImageUrl: string; //初期画像のURL
};

// ページコンポーネント関数にpropsを受け取る引数を追加
const IndexPage: NextPage<Props> = ({ initialImageUrl }) => {
	const [imageUrl, setImageUrl] = useState(initialImageUrl);//初期値を渡す
	const [loading, setLoading] = useState(false);//初期状態はfalseにしておく

	//ボタンをクリックした時に新しい画像を読み込む処理
	const handleClick = async () => {
		setLoading(true);
		const newImage = await fetchImage();
		setImageUrl(newImage.url);
		setLoading(false);
	};
	return (
		<div>
			<button onClick={handleClick}>他のにゃんこも見る</button>
			<div>{loading || <img src={imageUrl} />}</div>
		</div>
	);
};
export default IndexPage;

// サーバーサイドで実行する処理
export const getServerSideProps: GetServerSideProps<Props> = async () => {
	const image = await fetchImage();
	return {
		props: {
			initialImageUrl: image.url,
		},
	};
};

type Image = {
	url: string;
};

//The Cat APIにリクエストし、猫画像を取得する関数
const fetchImage = async (): Promise<Image> => {
	const res = await fetch("https://api.thecatapi.com/v1/images/search");
	const images = await res.json();
	console.log(images);
	return images[0];
};
