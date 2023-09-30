import "./styles.css";

function Email(props: { emailAddress: string }) {
  return <p id="email">{props.emailAddress}</p>;
}

export default Email;
