import { MainLayout } from "@/layout/MainLayout";
import { wrapper } from "@/store/store";

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
