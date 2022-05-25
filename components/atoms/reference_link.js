import Link from "next/link";

import Styles from "components/atoms/reference_link.module.scss";

export default function ReferenceLink({url, label}) {
  return (
    <Link href={url}>
      <a className={Styles.link} rel="noreferrer" target="_blank">
        {label}
      </a>
    </Link>
  );
}