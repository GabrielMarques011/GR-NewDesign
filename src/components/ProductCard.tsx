import { useState } from "react";
import { Plus, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
    setQuantity(1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group flex flex-col rounded-lg border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
          {product.category}
        </span>
      </div>

      <h3 className="mb-1 text-lg font-semibold text-foreground">{product.name}</h3>
      <p className="mb-4 text-2xl font-bold text-primary">
        R$ {product.price.toFixed(2).replace(".", ",")}
      </p>

      <div className="mt-auto flex items-center gap-3">
        <div className="flex items-center rounded-md border">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-3 py-1.5 text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
          >
            −
          </button>
          <span className="min-w-[2rem] text-center text-sm font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="px-3 py-1.5 text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
          >
            +
          </button>
        </div>

        <button
          onClick={handleAdd}
          className={`flex flex-1 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all ${
            added
              ? "bg-green-500 text-white"
              : "bg-secondary text-secondary-foreground hover:scale-[1.02]"
          }`}
        >
          {added ? (
            <>✓ Adicionado</>
          ) : (
            <>
              <Plus size={16} />
              Adicionar
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
