import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/product-list";
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve,ms) )

const Homepage = async () => {
  // await delay(2000);
  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Newest Arrival"
        limit={4}
      />
    </>
  );
};

export default Homepage;
