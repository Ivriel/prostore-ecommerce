import { getLatestProducts } from "@/lib/actions/product.actions";
import ProductList from "@/components/shared/product/product-list";
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve,ms) )

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  // await delay(2000);
  return (
    <>
      <ProductList
        data={latestProducts}
        title="Newest Arrival"
      />
    </>
  );
};

export default Homepage;
