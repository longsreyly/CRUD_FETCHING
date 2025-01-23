import { deleteCustomerServiceAction } from "@/app/action/customerAction";
const TableComponent = ({ customerData, onEditCustomer,onDeleteCustomer }) => {
  
    return (
        <main>
            <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
                <table className="w-full table-fixed">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {
                            customerData.map((data) => (
                                <tr key={data.id}>
                                    <th className="py-4 px-6 border-b border-gray-200">{data.customerName}</th>
                                    <td className="py-4 px-6 border-b border-gray-200 text-center">{data.gender}</td>
                                    <td className="py-4 px-6 border-b border-gray-200 truncate text-center">{data["address"]}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="d-flex">
                                            <button
                                                onClick={() => onEditCustomer(data)}
                                                className="ml-4 py-1 px-3 text-sm text-white bg-green-500 rounded hover:bg-green-600">
                                                Edit
                                            </button>
                                            {/* <ButtonDeleteCustomer  customerId={data.id}/> */}
                                            {/* <button onClick={() => deleteCustomerServiceAction(data.id)}
                                                className="ml-4 py-1 px-3 text-sm text-white bg-red-500 rounded hover:bg-red-600">Delete</button> */}
                                                <button onClick={() => onDeleteCustomer(data.id)}
    className="ml-4 py-1 px-3 text-sm text-white bg-red-500 rounded hover:bg-red-600">Delete</button>

                                        </div>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </main>

    )
};
export default TableComponent;