function NavBar({ children }) {
  return (
    <div className="shadow bg-white">
      <div className="h-16 mx-auto px-5 flex items-center justify-between">
        <a className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">
          Logo
        </a>
        {children}
      </div>
    </div>
  );
}

export default NavBar;
