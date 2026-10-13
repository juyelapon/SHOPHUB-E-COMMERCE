import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Card = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [counts, setCounts] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=8')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                // সব product এর count 0 দিয়ে শুরু
                const initialCounts = {};
                data.products.forEach(p => initialCounts[p.id] = 0);
                setCounts(initialCounts);
                setLoading(false);
            });
    }, []);

    const updateCount = (id, delta) => {
        setCounts(prev => ({
            ...prev,
            [id]: Math.max(0, (prev[id] || 0) + delta)
        }));
    };

    if (loading) return (
        <section className='bg-[#E5E7EB]'>
            <div className='max-w-7xl mx-auto px-4 pt-16'>
                <p className='text-gray-500'>Loading products...</p>
            </div>
        </section>
    );

    return (
        <section className='bg-[#E5E7EB]'>
            <div className='max-w-7xl mx-auto px-4'>

                <div className='pt-16 flex justify-between items-center mb-8'>
                    <h3 className='text-3xl font-bold font-inter'>Featured Products</h3>
                    <a className='font-medium text-base font-inter text-[#3B82F6]' href="#">View all</a>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-16'>
                    {products.map((product) => (
                        <div key={product.id} className='bg-white rounded-lg overflow-hidden flex flex-col'>

                            <div className='p-4 bg-gray-50'>
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    onClick={() => navigate(`/product/${product.id}`)}
                                    className='w-full h-48 object-contain cursor-pointer'
                                />
                            </div>

                            <div className='px-4 flex flex-col flex-1'>
                                <h3
                                    onClick={() => navigate(`/product/${product.id}`)}
                                    className='font-semibold text-base font-inter mb-1 truncate cursor-pointer hover:text-blue-600'
                                >
                                    {product.title}
                                </h3>

                                <p className='text-sm text-gray-400 mb-3 line-clamp-2'>{product.description}</p>

                                <div className='flex items-center justify-between mt-auto pb-4'>
                                    <span className='font-bold text-xl font-inter'>${product.price}</span>

                                    {/* Counter */}
                                    <div className='flex items-center border-2 border-[#3B82F6] rounded-lg overflow-hidden'>
                                        <button
                                            onClick={() => updateCount(product.id, -1)}
                                            className='w-8 h-8 flex items-center justify-center text-[#3B82F6] hover:bg-blue-50 font-bold'
                                        >
                                            −
                                        </button>

                                        <span className='w-7 text-center text-sm font-semibold border-x border-blue-200'>
                                            {counts[product.id] || 0}
                                        </span>

                                        <button
                                            onClick={() => updateCount(product.id, 1)}
                                            className='w-8 h-8 flex items-center justify-center text-[#3B82F6] hover:bg-blue-50 font-bold'
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Card