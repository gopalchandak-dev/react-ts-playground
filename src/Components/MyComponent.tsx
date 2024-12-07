import { useEffect, useState } from "react";

type Product = {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
};

const MyComponent: React.FC = () => {
    const [data, setData] = useState<Product | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://dummyjson.com/products/10");
                const result = await res.json();
                setData(result);
            } catch (err) {
                console.log("Error:", err);
            }
        };
        fetchData();
    }, []);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            {data ? (
                <div>
                    <h1>{data.title}</h1>
                    <img src={data.thumbnail} alt={data.title} style={{ width: '100px', height: 'auto' }} />
                    <p><strong>ID:</strong> {data.id}</p>
                    <p><strong>Description:</strong> {data.description}</p>
                    <p><strong>Price:</strong> ${data.price}</p>
                    <p><strong>Discount Percentage:</strong> {data.discountPercentage}%</p>
                    <p><strong>Rating:</strong> {data.rating}</p>
                    <p><strong>Stock:</strong> {data.stock}</p>
                    <p><strong>Brand:</strong> {data.brand}</p>
                    <p><strong>Category:</strong> {data.category}</p>
                    <div>
                        <h2>Images:</h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {data.images.map((image, index) => (
                                <img key={index} src={image} alt={`${data.title} ${index}`} style={{ width: '100px', height: 'auto', margin: '5px' }} />
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default MyComponent;
