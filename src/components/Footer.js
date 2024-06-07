const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="footer p-7 text-neutral-content flex justify-center items-center">
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © {currentYear} Obinna Okwuolisa. All Rights Reserved.
        </span>
      </footer>
    );
  };
  
  export default Footer;
  