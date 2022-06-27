import Link from "next/link";

import Styles from "components/molecules/introduction.module.scss";
import LabelWithTitle from "components/atoms/label_with_title";
import ReferenceImageLink from "components/atoms/reference_image_link";
import Business from "components/molecules/business";

export default function Introduction() {
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>自己紹介</h2>
      <div className={Styles.profile_container}>
        <img className={Styles.profile_image} src="takumi.jpeg" />
      </div>
      <span>
        <LabelWithTitle title="氏名" content="山本 卓実" />
        <LabelWithTitle title="生年月日" content="1992/06/20" />
        <LabelWithTitle title="得意業務" content="Androidアプリ開発" />
        <LabelWithTitle title="保有資格" content={`データベーススペシャリスト試験
応用情報技術者試験
日商簿記2級`} />
        <LabelWithTitle title="今後の展望" content={`自分の興味のあるドメインのサービスの開発に携わっていたい

仕事の質は人生の質に直結すると考えているので自分が興味のあるドメインのサービスの開発に携わっていたいです。

開発自体は好きなのでプライベートでもおこなっていますし、新しい技術への関心もあるので日々色々な技術に触れるようにしていますが、特定の言語やFWに固執しているわけではなくサービスを開発/リリースすることそのものに重きを置いて業務を行っています。`} />
        <div className={Styles.social}>
          <ReferenceImageLink url="https://github.com/takumi0620" image="github.svg" />
          <ReferenceImageLink url="https://qiita.com/takumi0620" image="qiita.png" />
          <ReferenceImageLink url="https://zenn.dev/takumi0620" image="zenn.svg" />
        </div>
      </span>
      <h3 className={Styles.title}>個人開発</h3>
      <div className={Styles.salt}>
        <Link href="https://salt-cooking.fun/">
          <a rel="noreferrer" target="_blank">
            <img className={Styles.salt_image} src="salt_top.png" />
          </a>
        </Link>
        <Business
          title="Salt"
          start="2021年12月"
          end="現在"
          architecture={{
            frameWork: "Next.js, Ruby on Rails",
            language: "html, css, javascript, ruby, SQL",
            db: "postgres",
            versionControll: "Github"
          }}
          description={`料理のレシピ記録webサービスです。
レシピの投稿や画像登録、devise token authを用いた認証機能、youtubeの動画情報のインポート機能やレシピ検索/いいね/お気に入り機能等を実装しました。

プラットフォームはNext.jsで実装したフロントエンド部分はvercelにデプロイし、railsで実装したバックエンドはawsのec2へデプロイしています。

docker composeでフロントエンド用、バックエンド用、DB用のコンテナを立てて開発しています。
使用している技術は全て独学でキャッチアップしました。`}
          referenceProperty={{
              url: "https://salt-cooking.fun/",
              label: "webサイト"
            }}
          />
      </div>
    </div>
  );
}