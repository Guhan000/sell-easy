import Card from "./components/card";

const products = [
    {
      name: 'Samsung TV',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1689620815896-b61fdab3d733?q=80&w=4064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 3,
      description:
        'It is in perfect condition and working perfectly. 9 months old and still under warranty. No faults and scratches on the screen.model number : UA75RU7100W 2021 year model. Box available for easy transportation.',
    },
    {
      name: 'Samsung TV',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1689620815896-b61fdab3d733?q=80&w=4064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 3,
      description:
        'It is in perfect condition and working perfectly. 9 months old and still under warranty. No faults and scratches on the screen.model number : UA75RU7100W 2021 year model. Box available for easy transportation.',
    },
  ];

export default function Home() {
  return (
    <main className="min-h-screen max-w-[100rem] mx-auto">
      <div className="px-12 pt-12 pb-20">
        <div className="flex flex-col xl:flex-row gap-2 xl:gap-40">
          <div className="pt-12">
            <h2 className="text-4xl mb-16">OUR TOP PRODUCTS</h2>
            <p className="text-xl">You can pay to boost your products here.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-12">
            {products &&
              products.map((item, idx) => (
                <Card key={`${item.name}-${idx}`} {...item} />
              ))}
          </div>
        </div>

        <h2 className="text-4xl mt-20 mb-16">ALL PRODUCTS</h2>
        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((item, idx) => (
              <Card key={`${item.name}-${idx}`} {...item} />
            ))}
          </div>
        ) : (
          <p className="text-xl text-gray-800">All our products are gone...</p>
        )}
      </div>
    </main>
  );
}
