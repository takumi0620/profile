import LabelWithTitle from "components/atoms/label_with_title";
import BusinessContents from "components/molecules/business_contents";
import Architecture from "components/molecules/architecture";
import ReferenceLink from "components/atoms/reference_link";

import Styles from "components/molecules/business.module.scss";

export default function Business({
  title,
  start,
  end,
  architecture,
  description,
  mainContents,
  referenceProperty = null
}) {
  return (
    <div className={Styles.container}>
      <span className={Styles.title}>{title}</span>
      <div className={Styles.contents}>
        <LabelWithTitle title="期間" content={`${start} - ${end}`}/>
        <BusinessContents title="業務内容" description={description} mainContents={mainContents} />
        <Architecture frameWork={architecture.frameWork} language={architecture.language} versionControll={architecture.versionControll} />
      </div>
      {referenceProperty && <ReferenceLink url={referenceProperty.url} label={referenceProperty.label} />}
    </div>
  );
}