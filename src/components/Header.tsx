import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const { items } = useCart();
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-[#ffffff] text-primary-foreground shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#inicio" className="text-2xl font-bold tracking-tight">
          <img src="/src/assets/LogoBIG.png" alt="GR Design Logo" className="mr-2 h-20 w-55" />
          {/* <span className="text-secondary">GR</span> Design */}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#inicio" className="text-sm font-medium text-[#AC99BE] transition-colors hover:text-[#765C8B]">
            Início
          </a>
          <a href="#sobre" className="text-sm font-medium text-[#AC99BE] transition-colors hover:text-[#765C8B]">
            Sobre
          </a>
          <a href="#catalogo" className="text-sm font-medium text-[#AC99BE] transition-colors hover:text-[#765C8B]">
            Catálogo
          </a>
          <a href="#contato" className="text-sm font-medium text-[#AC99BE] transition-colors hover:text-[#765C8B]">
            Contato
          </a>
        </nav>

        <a
          href="#carrinho"
          className="relative flex items-center gap-2 rounded-lg bg-[#765c8b] px-4 py-2 text-sm font-medium text-secondary-foreground transition-transform hover:scale-105"
        >
          <ShoppingCart size={18} />
          Carrinho
          {totalItems > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
              {totalItems}
            </span>
          )}
        </a>
      </div>

      {/* Mobile nav */}
      <nav className="flex justify-center gap-6 border-t border-[#AC99BE]/30 px-4 py-2 md:hidden">
        <a
          href="#inicio"
          className="text-xs font-medium text-[#AC99BE] transition-colors hover:text-[#765C8B] focus:text-[#765C8B]"
        >
          Início
        </a>

        <a
          href="#sobre"
          className="text-xs font-medium text-[#AC99BE] transition-colors hover:text-[#765C8B] focus:text-[#765C8B]"
        >
          Sobre
        </a>

        <a
          href="#catalogo"
          className="text-xs font-medium text-[#AC99BE] transition-colors hover:text-[#765C8B] focus:text-[#765C8B]"
        >
          Catálogo
        </a>

        <a
          href="#contato"
          className="text-xs font-medium text-[#AC99BE] transition-colors hover:text-[#765C8B] focus:text-[#765C8B]"
        >
          Contato
        </a>
      </nav>

    </header>
  );
};

export default Header;
