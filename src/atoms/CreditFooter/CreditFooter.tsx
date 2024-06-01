import "./styles.css";

function CreditFooter(props: { name: string }) {
  return (
    <footer>
      <p id="credit-footer">© 2024 {props.name}</p>
      {/* <p id="footer-icon">✨</p> */}
    </footer>
  );
}

export default CreditFooter;
