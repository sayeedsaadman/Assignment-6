const NavBar = () => {
  return (
    <div className="navbar px-4 lg:px-10">

      <div className="navbar-start">
        <p className="font-bold text-2xl lg:text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mx-auto">
          DIGITOOLS
        </p>
      </div>

      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost text-2xl">☰</label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-56 gap-3"
          >
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
            <li className="pt-2 border-t">
              <a className="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-8 text-lg font-medium">
          <li><a>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>

      <div className="navbar-end hidden lg:flex items-center gap-6">

        <button className="text-xl">
          <i className="fa-solid fa-cart-shopping"></i>
        </button>

        <button className="font-medium">
          Login
        </button>

        <a className="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6">
          Get in Touch
        </a>

      </div>

    </div>
  );
};

export default NavBar;