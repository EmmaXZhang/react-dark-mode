import Nav from "./Nav";

const Header = ({ theme, handleModeChange }) => {
  return (
    <header>
      <Nav theme={theme} handleModeChange={handleModeChange} />
    </header>
  );
};

export default Header;
