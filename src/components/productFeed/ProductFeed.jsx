import React from 'react';
import styles from "../productFeed/_productfeed.module.scss";
//components
import Product from '../product/Product';

const  ProductFeed = ({products}) =>  {

    return (

        <div className="product_feed">

            {products.slice(0, 4).map(({id, title, price, description, category, image}) => (
                <Product

                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    price={price}
                    category={category}
                    image={image}

                />
            ))}

            <img className="middle_img" src="https://links.papareact.com/dyz"  alt="" />
          

          <div className="middle_content">
            {products.slice(4, 5).map(({id, title, price, description, category, image}) => (
                    <Product

                        key={id}
                        id={id}
                        title={title}
                        description={description}
                        price={price}
                        category={category}
                        image={image}

                    />
                ))}
          </div>

          {products.slice(5, products.length).map(({id, title, price, description, category, image}) => (
                <Product

                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    price={price}
                    category={category}
                    image={image}

                />
            ))}
           
        

        </div>
    )
}

export default ProductFeed;
