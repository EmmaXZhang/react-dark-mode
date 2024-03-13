import Nav from "./Nav";

const Header = ({ buttonText, handleModeChange }) => {
  return (
    <header>
      <Nav buttonText={buttonText} handleModeChange={handleModeChange} />
    </header>
  );
};

export default Header;
