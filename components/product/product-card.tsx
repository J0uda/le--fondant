import Link from 'next/link';
import Image from 'next/image';

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div>
      <Link href={`/menu/${product.slug}`}>{product.name}</Link>
      <Image
        src={product.banner}
        height={50}
        width={50}
        priority
        alt={product.name}
      />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductCard;
