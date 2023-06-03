import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [orderCount, setOrderCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [groupProd, setGroupProd] = useState(0);

  useEffect(() => {
    if (loading) {
      return (
        <div className="bg-black min-h-screen flex items-center justify-center">
          <Loading />
        </div>
      );
    }
  }, [loading]);

  const { data: session } = useSession();
  useEffect(() => {
    
    const fetchCounts = async () => {
      const orderCountResponse = await fetch("/api/count/orders");
      const productCountResponse = await fetch("/api/count/products");
      const categoryCountResponse = await fetch("/api/count/categories");
      const userCountResponse = await fetch("/api/count/users");
      const groupProdResponse = await fetch("/api/count/Group_products");

      const orderCountData = await orderCountResponse.json();
      const productCountData = await productCountResponse.json();
      const categoryCountData = await categoryCountResponse.json();
      const userCountData = await userCountResponse.json();
      const groupProdData = await groupProdResponse.json();
      setOrderCount(orderCountData.count);
      setProductCount(productCountData.count);
      setCategoryCount(categoryCountData.count);
      setUserCount(userCountData.count);
      setGroupProd(groupProdData.count);
    };

      fetchCounts();
   
  }, []);

  if(session == 'undefined') return (
    <Layout>
      <div className="bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-gray-200 text-2xl font-semibold">
          Hello, <span className="text-white">Guest</span>
        </h2>
        <p className="text-gray-300 mt-2">
          You need to sign in to access this page.
        </p>
      </div>
    </Layout>
  )

  return (
    <Layout>
      <div className="bg-gray-800 rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-gray-200 text-2xl font-semibold">
            Hello, <span className="text-white">{session?.user?.name}</span>
          </h2>
          
          <div className="flex items-center bg-gray-600 rounded-lg overflow-hidden">
            <img
              src={session?.user?.image}
              alt="User Avatar"
              className="w-8 h-8 object-cover"
            />
            <span className="px-2 text-white">{session?.user?.name}</span>
          </div>
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg flex flex-col items-center justify-center">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Orders</h3>
              <p className="text-gray-300 text-center">
                Total: <span className="text-blue-400">{orderCount}</span>{" "}
                {orderCount === 1 ? "order" : "orders"}
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg flex flex-col items-center justify-center">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Products</h3>
              <p className="text-gray-300 text-center">
                Total: <span className="text-blue-400">{productCount}</span>{" "}
                {productCount === 1 ? "product" : "products"}
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg flex flex-col items-center justify-center">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Categories</h3>
              <p className="text-gray-300 text-center">
                Total: <span className="text-blue-400">{categoryCount}</span>{" "}
                {categoryCount === 1 ? "category" : "categories"}
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg flex flex-col items-center justify-center">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Users</h3>
              <p className="text-gray-300 text-center">
                Total: <span className="text-blue-400">{userCount}</span>{" "}
                {userCount === 1 ? "user" : "users"}
              </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg flex flex-col items-center justify-center">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Group Products</h3>
              <p className="text-gray-300 text-center">
                Total: <span className="text-blue-400">{groupProd}</span>{" "}
                {groupProd === 1 ? "Group Product" : "Group Products"}
              </p>
              </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
