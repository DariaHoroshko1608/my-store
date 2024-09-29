import React, { useState } from 'react';
import { useGetWarehousesQuery } from '../store/api/novaposhtaApi';
import './CheckoutForm.scss';

const CheckoutForm = () => {
    const [city, setCity] = useState('');  // Місто, яке вводить користувач
    const [selectedWarehouse, setSelectedWarehouse] = useState('');

    const { data: warehouses, error, isLoading } = useGetWarehousesQuery(city);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Order submitted:', { city, selectedWarehouse });
    };

    return (
        <form className="checkout-form" onSubmit={handleSubmit}>
            <div>
                <label>City</label>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city"
                />
            </div>

            <div>
                <label>Select Warehouse</label>
                {isLoading ? (
                    <p>Loading warehouses...</p>
                ) : error ? (
                    <p>Error loading warehouses.</p>
                ) : (
                    <select
                        value={selectedWarehouse}
                        onChange={(e) => setSelectedWarehouse(e.target.value)}
                    >
                        <option value="">Select a warehouse</option>
                        {warehouses?.data?.map((warehouse) => (
                            <option key={warehouse.Ref} value={warehouse.Ref}>
                                {warehouse.Description}
                            </option>
                        ))}
                    </select>
                )}
            </div>

            <div>
                <label>Name</label>
                <input type="text" name="name" required />
            </div>

            <div>
                <label>Email</label>
                <input type="email" name="email" required />
            </div>

            <button type="submit">Submit Order</button>
        </form>
    );
};

export default CheckoutForm;
