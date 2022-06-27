import Styles from "components/molecules/business_contents.module.scss";
import LabelWithTitle from "components/atoms/label_with_title";

export default function BusinessContents({title, description, mainContents}) {
  return (
    <div>
      <LabelWithTitle title={title} content={description}/>
      <div className={Styles.main_contents}>
        {mainContents}
      </div>
    </div>
  );
}