import React from 'react'

const categories = [
    { img: "/pc.png", label: "Electronics" },
    { img: "/fashion.png", label: "Fashion" },
    { img: "/homee.png", label: "Home" },
    { img: "/sports.png", label: "Sports" },
    { img: "/bools.png", label: "Books" },
    { img: "/gaming.png", label: "Gaming" },
]

const Second = () => {
    return (
        <section className='bg-white'>
            <div className='max-w-7xl mx-auto px-4'>
                <h2 className='font-inter font-bold text-3xl mt-16 text-center'>
                    Shop by Category
                </h2>

                <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-12 mb-16'>
                    {categories.map((cat, i) => (
                        <div key={i} className='flex flex-col items-center gap-4 cursor-pointer'>
                            <div className='w-20 h-20 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center'>
                                <img
                                    src={cat.img}
                                    alt={cat.label}
                                    className='w-8 h-8 object-contain'
                                />
                            </div>
                            <h3 className='text-lg md:text-2xl font-medium text-center'>
                                {cat.label}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Second