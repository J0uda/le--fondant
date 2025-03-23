'use client';
import { useEffect, useState } from 'react';
import sampleData from '@/db/sample-data';
import Image from 'next/image';
import React from 'react';
import LoadingPage from '@/app/loading';

interface Product {
  name: string;
  description: string;
  slug: string;
  price: number;
  banner: string;
}

export default function ProductDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const { slug } = React.use(params);

  useEffect(() => {
    if (slug) {
      const foundProduct = sampleData.products.find(
        (product) => product.slug === slug
      );
      setProduct(foundProduct || null);
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return <LoadingPage />;
  }

  if (!product) {
    return <h1>Produit non trouvé</h1>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <Image
        src={product.banner}
        priority
        alt={product.name}
        width={300}
        height={300}
      />
      <p>{product.description}</p>
      <p>Prix: {product.price}€</p>
    </div>
  );
}
