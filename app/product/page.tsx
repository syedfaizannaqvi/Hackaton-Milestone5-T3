"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaFilter, FaSortAmountDown, FaChevronDown } from "react-icons/fa";
import { shoes, mens, womens, allProducts } from "../data";
import type { Product } from "../data";
import Card from "../components/Card";

const Product = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [toggles, setToggles] = useState({
    gender: false,
    kids: false,
    showByPrize: false,
    sortBy: false,
  });
  const [products, setProducts] = useState<string>("allProducts");
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(allProducts);
  const categories: Record<string, Product[]> = {
    shoes,
    mens,
    womens,
    allProducts,
  };
  const handleCategoryChange = (selectedCategory: string) => {
    setProducts(selectedCategory);
    setFilteredProducts(categories[selectedCategory]);
  };

  const handleToggle = (key: string) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  return (
    <div className="w-full">
      <section className="w-[95%] mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-medium">NEW (500)</h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="bg-black text-white px-4 py-2 rounded-full flex items-center"
            >
              Hide Filters{" "}
              <span>
                <FaFilter className="w-4 h-4 mx-3" />
              </span>
            </button>
            <button
              className="bg-black text-white px-4 py-2 rounded-full flex items-center"
              onClick={() => handleToggle("sortBy")}
            >
              Sort By{" "}
              <span>
                <FaSortAmountDown className="w-4 h-4 mx-3" />
              </span>
            </button>
            {toggles.sortBy && (
              <div className="absolute flex flex-col right-3 top-[9.5rem] md:top-[10.5rem] bg-white rounded-lg shadow-xl w-[150px] z-50 gap-2 p-2 ">
                <button
                  className="text-base text-black font-medium hover:text-gray-700 border-b border-gray-200 pb-2"
                  onClick={() => handleCategoryChange("mens")}
                >
                  Men
                </button>
                <button
                  className="text-base text-black font-medium hover:text-gray-700 border-b border-gray-200 pb-2"
                  onClick={() => handleCategoryChange("womens")}
                >
                  Women
                </button>
                <button
                  className="text-base text-black font-medium hover:text-gray-700"
                  onClick={() => handleCategoryChange("shoes")}
                >
                  Shoes
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <div className="w-[95%] mx-auto flex justify-between  my-5">
        <section
          className={`max-w-[200px] w-[95%] mx-auto z-50 flex flex-col bg-white ${
            showFilter ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-2 border-r border-gray-200">
            <div className="flex flex-col gap-2">
              <Link
                href={"product/1"}
                className="text-sm text-gray-700 font-medium hover:text-black"
              >
                Shoes
              </Link>
              <Link
                href={"product/2"}
                className="text-sm text-gray-700 font-medium hover:text-black"
              >
                Sports Bra
              </Link>
              <Link
                href={"product/2"}
                className="text-sm text-gray-700 font-medium hover:text-black"
              >
                T-Shirts & Tops
              </Link>
              <Link
                href={"product/2"}
                className="text-sm text-gray-700 font-medium hover:text-black"
              >
                Hoodies & Sweatshirts
              </Link>
              <Link
                href={"product/2"}
                className="text-sm text-gray-700 font-medium hover:text-black"
              >
                Jackets
              </Link>
              <Link
                href={"product/2"}
                className="text-sm text-gray-700 font-medium hover:text-black"
              >
                Shorts
              </Link>
              <Link
                href={"product/2"}
                className="text-sm text-gray-700 font-medium hover:text-black"
              >
                Pants
              </Link>
              <Link
                href={"product/2"}
                className="text-sm text-gray-700 font-medium hover:text-black"
              >
                Accessories
              </Link>

              <Link
                href={"product/2"}
                className="text-sm text-gray-700 font-medium hover:text-black"
              >
                Tracksuits
              </Link>

              <Link
                href={"product/2"}
                className="text-sm text-gray-700 font-medium hover:text-black"
              >
                Jumeprs & Rompers
              </Link>
            </div>
            <div className="flex flex-col gap-2 mt-10 border-t border-gray-200 pt-2">
              <button
                className="text-sm text-black font-medium hover:text-black flex items-center justify-between"
                onClick={() => handleToggle("gender")}
              >
                Gender <FaChevronDown className="w-2 h-2 mx-3" />
              </button>
              {toggles.gender && (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <label className="text-sm text-gray-700 font-medium hover:text-black">
                      Men
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <label className="text-sm text-gray-700 font-medium hover:text-black">
                      Women
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <label className="text-sm text-gray-700 font-medium hover:text-black">
                      Unisex
                    </label>
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-2 border-t border-gray-200 pt-2">
              <button
                className="text-sm text-black font-medium hover:text-black flex items-center justify-between"
                onClick={() => handleToggle("kids")}
              >
                Kids <FaChevronDown className="w-2 h-2 mx-3" />
              </button>
              {toggles.kids && (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <label className="text-sm text-gray-700 font-medium hover:text-black">
                      Boys
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <label className="text-sm text-gray-700 font-medium hover:text-black">
                      Girls
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <label className="text-sm text-gray-700 font-medium hover:text-black">
                      Infants
                    </label>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2 border-t border-gray-200 pt-2">
              <button
                className="text-sm text-black font-medium hover:text-black flex items-center justify-between"
                onClick={() => handleToggle("showByPrize")}
              >
                Show By Prize <FaChevronDown className="w-2 h-2 mx-3" />
              </button>
              {toggles.showByPrize && (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <label className="text-sm text-gray-700 font-medium hover:text-black">
                      Under $100
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <label className="text-sm text-gray-700 font-medium hover:text-black">
                      $100 - $200
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <label className="text-sm text-gray-700 font-medium hover:text-black">
                      $200 - $300
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        <section className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-screen-xl mx-auto">
            {filteredProducts.map((product) => (
              <div key={product.id} className="flex justify-center">
                <Card
                  title={product.name}
                  category={product.category}
                  price={product.price}
                  imageUrl={product.image}
                  id={product.id}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;