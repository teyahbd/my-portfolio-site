import "./styles.css";

function CreditFooter(props: { name: string }) {
  return (
    <footer>
      <p id="credit-footer">Built with love by {props.name}</p>
      {/* <p id="footer-icon">✨</p> */}
    </footer>
  );
}

export default CreditFooter;
