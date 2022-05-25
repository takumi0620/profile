import LabelWithTitle from "components/atoms/label_with_title";

export default function Architecture({frameWork, language, versionControll}) {
  return (
    <div>
      <div>
        <LabelWithTitle title="FW / ライブラリ" content={frameWork} />
        <LabelWithTitle title="言語" content={language} />
        <LabelWithTitle title="バージョン管理ツール" content={versionControll} />
      </div>
    </div>
  );
}