import Styles from "pages/index.module.scss";
import Introduction from "components/molecules/introduction";
import WorkHistories from "components/molecules/work_histories";
import Businesses from "components/molecules/businesses";

export default function Home() {
  return (
    <>
      <div className={Styles.container}>
        <Introduction />
      </div>
      <div className={Styles.container}>
        <WorkHistories />
        <Businesses />
      </div>
    </>
  )
}
