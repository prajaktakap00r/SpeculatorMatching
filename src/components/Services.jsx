import { Fragment } from "react";

export default function Services({ image, title, description }) {
  return (
    <section className="service">
      <img src={image} className="profileImg" />
      <h5>{title}</h5>
      <p>{description}</p>
    </section>
  );
}
