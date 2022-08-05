import React from 'react';
import {useSelector} from "react-redux";
import CatalogItem from "../CatalogItem";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 15px;
  display: flex;
  flex-wrap: wrap;
`;

const Catalog = () => {
    const {products} = useSelector(s => s.catalog)
    return (
        <Container>
            {
                products.map(product => (
                    <CatalogItem product={product} key={product.id}/>
                ))
            }

        </Container>
    );
}

export default Catalog;