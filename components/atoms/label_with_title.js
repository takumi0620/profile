import Styles from "components/atoms/label_with_title.module.scss";

export default function LabelWithTitle({title, content}) {
  return(
    <div>
      <span className={Styles.title}>{title}</span><span className={Styles.content}>{content}</span>
    </div>
  );
}