export const Navbar = () => {
  const authName = "";
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className="navbar-brand">
        <i className="fas fa-calendar-alt"></i>
        &nbsp; {authName === "" ? "Calendar" : authName}
      </span>
      <button className="btn btn-outline-danger">
        <i className="fas fa-sing-out-alt"></i>
        <span>Salir</span>
      </button>
    </div>
  );
};
