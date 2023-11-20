import "./styles.css";

function Email(props: { emailAddress: string }) {
  return (
    <a id="email" href={`mailto:${props.emailAddress}`}>
      {props.emailAddress}
    </a>
  );
}

export default Email;
