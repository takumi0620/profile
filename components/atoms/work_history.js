import Link from "next/link";
import Styles from "components/atoms/work_history.module.scss";

export default function WorkHistory({date, company, inOut}) {
  return (
    <div className={Styles.container}>
      <span>{date}</span>
      &nbsp;
      <Link href={company.url}>
        <a className={Styles.link} rel="noreferrer" target="_blank">{company.name}</a>
      </Link>
      &nbsp;
      <span>{inOut ? "入社" : "退社"}</span>
    </div>
  );
}