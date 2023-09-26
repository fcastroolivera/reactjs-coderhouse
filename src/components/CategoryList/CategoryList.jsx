import './CategoryList.css';;
import {useEffect, useState} from "react";
import Category from "../Category/Category.jsx";

export default function CategoryList() {
    const [categoryList, setCategoryList] = useState([]);

    const getCategories = fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json());


    useEffect(() => {
        getCategories.then(data => {
            setCategoryList(data);
        })
    }, []);
    return (
        <ul className={'categorylist'}>
            {
                categoryList.map((el, i) => (
                    <Category key={i} data={el} />
                ))
            }
        </ul>
    );
}