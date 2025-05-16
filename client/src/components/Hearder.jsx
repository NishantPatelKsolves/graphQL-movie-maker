import { HashLink } from "react-router-hash-link";

const Hearder = () => {
  return (
    <div className="topnav" id="header">
      <HashLink smooth to="/#">
        Movie Maker
      </HashLink>
      <HashLink smooth to="#addNewMovie" className="add-button">
        Add Movie
      </HashLink>
    </div>
  );
};

export default Hearder;
