const footerYear = new Date().getFullYear();

function Footer() {
  return (
    <div className="footer">
      <p> Copyright {footerYear} All right reserved</p>
    </div>
  );
}

export default Footer;
