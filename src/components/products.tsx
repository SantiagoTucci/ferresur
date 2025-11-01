"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

const categories = ["Todas", "Herramientas", "Electricidad", "Plomería", "Pintura", "Jardinería"]

const products = [
  {
    id: 1,
    name: "Taladro Inalámbrico Professional",
    category: "Herramientas",
    price: "$45,999",
    image: "/power-drill.png",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Cable Eléctrico Profesional 50m",
    category: "Electricidad",
    price: "$8,500",
    image: "/electrical-cable.jpg",
    rating: 4.5,
    reviews: 87,
  },
  {
    id: 3,
    name: "Llave Inglesa Ajustable",
    category: "Herramientas",
    price: "$3,200",
    image: "/wrench-tool.jpg",
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 4,
    name: 'Caño de Cobre 1/2"',
    category: "Plomería",
    price: "$2,100",
    image: "/copper-pipe.jpg",
    rating: 4.6,
    reviews: 92,
  },
  {
    id: 5,
    name: "Pintura Premium 20L",
    category: "Pintura",
    price: "$12,500",
    image: "/paint-bucket.png",
    rating: 4.7,
    reviews: 203,
  },
  {
    id: 6,
    name: "Pala de Jardín Profesional",
    category: "Jardinería",
    price: "$4,800",
    image: "/garden-shovel.jpg",
    rating: 4.4,
    reviews: 65,
  },
  {
    id: 7,
    name: "Martillo Profesional 2kg",
    category: "Herramientas",
    price: "$5,200",
    image: "/professional-hammer.jpg",
    rating: 4.8,
    reviews: 178,
  },
  {
    id: 8,
    name: "Panel Solar 100W",
    category: "Electricidad",
    price: "$18,900",
    image: "/solar-panel-installation.png",
    rating: 4.6,
    reviews: 45,
  },
  {
    id: 9,
    name: "Tuerca Surtida Pack 100",
    category: "Plomería",
    price: "$1,800",
    image: "/nuts-bolts-assortment.jpg",
    rating: 4.5,
    reviews: 234,
  },
]

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("Todas")
  const [sortBy, setSortBy] = useState("relevancia")

  const filteredProducts =
    selectedCategory === "Todas" ? products : products.filter((p) => p.category === selectedCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "precio-menor") {
      return Number.parseInt(a.price) - Number.parseInt(b.price)
    } else if (sortBy === "precio-mayor") {
      return Number.parseInt(b.price) - Number.parseInt(a.price)
    } else if (sortBy === "rating") {
      return b.rating - a.rating
    }
    return 0
  })

  return (
    <section id="productos" className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Nuestros Productos</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explora nuestro catálogo completo de herramientas y materiales para tus proyectos.
          </p>
        </div>

        {/* Filters Section */}
        <div className="mb-12">
          {/* Category Filter */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-foreground/70 mb-3">Categorías</p>
            <div className="flex flex-wrap gap-3 justify-start">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-all ${
                    selectedCategory === category
                      ? "bg-accent text-accent-foreground shadow-md"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Sort Filter */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-foreground/60">
              Mostrando {sortedProducts.length} de {products.length} productos
            </p>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-muted text-foreground px-4 py-2 rounded-lg pr-10 cursor-pointer border border-border hover:border-accent transition-colors"
              >
                <option value="relevancia">Ordenar por relevancia</option>
                <option value="precio-menor">Menor precio</option>
                <option value="precio-mayor">Mayor precio</option>
                <option value="rating">Mejor valorado</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground/60 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer border-0"
            >
              <div className="relative overflow-hidden h-64 bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  ⭐ {product.rating}
                </div>
              </div>
              <div className="p-6">
                <p className="text-accent text-xs font-semibold mb-2 uppercase tracking-wider">{product.category}</p>
                <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-foreground/60 text-xs mb-4">({product.reviews} reseñas)</p>
                <div className="flex justify-between items-center">
                  <span className="text-accent font-bold text-lg">{product.price}</span>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Consultar
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
