import Styles from "components/molecules/icon_with_business.module.scss";
import Business from "components/molecules/business";

export default function IconWithBusiness({
  icon,
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
      <div className={Styles.image_container}>
        <img className={Styles.image} src={icon} />
      </div>
      <Business title={title} start={start} end={end} architecture={architecture} description={description} mainContents={mainContents} referenceProperty={referenceProperty} />
    </div>
  );
}