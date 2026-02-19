import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import catalogBg from "@/assets/catalog-bg.jpg";

const CatalogSection = () => {
  return (
    <section id="catalogo" className="relative overflow-hidden py-16 md:py-24">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${catalogBg})` }}
      />
      <div className="absolute inset-0 bg-background/90" />

      <div className="container relative mx-auto px-4">
        <h2 className="mb-2 text-center text-3xl font-bold text-primary md:text-4xl">
          Nosso Catálogo
        </h2>
        <p className="mb-12 text-center text-muted-foreground">
          Escolha seus produtos e monte seu pedido
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
