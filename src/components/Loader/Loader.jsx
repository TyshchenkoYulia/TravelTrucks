import { Watch } from "react-loader-spinner";

export default function Loader() {
  return (
    <>
      <Watch
        visible={true}
        height="80"
        width="80"
        radius="48"
        color="#e44848"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </>
  );
}
