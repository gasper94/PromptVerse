import React from 'react';
import '@styles/globals.css'

import Nav from '../components/Nav';
import Link from 'next/link';

function ThirdLayout({children}) {
    return (
        <body>
            <div>
            <nav className="bg-gray-100 border-b border-gray-200 fixed z-30 w-full">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
            <div className="flex w-full">
                < Nav />
            </div>
            <div className="flex items-center">
            </div>
            </div>
            </div>
            </nav>
            <div className="flex overflow-hidden bg-gray-200 pt-16">
            <aside id="sidebar" className="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75" aria-label="Sidebar">
            <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100 pt-0">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex-1 px-3 bg-gray-100 divide-y space-y-1">
                    <ul className="space-y-2 pb-2">
                        <li>
                        <form action="#" method="GET" className="lg:hidden">
                            <label htmlFor="mobile-search" className="sr-only">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                                    </svg>
                                </div>
                                <input type="text" name="email" id="mobile-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:ring-cyan-600 block w-full pl-10 p-2.5" placeholder="Search" />
                            </div>
                        </form>
                        </li>
                        <li>
                        <a href="#" className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group">
                            <svg className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                            </svg>
                            <Link href={'/dashboard'} className="ml-3">Dashboard</Link>
                        </a>
                        </li>
                    
                    </ul>
                </div>
            </div>
            </div>
            </aside>
            <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
            <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
            <main>
            <div className="pt-6 px-4">
                {children}
                {/* <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">

            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                        <h3 className="text-xl leading-none font-bold text-gray-900 mb-10">Acquisition Overview</h3>
                        <div className="block w-full overflow-x-auto">
                        <table className="items-center w-full bg-transparent border-collapse">
                            <thead>
                                <tr>
                                    <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Top Channels</th>
                                    <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Users</th>
                                    <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr className="text-gray-500">
                                    <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Organic Search</th>
                                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">5,649</td>
                                    <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2 text-xs font-medium">30%</span>
                                        <div className="relative w-full">
                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                <div className="bg-cyan-600 h-2 rounded-sm"></div>
                                            </div>
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                                <tr className="text-gray-500">
                                    <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Referral</th>
                                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">4,025</td>
                                    <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2 text-xs font-medium">24%</span>
                                        <div className="relative w-full">
                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                <div className="bg-orange-300 h-2 rounded-sm"></div>
                                            </div>
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                                <tr className="text-gray-500">
                                    <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Direct</th>
                                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">3,105</td>
                                    <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2 text-xs font-medium">18%</span>
                                        <div className="relative w-full">
                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                <div className="bg-teal-400 h-2 rounded-sm"></div>
                                            </div>
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                                <tr className="text-gray-500">
                                    <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Social</th>
                                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">1251</td>
                                    <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2 text-xs font-medium">12%</span>
                                        <div className="relative w-full">
                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                <div className="bg-pink-600 h-2 rounded-sm"></div>
                                            </div>
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                                <tr className="text-gray-500">
                                    <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Other</th>
                                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">734</td>
                                    <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2 text-xs font-medium">9%</span>
                                        <div className="relative w-full">
                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                <div className="bg-indigo-600 h-2 rounded-sm"></div>
                                            </div>
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                                <tr className="text-gray-500">
                                    <th className="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">Email</th>
                                    <td className="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0">456</td>
                                    <td className="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                                    <div className="flex items-center">
                                        <span className="mr-2 text-xs font-medium">7%</span>
                                        <div className="relative w-full">
                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                <div className="bg-purple-500 h-2 rounded-sm"></div>
                                            </div>
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                        <h3 className="text-xl leading-none font-bold text-gray-900 mb-10">Acquisition Overview</h3>
                        <div className="block w-full overflow-x-auto">
                        <table className="items-center w-full bg-transparent border-collapse">
                            <thead>
                                <tr>
                                    <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Top Channels</th>
                                    <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Users</th>
                                    <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr className="text-gray-500">
                                    <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Organic Search</th>
                                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">5,649</td>
                                    <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2 text-xs font-medium">30%</span>
                                        <div className="relative w-full">
                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                <div className="bg-cyan-600 h-2 rounded-sm"></div>
                                            </div>
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                                <tr className="text-gray-500">
                                    <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Referral</th>
                                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">4,025</td>
                                    <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2 text-xs font-medium">24%</span>
                                        <div className="relative w-full">
                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                <div className="bg-orange-300 h-2 rounded-sm"></div>
                                            </div>
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                                <tr className="text-gray-500">
                                    <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Direct</th>
                                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">3,105</td>
                                    <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2 text-xs font-medium">18%</span>
                                        <div className="relative w-full">
                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                <div className="bg-teal-400 h-2 rounded-sm"></div>
                                            </div>
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                                <tr className="text-gray-500">
                                    <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Social</th>
                                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">1251</td>
                                    <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2 text-xs font-medium">12%</span>
                                        <div className="relative w-full">
                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                <div className="bg-pink-600 h-2 rounded-sm"></div>
                                            </div>
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                                <tr className="text-gray-500">
                                    <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Other</th>
                                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">734</td>
                                    <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2 text-xs font-medium">9%</span>
                                        <div className="relative w-full">
                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                <div className="bg-indigo-600 h-2 rounded-sm"></div>
                                            </div>
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                                <tr className="text-gray-500">
                                    <th className="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">Email</th>
                                    <td className="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0">456</td>
                                    <td className="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                                    <div className="flex items-center">
                                        <span className="mr-2 text-xs font-medium">7%</span>
                                        <div className="relative w-full">
                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                <div className="bg-purple-500 h-2 rounded-sm"></div>
                                            </div>
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div> */}
            </div>
            </main>
            </div>
            </div>
            </div>
        </body>
    );
}

export default ThirdLayout;