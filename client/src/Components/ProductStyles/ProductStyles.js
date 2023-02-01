import './ProductStyles.css';
import ProductCirclePhoto from './ProductCirclePhoto/ProductCirlcePhoto';

function ProductStyles({ productStyles, setSelectedStyle }) {

  const createProductCirclePhotos = () => {
    const productCirclePhotoJsx = [];
    // product styles: [{photos: [thumbail_url: link, thumbnail_url: link]}, {photos: []}, {photos: []}, {photos: []}]

    for (let style of productStyles) {
      productCirclePhotoJsx.push(
        <ProductCirclePhoto photo={style.photos[0].thumbnail_url} setSelectedStyle={setSelectedStyle} id={style.style_id} />
      );
    }

    return productCirclePhotoJsx;
  };

  return (
    <div className="productStyles">
      <h3>
        Style &gt; Selected Style
      </h3>
      <div className="productCirclePhotos">
        {createProductCirclePhotos()}
      </div>
    </div>
  );
}

export default ProductStyles;