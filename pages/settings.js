import Head from 'next/head';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>IKEA | Home</title>
      </Head>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-8">Welcome to IKEA</h1>
          <p className="text-xl mb-8">Discover our wide range of furniture and home accessories.</p>
          <a href="#" className="bg-yellow-500 hover:bg-yellow-400 text-white py-4 px-8 rounded-lg font-bold uppercase">Shop Now</a>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Category 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <img src="/images/category-1.jpg" alt="Category 1" className="mb-4 rounded-lg" />
              <h3 className="text-xl font-bold mb-2">Living Room</h3>
              <p className="text-gray-600">Explore our collection of comfortable sofas, coffee tables, and more.</p>
              <a href="#" className="text-blue-500 hover:text-blue-700">Shop Now</a>
            </div>

            {/* Category 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <img src="/images/category-2.jpg" alt="Category 2" className="mb-4 rounded-lg" />
              <h3 className="text-xl font-bold mb-2">Bedroom</h3>
              <p className="text-gray-600">Create your ideal bedroom with our stylish bed frames, mattresses, and more.</p>
              <a href="#" className="text-blue-500 hover:text-blue-700">Shop Now</a>
            </div>

            {/* Category 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <img src="/images/category-3.jpg" alt="Category 3" className="mb-4 rounded-lg" />
              <h3 className="text-xl font-bold mb-2">Kitchen</h3>
              <p className="text-gray-600">Discover our range of kitchen furniture, cookware, and accessories.</p>
              <a href="#" className="text-blue-500 hover:text-blue-700">Shop Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <img src="/images/product-1.jpg" alt="Product 1" className="mb-4 rounded-lg" />
              <h3 className="text-lg font-bold mb-2">Product 1</h3>
              <p className="text-gray-600">$49.99</p>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <img src="/images/product-2.jpg" alt="Product 2" className="mb-4 rounded-lg" />
              <h3 className="text-lg font-bold mb-2">Product 2</h3>
              <p className="text-gray-600">$69.99</p>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <img src="/images/product-3.jpg" alt="Product 3" className="mb-4 rounded-lg" />
              <h3 className="text-lg font-bold mb-2">Product 3</h3>
              <p className="text-gray-600">$79.99</p>
            </div>

            {/* Product 4 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <img src="/images/product-4.jpg" alt="Product 4" className="mb-4 rounded-lg" />
              <h3 className="text-lg font-bold mb-2">Product 4</h3>
              <p className="text-gray-600">$99.99</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;
