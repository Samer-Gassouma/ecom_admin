import ProductGroupForm from "@/components/ProductGroupForm";
import Layout from "@/components/Layout";

export default function NewProduct() {
  return (
    <Layout>
      <h1>New Product Group</h1>
      <ProductGroupForm />
    </Layout>
  );
}