import blobsTop from "../images/blobs-top.svg";
import blobsBottom from "../images/blobs-bottom.svg";
import "../styles/Background.css";
export default function Background() {
  return (
    <div className="background">
      <img className="blobs-top" src={blobsTop} />
      <img className="blobs-bottom" src={blobsBottom} />
    </div>
  );
}
