import datas from '../../data/data';
import Card from '../cards/Card';
import './gallery.scss';

const Gallery = () => {
  return (
    <main className="home_gallery">
      {datas.map((data) => {
        return (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            cover={data.cover}
          />
        );
      })}
    </main>
  );
};

export default Gallery;
