import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    FiArrowRight,
    FiShoppingBag,
    FiTruck,
    FiShield,
    FiHeadphones,
    FiStar,
    FiLoader
} from 'react-icons/fi'
import { IoShirtOutline } from 'react-icons/io5'
import { BsLaptop, BsHouseDoor, BsDroplet, BsBasket, BsBicycle } from 'react-icons/bs'

const categories = [
    {
        name: 'Fashion',
        slug: 'mens-shirts',
        description: 'Discover stylish outfits and accessories for every occasion.',
        count: 'Explore clothing',
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80',
        icon: IoShirtOutline,
        color: 'bg-rose-100 text-rose-600'
    },
    {
        name: 'Electronics',
        slug: 'smartphones',
        description: 'Discover smart devices, gadgets and everyday technology.',
        count: 'Explore electronics',
        image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=600&q=80',
        icon: BsLaptop,
        color: 'bg-blue-100 text-blue-600'
    },
    {
        name: 'Home & Living',
        slug: 'furniture',
        description: 'Make your home beautiful with thoughtful essentials.',
        count: 'Explore home products',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80',
        icon: BsHouseDoor,
        color: 'bg-green-100 text-green-600'
    },
    {
        name: 'Beauty',
        slug: 'beauty',
        description: 'Find skincare, makeup and personal care favorites.',
        count: 'Explore beauty',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80',
        icon: BsDroplet,
        color: 'bg-pink-100 text-pink-600'
    },
    {
        name: 'Groceries',
        slug: 'groceries',
        description: 'Shop everyday essentials and pantry favorites.',
        count: 'Explore groceries',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
        icon: BsBasket,
        color: 'bg-amber-100 text-amber-600'
    },
    {
        name: 'Sports & Fitness',
        slug: 'sports-accessories',
        description: 'Gear up for your next workout and outdoor adventure.',
        count: 'Explore sports',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80',
        icon: BsBicycle,
        color: 'bg-purple-100 text-purple-600'
    }
]

const benefits = [
    {
        icon: FiTruck,
        title: 'Fast & Reliable Delivery',
        description: 'Get your orders quickly',
        color: 'bg-blue-100 text-blue-600'
    },
    {
        icon: FiShield,
        title: 'Secure Shopping',
        description: 'Shop with confidence',
        color: 'bg-purple-100 text-purple-600'
    },
    {
        icon: FiHeadphones,
        title: 'Customer Support',
        description: "We're here to help",
        color: 'bg-green-100 text-green-600'
    },
    {
        icon: FiStar,
        title: 'Quality Products',
        description: 'Find your everyday favorites',
        color: 'bg-amber-100 text-amber-600'
    }
]

const Categories = () => {
    const navigate = useNavigate()
    const [selectedCategory, setSelectedCategory] = useState('')
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        if (!selectedCategory) return

        const fetchProducts = async () => {
            setLoading(true)
            setError('')
            setProducts([])

            try {
                const response = await fetch(
                    `https://dummyjson.com/products/category/${selectedCategory}`
                )

                if (!response.ok) {
                    throw new Error('Failed to load products')
                }

                const data = await response.json()
                setProducts(data.products || [])
            } catch {
                setError('Products could not be loaded. Please try again.')
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [selectedCategory])

    const handleExplore = (category) => {
        setSelectedCategory(category.slug)

        setTimeout(() => {
            document.getElementById('category-products')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }, 100)
    }

    return (
        <main className="min-h-screen bg-white text-slate-900">

            {/* Hero Section */}
            <section className="overflow-hidden bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 py-14 sm:px-8 md:flex-row md:justify-between md:py-20">

                    <div className="max-w-2xl">
                        <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                            Shop by category
                        </span>

                        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            Find What
                            <span className="text-blue-600"> You Love.</span>
                        </h1>

                        <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                            Explore our wide range of categories and discover
                            products that match your style, needs and lifestyle.
                        </p>

                        <button
                            onClick={() => document.getElementById('all-categories')?.scrollIntoView({
                                behavior: 'smooth'
                            })}
                            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700"
                        >
                            Explore Categories
                            <FiArrowRight size={18} />
                        </button>
                    </div>

                    <div className="w-full max-w-md">
                        <img
                            src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=900&q=85"
                            alt="Shopping bags and shopping items"
                            className="h-64 w-full rounded-3xl object-cover shadow-xl sm:h-80"
                        />
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section
                id="all-categories"
                className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20"
            >
                <div className="mb-9 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                    <div>
                        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-blue-600">
                            Explore our collection
                        </p>
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                            All Categories
                        </h2>
                        <div className="mt-4 h-1 w-16 rounded-full bg-blue-600" />
                    </div>

                    <p className="max-w-md text-sm leading-6 text-slate-500 sm:text-right">
                        Everything you need, organized in one place.
                        Find your favorites with ease.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category) => {
                        const Icon = category.icon

                        return (
                            <article
                                key={category.slug}
                                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/60 sm:flex-row sm:gap-4"
                            >
                                <div className="h-52 overflow-hidden rounded-xl bg-slate-100 sm:h-auto sm:min-h-56 sm:w-2/5 sm:shrink-0">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <div className="flex flex-1 flex-col items-start py-4 sm:py-1">
                                    <div className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl ${category.color}`}>
                                        <Icon size={22} />
                                    </div>

                                    <h3 className="text-xl font-bold">
                                        {category.name}
                                    </h3>

                                    <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">
                                        {category.description}
                                    </p>

                                    <button
                                        onClick={() => handleExplore(category)}
                                        className="mt-5 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                                    >
                                        Explore
                                        <FiArrowRight className="transition group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </section>

            {/* Products for selected category */}
            {selectedCategory && (
                <section
                    id="category-products"
                    className="mx-auto max-w-7xl scroll-mt-8 px-5 pb-16 sm:px-8"
                >
                    <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <p className="text-sm font-semibold text-blue-600">
                                Explore collection
                            </p>
                            <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">
                                {categories.find((category) => category.slug === selectedCategory)?.name}
                            </h2>
                        </div>

                        <button
                            onClick={() => {
                                setSelectedCategory('')
                                setProducts([])
                                setError('')
                            }}
                            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                        >
                            Close products
                        </button>
                    </div>

                    {loading && (
                        <div className="flex items-center justify-center gap-3 py-16 text-blue-600">
                            <FiLoader className="animate-spin" size={24} />
                            <span className="font-medium">Loading products...</span>
                        </div>
                    )}

                    {error && (
                        <p className="rounded-xl bg-red-50 p-5 text-center text-red-600">
                            {error}
                        </p>
                    )}

                    {!loading && !error && products.length > 0 && (
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                            {products.map((product) => (
                                <article
                                    key={product.id}
                                    onClick={() => navigate(`/product/${product.id}`)}
                                    className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="flex h-44 items-center justify-center bg-slate-50 p-4 sm:h-56">
                                        <img
                                            src={product.thumbnail}
                                            alt={product.title}
                                            loading="lazy"
                                            className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="p-4">
                                        <h3 className="line-clamp-2 min-h-10 font-semibold">
                                            {product.title}
                                        </h3>
                                        <p className="mt-2 text-lg font-extrabold text-blue-600">
                                            ${product.price}
                                        </p>
                                        <p className="mt-1 text-sm text-amber-500">
                                            ★ {product.rating}
                                        </p>
                                        <button
                                            onClick={(event) => {
                                                event.stopPropagation()
                                                navigate(`/product/${product.id}`)
                                            }}
                                            className="mt-4 w-full rounded-lg border border-blue-600 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}

                    {!loading && !error && products.length === 0 && (
                        <p className="py-10 text-center text-slate-500">
                            No products found in this category.
                        </p>
                    )}
                </section>
            )}

            {/* Benefits Section */}
            <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
                <div className="grid grid-cols-1 gap-4 rounded-3xl bg-gradient-to-r from-blue-50 to-indigo-50 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
                    {benefits.map((benefit) => {
                        const Icon = benefit.icon

                        return (
                            <div
                                key={benefit.title}
                                className="flex items-center gap-4 rounded-xl p-3 transition hover:bg-white/70"
                            >
                                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${benefit.color}`}>
                                    <Icon size={22} />
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold">
                                        {benefit.title}
                                    </h3>
                                    <p className="mt-1 text-xs leading-5 text-slate-500">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

        </main>
    )
}

export default Categories