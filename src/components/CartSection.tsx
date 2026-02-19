import { useState } from "react";
import { Trash2, Minus, Plus, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

const CartSection = () => {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();
  const [name, setName] = useState("");
  const [showError, setShowError] = useState(false);

  const handleWhatsApp = () => {
    if (!name.trim()) {
      setShowError(true);
      return;
    }
    setShowError(false);

    const itemsText = items
      .map((i) => `- ${i.quantity}x - ${i.product.name}`)
      .join("\n");

    const message = `Olá! Sou ${name.trim()}
Quero seguir com um pedido, onde acompanhei pelo site da loja:
${itemsText}
Total: R$ ${total.toFixed(2).replace(".", ",")}
Gostaria de combinar e marcar a data de entrega das solicitações a cima`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5511919335496?text=${encoded}`, "_blank");
  };

  return (
    <section id="carrinho" className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-primary md:text-4xl">
          Carrinho de Compras
        </h2>

        {items.length === 0 ? (
          <p className="text-center text-muted-foreground">
            Seu carrinho está vazio. Adicione produtos do catálogo acima!
          </p>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mx-auto max-w-2xl"
          >
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center justify-between gap-4 rounded-lg bg-card p-4 shadow-sm"
                >
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{item.product.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      R$ {item.product.price.toFixed(2).replace(".", ",")} un.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="rounded bg-muted p-1 text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="min-w-[1.5rem] text-center text-sm font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="rounded bg-muted p-1 text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <p className="w-20 text-right font-semibold text-primary">
                    R$ {(item.product.price * item.quantity).toFixed(2).replace(".", ",")}
                  </p>

                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="text-destructive/60 transition-colors hover:text-destructive"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-lg bg-primary p-6 text-primary-foreground">
              <div className="mb-4 flex items-center justify-between text-lg font-bold">
                <span>Total:</span>
                <span>R$ {total.toFixed(2).replace(".", ",")}</span>
              </div>

              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium">Seu nome *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setShowError(false);
                  }}
                  placeholder="Digite seu nome"
                  className="w-full rounded-md bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                {showError && (
                  <p className="mt-1 text-sm text-red-300">Por favor, informe seu nome.</p>
                )}
              </div>

              <button
                onClick={handleWhatsApp}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-green-500 px-6 py-3 font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                <Send size={18} />
                Seguir com pedido via WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CartSection;
