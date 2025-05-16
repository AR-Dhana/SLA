import React from 'react';
import Sidebar from '../common_components/Sidebar';
import StatCard from '../common_components/StatCard';
import DataTable from '../common_components/DataTable';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="d-flex">
            <Sidebar />

            <div className="flex-grow-1 p-4">
                <h4 className="mb-4">Dashboard</h4>
                <div className="d-flex mb-4">
                    <StatCard label="Breeds" count={5} />
                    <StatCard label="Quarantine" count={6} />
                    <StatCard label="Invoice" count={7} />
                    <StatCard label="Users" count={9} />
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default AdminDashboard;
