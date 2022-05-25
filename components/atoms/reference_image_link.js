import Link from "next/link";

import Styles from "components/atoms/reference_image_link.module.scss";

export default function ReferenceImageLink({url, image}) {
  return (
    <Link href={url}>
      <a className={Styles.link} rel="noreferrer" target="_blank">
        <img className={Styles.image} src={image} />
      </a>
    </Link>
  );
}