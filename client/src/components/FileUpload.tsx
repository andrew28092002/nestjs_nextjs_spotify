import React, { FC, useRef } from "react";

type Props = {
  accept: string;
  setFile: Function;
  children: JSX.Element | JSX.Element[]
};

const FileUpload: FC<Props> = ({ accept, setFile,children }) => {
  const ref = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files![0]);
  };

  return (
    <div onClick={() => ref!.current!.click()}>
      <input
        type="file"
        accept={accept}
        style={{ display: "none" }}
        ref={ref}
        onChange={onChange}
      />
      {children}
    </div>
  );
};

export default FileUpload;
