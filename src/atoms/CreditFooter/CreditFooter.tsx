import "./styles.css";

function CreditFooter(props: { name: string }) {
  return (
    <footer id="credit-footer">
      <p className="credit-footer-text">© 2023</p>
      <img className="favicon" src="./src/assets/img/girl.png" />
      <p className="credit-footer-text">{props.name}</p>
    </footer>
  );
}

export default CreditFooter;
