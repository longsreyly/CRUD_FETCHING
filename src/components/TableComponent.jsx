import { useState } from "react";

const TableComponent = ({ customerData, onEditCustomer, onDeleteCustomer }) => {
    const [searchTerm, setSearchTerm] = useState("");

    // Filter customer data based on the search term
    const filteredData = customerData.filter((data) =>
        data.customerName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main>
            {/* Search Bar */}
            <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                    <span className="sr-only">Search icon</span>
                </div>
                <input
                    type="text"
                    id="search-navbar"
                    className="block w-full p-2 pl-10 text-sm text-gray-900 border border-blue-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-blue-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm
                />
            </div>

            {/* Table */}
            <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
                <table className="w-full table-fixed">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Full Name
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Gender
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Address
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {filteredData.length > 0 ? (
                            filteredData.map((data) => (
                                <tr key={data.id}>
                                    <th className="py-4 px-6 border-b border-gray-200">
                                        {data.customerName}
                                    </th>
                                    <td className="py-4 px-6 border-b border-gray-200 text-center">
                                        {data.gender}
                                    </td>
                                    <td className="py-4 px-6 border-b border-gray-200 truncate text-center">
                                        {data.address}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="d-flex">
                                            <button
                                                onClick={() => onEditCustomer(data)}
                                                className="ml-4 py-1 px-3 text-sm text-white bg-green-500 rounded hover:bg-green-600"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => onDeleteCustomer(data.id)}
                                                className="ml-4 py-1 px-3 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="4"
                                    className="text-center py-4 text-gray-500 font-medium"
                                >
                                    No results found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default TableComponent;
