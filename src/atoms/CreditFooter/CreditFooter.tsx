import "./styles.css";

function CreditFooter(props: { name: string }) {
  return (
    <footer>
      <p id="credit-footer">© 2023 {props.name}</p>
      {/* <p id="footer-icon">✨</p> */}
    </footer>
  );
}

export default CreditFooter;
