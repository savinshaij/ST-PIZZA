
const products = [
    {
        id: 1,
        name: 'bnbnmm',
        href: '#',
        price: '$48',
        imageSrc: '/pizza3.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'bnbnnnnnnn',
        href: '#',
        price: '$35',
        imageSrc: '/pizza3.jpg',
    },
    {
        id: 3,
        name: 'hghjghjjhj',
        href: '#',
        price: '$89',
        imageSrc: '/pizza3.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'ghfggfh',
        href: '#',
        price: '$35',
        imageSrc: '/pizza3.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 4,
        name: 'pizza2',
        href: '#',
        price: '$35',
        imageSrc: '/pizza2.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 4,
        name: 'pizza',
        href: '#',
        price: '$35',
        imageSrc: '/pizza3.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 4,
        name: 'bnbnnmbnnnm',
        href: '#',
        price: '$35',
        imageSrc: '/pizza3.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 4,
        name: 'jhjkjkjkkj',
        href: '#',
        price: '$35',
        imageSrc: '/pizza3.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 4,
        name: 'kjkkjkkj',
        href: '#',
        price: '$35',
        imageSrc: '/pizza5.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
]

export default function MenuItem() {
    return (
        <div className=" bg-slate-100">
            <div className="mx-auto max-w-2xl px-4 py-20  sm:px-6 sm:py-36 lg:max-w-7xl lg:px-8 ">
                <h2 className=" text-center text-4xl pb-8 font-medium text-slate-800">Menu</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="group   px-3 py-2 bg-white  shadow-sm rounded-lg hover:scale-105 duration-300">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 xl:aspect-h-8 xl:aspect-w-7 ">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <div>

                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            <div className="flex justify-between  py-2">

                                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                                <a href="#" className="text-white bg-orange-600 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center ">Add to cart</a>
                            </div>
                            </div>
                            

                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
