import './App.css';
import Header from './components/Header';
import Card from './components/Card'
import { CartProvider } from './components/CartContext';

const products = [
  {
    id: 1,
    title: "Aurora Ceramic Mug",
    price: "24.50",
    description: "Hand-glazed stoneware mug inspired by the northern lights.",
    stock: 12,
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/14235/production/_100058428_mediaitem100058424.jpg"
  },
  {
    id: 2,
    title: "Soft Linen Throw",
    price: "58.00",
    description: "Lightweight linen throw blanket with subtle herringbone pattern.",
    stock: 8,
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/14235/production/_100058428_mediaitem100058424.jpg"
  },
  {
    id: 3,
    title: "Voyager Travel Journal",
    price: "32.00",
    description: "Lay-flat journal with recycled paper for capturing every trip.",
    stock: 15,
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/14235/production/_100058428_mediaitem100058424.jpg"
  },
  {
    id: 4,
    title: "Orbit Desk Lamp",
    price: "76.00",
    description: "Minimalist LED lamp with adjustable warmth and built-in dimmer.",
    stock: 6,
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/14235/production/_100058428_mediaitem100058424.jpg"
  },
  {
    id: 5,
    title: "Ridge Canvas Pack",
    price: "119.00",
    description: "Weekend-ready canvas backpack with leather straps and laptop sleeve.",
    stock: 5,
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/14235/production/_100058428_mediaitem100058424.jpg"
  },
  {
    id: 6,
    title: "Mesa Planter Set",
    price: "44.00",
    description: "Set of three matte planters perfect for succulents or herbs.",
    stock: 18,
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/14235/production/_100058428_mediaitem100058424.jpg"
  }
];

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
        <Header />

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              title={product.title}
              price={product.price}
              description={product.description}
              stock={product.stock}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-center mt-12 text-xs text-gray-500">
          Built with React 19, the Context API, and Tailwind CSS.
        </div>
      </div>
    </CartProvider>
  );
}

export default App;