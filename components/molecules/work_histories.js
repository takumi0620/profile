import Styles from "components/molecules/work_histories.module.scss";
import WorkHistory from "components/atoms/work_history";

export default function WorkHistories() {
  return (
    <>
      <h2 className={Styles.title}>職歴</h2>
      <ul>
        <li>
          <WorkHistory date="2015年4月" company={{name: "株式会社CIJネクスト", url: "http://www.cij-next.co.jp/"}} inOut={true} />
        </li>
        <li>
          <WorkHistory date="2018年3月" company={{name: "株式会社CIJネクスト", url: "http://www.cij-next.co.jp/"}} inOut={false} />
        </li>
        <li>
          <WorkHistory date="2018年4月" company={{name: "有限会社OpenWorks", url: "https://www.ow-japan.com/"}} inOut={true} />
        </li>
      </ul>
    </>
  );
}