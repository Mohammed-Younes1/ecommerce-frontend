import React, { useState } from "react";
import categorylist from "../data/CatagoryList";

function Category() {
    const [categoryListInfo] = useState(categorylist);

    return (
        <div className="bg-blue-light   py-10 px-10">
            <div className="border grid grid-cols-3 ">
            {categoryListInfo.map((item) => (
                <div key={item.id} className="relative bg-white  ">
                    <img src={item.image} alt={item.name} className="w-full h-50 object-cover rounded-none" />
                    <div className="absolute bottom-0 left-0 w-full bg-white p-4">
                        <h1 className="text-lg font-semibold mb-2 text-center">{item.name.toUpperCase()}</h1>
                        <h3 className="text-gray-600 text-center">{item.quantity}</h3>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Category;
