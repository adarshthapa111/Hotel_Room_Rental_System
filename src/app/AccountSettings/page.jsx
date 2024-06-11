import React from 'react'

const page = () => {
  return (
    <div>
       <div className="w-full max-w-2xl mx-auto py-12 md:py-16 min-h-screen">
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-8 space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to to-pink-600     text-transparent bg-clip-text ">Account Settings</h1>
          <p className="text-gray-500 dark:text-gray-400">Update your personal information.</p>
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter your first name"
                className="w-full rounded-md shadow-sm p-4 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Enter your last name"
                className="w-full rounded-md shadow-sm border p-4 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-md shadow-sm  border p-4 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to to-blue-600 p-2 hover:bg-indigo-700 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default page
