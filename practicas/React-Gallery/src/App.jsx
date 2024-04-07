import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function App() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1011/1000/600/",
      thumbnail: "https://picsum.photos/id/1011/250/150/",
    },
    {
      original: "https://picsum.photos/id/1010/1000/600/",
      thumbnail: "https://picsum.photos/id/1010/250/150/",
    },
    {
      original: "https://picsum.photos/id/1039/1000/600/",
      thumbnail: "https://picsum.photos/id/1039/250/150/",
    },
  ];
  return (
    <ImageGallery
      //Le pasas las imagenes y las propiedades que quieras agregar o desctivar
      items={images}
      showPlayButton={false}
      showFullscreenButton={false}
      thumbnailPosition="top"
    />
  );
}

export default App;
