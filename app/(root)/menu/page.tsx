import ProductList from '@/components/product/product-list';

import sampleData from '@/db/sample-data';

const MenuPage = () => {
  return (
    <>
      <ProductList data={sampleData.products} />
    </>
  );
};

export default MenuPage;
