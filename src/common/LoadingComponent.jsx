import { ClipLoader } from "react-spinners";

export const LoadingComponent = ({ loading }) => {
  return (
    <div style={{ marginTop: "18%" }}>
      {loading && <ClipLoader color="#36d7b7" size={50} />}
    </div>
  );
};
