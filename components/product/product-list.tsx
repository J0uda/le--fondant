import ProductCard from './product-card';

const ProductList = ({ data }: { data: any }) => {
  return (
    <div>
      {data.length > 0 ? (
        <div>
          {data.map((product: any) => (
            <ProductCard product={product} key={product.slug} />
          ))}
        </div>
      ) : (
        <div>
          <p>Product not found</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
