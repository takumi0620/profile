import Business from "components/molecules/business";

export default function Home() {
  return (
    <div>
      <Business
        title="えきねっと開発プロジェクト"
        start="2015年8月"
        end="2016年3月"
        architecture={{
          frameWork: ".net framework",
          language: "C#, ASP.net, SQL",
          db: "SQLServer",
          versionControll: "Team Foundation Server"
        }}
        description="新卒で入社後初めて配属されたプロジェクトで、先輩社員の指導のもと単体テストや業務効率改善のためのSeleniumを使った自動テストのツール作成を行なっていました"
        />

      <Business
        title="全日空向け旅行予約システムの大規模刷新プロジェクト"
        start="2016年4月"
        end="2017年9月"
        architecture={{
          frameWork: "バージョン1.0開発時に独自開発されたもの",
          language: "HTML, Java, SQL, JavaScript, groovy script",
          db: "SQLServer",
          versionControll: "Git"
        }}
        description={
`基本設計、詳細設計、実装、単体テスト、機能テストまで行なっていました。
自分に割り当てられたタスク以外でgroovy scriptを使った他システムとのI/Fテスト用ツールを作成しチーム内での単体テストにかかる工数を著しく削減することができました。
`}
        />

      <Business
        title="研究者向け画像加工、閲覧を行うwebサービス開発"
        start="2017年10月"
        end="2018年3月"
        architecture={{
          frameWork: "Spring Framework",
          language: "HTML, Java, SQL, JavaScript, groovy script",
          db: "Oracle",
          versionControll: "Git"
        }}
        description="基本設計、詳細設計、実装、単体テスト、機能テストまで行なっていました。"
        />

      <Business
        title="ゴルフスコア管理iOSアプリのマイグレーション"
        start="2018年4月"
        end="2019年8月"
        architecture={{
          frameWork: "-",
          language: "Objective-C, Swift, SQL, Ruby",
          db: "SQLite",
          versionControll: "Git, SourceTree, backlog"
        }}
        description={`Objective-Cで実装されていたiOS版アプリの全てのコードをSwiftで置き換えました。
我々が参画した時点でテストコード等がない状態かつ設計書もなくお客様もアプリの仕様の全てを把握しているとは言えない状況でした。
そのような状況で本プロジェクトが開始されたので、デグレーションを起こしていないことを担保する方法を考える必要がありました。
そこでAppiumを使ったテスト用フレームワークを実装し、一つのクライアントコードでAndroid/iOS両方の動作確認ができるようにし、同じシナリオをAndroid/iOS両方で動作させて動作結果に差がないことを確認できるようにしました。
`}
        referenceProperty={{
          url: "https://apps.apple.com/jp/app/gdo%E3%82%B9%E3%82%B3%E3%82%A2-%E3%82%B4%E3%83%AB%E3%83%95%E3%81%AE%E3%82%B9%E3%82%B3%E3%82%A2%E7%AE%A1%E7%90%86-gps%E3%83%9E%E3%83%83%E3%83%97%E3%81%A7%E8%B7%9D%E9%9B%A2%E3%82%92%E8%A8%88%E6%B8%AC/id807341818",
          label: "App Store"
        }}
        />

      <Business
        title="ゴルフコンペ用webサービスの開発"
        start="2018年4月"
        end="現在"
        architecture={{
          frameWork: "Laravel",
          language: "HTML, CSS, JavaScript, PHP, SQL",
          db: "MySQL",
          versionControll: "Git, SourceTree, backlog"
        }}
        description="web上でゴルフコンペを行うためのサービスを開発しました。お客様との要件定義や仕様の調整、設計、実装、テストを担当しました。"
        referenceProperty={{
          url: "https://score.golfdigest.co.jp/onlinecompe",
          label: "Webサイト"
        }}
        />

      <Business
        title="ゴルフスコア管理Androidアプリの保守、機能追加"
        start="2018年4月"
        end="現在"
        architecture={{
          frameWork: "-",
          language: "java, kotlin, SQL",
          db: "SQLite",
          versionControll: "Git, SourceTree, backlog"
        }}
        description=""
        referenceProperty={{
          url: "https://play.google.com/store/apps/details?id=jp.co.golfdigest.reserve.score",
          label: "Google Play"
        }}
        />

      <Business
        title="武蔵小山商店街向けAndroidアプリ開発"
        start="2018年5月"
        end="現在"
        architecture={{
          frameWork: "-",
          language: "kotlin, SQL",
          db: "SQLite",
          versionControll: "Git, SourceTree, backlog"
        }}
        description="Objective-Cで実装されていたiOS版アプリの全てのコードをSwiftで置き換えました。"
        referenceProperty={{
          url: "https://play.google.com/store/apps/details?id=jp.co.golfdigest.reserve.score",
          label: "Google Play"
        }}
        />
    </div>
  )
}
