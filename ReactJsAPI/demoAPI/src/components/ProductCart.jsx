import React from 'react'
import ShareIcon from './icons/ShareIcon'
import CompareIcon from './icons/CompareIcon'
import LikeIcon from './icons/LikeIcon'

function ProductCart({product}) {
    return (
        <div className="product" key={product.id}>
        <img src={product.thumbnail} alt="Ảnh sản phẩm" />
        <div className='product-detail'>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <span>
                {Math.round(product.price * (1 - product.discount / 100))} Vnđ
            </span>
            <span>{product.price} Vnđ</span>
        </div>
        <div className='product-overlay'>
            <button>Add to cart</button>
            <ul>
                <li><ShareIcon />Share</li>
                <li><CompareIcon />Compare</li>
                <li><LikeIcon />Like</li>
            </ul>
        </div>
    </div>
    
    )
}

export default ProductCart
