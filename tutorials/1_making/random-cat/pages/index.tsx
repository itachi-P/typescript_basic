import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import styles from "./index.module.css"; //CSS Modulesの読み込み

//[https://typescriptbook.jp/tutorials/nextjs]

type Props = {
	initialImageUrl: string;
};

const IndexPage: NextPage<Props> = ({ initialImageUrl }) => {
	const [imageUrl, setImageUrl] = useState(initialImageUrl);
	const [loading, setLoading] = useState(false);

	const handleClick = async () => {
		setLoading(true);
		const newImage = await fetchImage();
		setImageUrl(newImage.url);
		setLoading(false);
	};
	return (
		//CSSを適用するために、classNameで指定する
		<div className={styles.page}>
			<button onClick={handleClick} className={styles.button}>
				他のにゃんこも見る
			</button>
			<div className={styles.frame}>
				{loading || <img src={imageUrl} className={styles.image} />}
			</div>
		</div >
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