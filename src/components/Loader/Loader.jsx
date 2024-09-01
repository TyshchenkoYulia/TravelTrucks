import { Audio } from "react-loader-spinner";

export default function Loader() {
  return (
    <>
      <Audio
        height="100"
        width="100"
        color="#e44848"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
      />
    </>
  );
}
