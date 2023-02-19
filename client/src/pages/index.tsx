import { Button } from "@mui/material";
import NavBar from "./../components/Navbar";

const index = () => {
  return (
    <>
      <NavBar />
      <div className="center">
        <h1>Добро Пожаловать!</h1>
        <h3>Здесь собраны лучшие треки!</h3>
      </div>

      <style jsx>
        {`
          .center {
            margin-top: 150px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
        `}
      </style>
    </>
  );
};

export default index;
