
import OutlookConnect from "./OutLook";

const Header = () => {
  return (
    <header className="flex justify-between bg-blue-700 text-white p-4 position-sticky top-0">
      <h1 className="text-3xl font-bold">My Website</h1>
      <nav className="mt-2">
        <ul className="flex space-x-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <OutlookConnect />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
