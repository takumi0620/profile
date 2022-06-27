import Styles from "components/molecules/businesses.module.scss";
import IconWithBusiness from "components/molecules/icon_with_business";

export default function Businesses() {
  return (
    <>
      <h2 className={Styles.title}>職務経歴</h2>
      <ul>
        <li>
          <IconWithBusiness
            icon="android.svg"
            title="武蔵小山商店街向けAndroidアプリ開発"
            start="2018年5月"
            end="現在"
            architecture={{
              frameWork: "-",
              language: "kotlin, SQL",
              db: "SQLite",
              versionControll: "Git, SourceTree, backlog"
            }}
            description={`商店街向けクーポン、ポイント管理アプリ新規開発のAndroid版の全てを担当しました。`}
            mainContents={`・GPSを使ったクーポンが取得できるクエストの実行
・QRコードを使ったレジでのポイント消費機能
・ログイン機能（Facebookログイン、Googleログイン、Twitterログイン、Eメールログイン）
・SMSを使った二要素認証機能
・クーポンの使用

などの機能を実装しました
`}
            referenceProperty={{
              url: "https://play.google.com/store/apps/details?id=com.palm.palmapp_androidos",
              label: "Google Play"
            }}
            />
        </li>

        <li>
          <IconWithBusiness
            icon="android.svg"
            title="ゴルフスコア管理Androidアプリの保守、機能追加"
            start="2018年4月"
            end="現在"
            architecture={{
              frameWork: "-",
              language: "java, kotlin, SQL",
              db: "SQLite",
              versionControll: "Git, SourceTree, backlog"
            }}
            description={`私がAndroidのメインプログラマになってからGoogle playでの平均評価を4.2から4.4へ上げることができました。`}
            mainContents={`以前はオフショアでアプリを開発していたようであり、開発会社と緊密なコミュニケーションが取れているとは言えない状況でコードの品質も良いとは言い難くバグも多くありましたが改善することができました。

・パッケージ構成の見直し。
activityパッケージの配下にfragmentパッケージがある等々無秩序な状態だったパッケージ構成を整理した。
お客様の社内で使用されている用語を参考に、プロダクトマネージャとのMTGで交わされる会話がそのままパッケージ、クラスに関連づけられるよう意識した。
・jetpackのViewModelを用いてアーキテクチャをMVVMにした
・javaオンリーで実装されていたものをkotlinへマイグレーションした
・ListViewやRelativeLayoutなどレガシーなViewをRecyclerViewやConstraintLayoutへ置き換えた
・全ての非同期処理がasync taskで行われていたが、kotlinのcoroutineやjetpackのlivedataを使って非同期処理を行なうようにした
・GPSを使ったコースマップ機能を開発した
・Appiumを用いた回帰テストができる環境作り

平均評価が上がった要因は様々な理由がありますが、ただタスクを消化するだけでなくプロダクトマネージャへ仕様の提案やアニメーションのクオリティが良い等、私が参画した影響も大きいと自負しています。

お客様、デザイン会社、我々開発チームの三者で機能を設計/実装していくことが多いのですが、デザイン会社が作成したモックアップをお客様と共にレビューし、開発者目線でさまざまな提案を行っています。

・Androidというプラットフォームにおけるデザインガイドラインに沿ったUIであるか
・サポート予定の画面サイズで破綻するデザインになっていないか
・他社のアプリ/サービスに触れている経験から、その機能に適したUIはどのようなものがあるか

現在リリースされている機能の中にも私の提案が採用されたUIがあります
`}
            referenceProperty={{
              url: "https://play.google.com/store/apps/details?id=jp.co.golfdigest.reserve.score&hl=ja&gl=US",
              label: "Google Play"
            }}
            />
        </li>

        <li>
          <IconWithBusiness
            icon="web.svg"
            title="ゴルフコンペ用webサービスの開発"
            start="2018年4月"
            end="現在"
            architecture={{
              frameWork: "Laravel",
              language: "HTML, css, JavaScript, PHP, SQL",
              db: "MySQL",
              versionControll: "Git, SourceTree, backlog"
            }}
            description={`web上でゴルフコンペを行うためのサービスを開発しました。`}
            mainContents={`お客様との要件定義や仕様の調整、設計、実装、テストを担当しました。
データストアから日次バッチでデータを取り込み、それを集計して自分のランキングやベストスコアを表示するサービスです。
`}
            referenceProperty={{
              url: "https://score.golfdigest.co.jp/onlinecompe",
              label: "Webサイト"
            }}
            />
        </li>

        <li>
          <IconWithBusiness
            icon="apple.svg"
            title="ゴルフスコア管理iOSアプリのマイグレーション"
            start="2018年4月"
            end="2019年8月"
            architecture={{
              frameWork: "Appium",
              language: "Objective-C, Swift, SQL, Ruby",
              db: "SQLite",
              versionControll: "Git, SourceTree, backlog"
            }}
            description={`Objective-Cで実装されていたiOS版アプリの全てのコードをSwiftで置き換えました。`}
            mainContents={`我々が参画した時点でテストコード等がない状態かつ設計書もなくお客様もアプリの仕様の全てを把握しているとは言えない状況でした。
そのような状況で本プロジェクトが開始されたので、デグレーションを起こしていないことを担保する方法を考える必要がありました。
そこでAppiumを使ったテスト用フレームワークを実装し、一つのクライアントコードでAndroid/iOS両方の動作確認ができるようにし、同じシナリオをAndroid/iOS両方で動作させて動作結果に差がないことを確認できるようにしました。
`}
            referenceProperty={{
              url: "https://apps.apple.com/jp/app/gdo%E3%82%B9%E3%82%B3%E3%82%A2-%E3%82%B4%E3%83%AB%E3%83%95%E3%81%AE%E3%82%B9%E3%82%B3%E3%82%A2%E7%AE%A1%E7%90%86-gps%E3%83%9E%E3%83%83%E3%83%97%E3%81%A7%E8%B7%9D%E9%9B%A2%E3%82%92%E8%A8%88%E6%B8%AC/id807341818",
              label: "App Store"
            }}
            />
        </li>

        <li>
          <IconWithBusiness
            icon="web.svg"
            title="研究者向け画像加工、閲覧を行うwebサービス開発"
            start="2017年10月"
            end="2018年3月"
            architecture={{
              frameWork: "jquery, Spring Framework",
              language: "HTML, css, Java, SQL, JavaScript, groovy script",
              db: "Oracle",
              versionControll: "Git"
            }}
            description={`基本設計、詳細設計、実装、単体テスト、機能テストまで行なっていました。`}
            mainContents={`SDカードに収められた研究用装置で撮影された画像を取り込み、web上で閲覧/拡大/縮小できる機能をjavascriptで実装しました。`}
            />
        </li>

        <li>
          <IconWithBusiness
            icon="web.svg"
            title="全日空向け旅行予約システムの大規模刷新プロジェクト"
            start="2016年4月"
            end="2017年9月"
            architecture={{
              frameWork: "バージョン1.0開発時に独自開発されたもの",
              language: "HTML, css, Java, SQL, JavaScript, groovy script",
              db: "SQLServer",
              versionControll: "Git"
            }}
            description={`基本設計、詳細設計、実装、単体テスト、機能テストまで行なっていました。`}
            mainContents={`自分に割り当てられたタスク以外でgroovy scriptを使った他システムとのI/Fテスト用ツールを作成しチーム内での単体テストにかかる工数を著しく削減することができました。`}
            />
        </li>

        <li>
          <IconWithBusiness
            icon="web.svg"
            title="えきねっと開発プロジェクト"
            start="2015年8月"
            end="2016年3月"
            architecture={{
              frameWork: ".net framework",
              language: "html, css, C#, ASP.net, SQL",
              db: "SQLServer",
              versionControll: "Team Foundation Server"
            }}
            description="新卒で入社後初めて配属されたプロジェクトで、先輩社員の指導のもと単体テストや業務効率改善のためのSeleniumを使った自動テストのツール作成を行なっていました"
            />
        </li>
      </ul>
      </>
  );
}