import { MainLayout } from "@/layout/MainLayout";

const index = () => {
  return (
    <>
      <MainLayout>
        <div className="center">
          <h1>Добро пожаловать!</h1>
          <h3>Здесь собраны лучшие треки!</h3>
        </div>
      </MainLayout>

      <style>
        {`
          html{
            height: 100%;
          }
          body{
            height: 100%
          }
          *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          #__next{
            height: 100%;
          }
          .center{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  );
};

export default index;
