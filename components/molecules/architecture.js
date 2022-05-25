import LabelWithTitle from "components/atoms/label_with_title";

export default function Architecture({frameWork, language, versionControll}) {
  return (
    <div>
      <div>
        <LabelWithTitle title="FW" content={frameWork} />
        <LabelWithTitle title="使用言語" content={language} />
        <LabelWithTitle title="バージョン管理ツール" content={versionControll} />
      </div>
    </div>
  );
}