import React from "react";

function Dashboard({ logout, email }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Welcome to the Dashboard
        <div className="text-center text-red-600 mt-2">
          {email || "ไม่มีข้อมูลผู้ใช้งาน"}
        </div>
      </h2>
      <button
        onClick={logout}
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
