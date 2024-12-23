import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import ProductCart from '../components/ProductCart';

function Home() {
    const [listProducts, setListProducts] = useState([]);

    const handgetProducts = async () => {
        try {
            const response = await axios.get('http://192.168.1.25:3050/api/product');
            return response?.data?.data?.result || [];
        } catch (error) {
            console.error('Lỗi khi lấy danh sách sản phẩm:', error);
            return [];
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await handgetProducts();
            setListProducts(data);
        };

        fetchData();
    }, []);

    console.log(listProducts);

    return (
        <div className="container home-listproduct">
            {listProducts.length > 0 ? (
                listProducts.map((product) => (
                    <ProductCart product={product}/>
                ))
            ) : (
                <p>Không có sản phẩm nào để hiển thị.</p>
            )}
        </div>
    );
}

export default Home;
