"use client"

import { useState } from 'react';

export default function Reserve() {
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvc, setCvc] = useState('');

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-6 max-w-7xl mx-auto p-4 md:p-8 min-h-screen">
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-300">
          <div className="border-b pb-4 mb-4">
            <h2 className="text-xl font-semibold">Trip Details</h2>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                <div className="relative">
                  <button className="w-full flex justify-between items-center border rounded-md py-2 px-4 bg-white text-gray-800 hover:bg-gray-100">
                    <span>April 15 - April 20, 2024</span>
                    <ChevronDownIcon className="w-4 h-4" />
                  </button>
                  {/* Add Calendar component here if needed */}
                </div>
              </div>
              <div className="space-y-1">
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Guests</label>
                <select id="guests" className="w-full border rounded-md py-2 px-4">
                  <option value="1">1 guest</option>
                  <option value="2" selected>2 guests</option>
                  <option value="3">3 guests</option>
                  <option value="4">4 guests</option>
                  <option value="5">5 guests</option>
                </select>
              </div>
            </div>
            <button className="bg-gray-800 text-white py-2 px-4 rounded-md">Edit Trip</button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-300">
          <div className="border-b pb-4 mb-4 my-2">
            <h2 className="text-xl font-semibold">Payment</h2>
          </div>
          <div className="space-y-4 my-4">
            <div>
              <label htmlFor="payment-method" className="block text-sm font-medium text-gray-700 my-2">Payment Method</label>
              <div className="flex space-x-4 items-center">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" value="card" checked={selectedPayment === 'card'} onChange={() => setSelectedPayment('card')} className="sr-only" />
                  <div className={`px-16 py-4 rounded-md border ${selectedPayment === 'card' ? 'border-2 border-gray-800' : 'border-gray-300'} bg-white`}>
                    <CreditCardIcon className="h-6 w-6 text-gray-700 mx-auto" />
                    <span className='font-playfair tracking-wide'>Card</span>
                  </div>
                </label>
                <label className="flex items-center justify-center space-x-2 cursor-pointer">
                  <input type="radio" value="paypal" checked={selectedPayment === 'paypal'} onChange={() => setSelectedPayment('paypal')} className="sr-only" />
                  <div className={`px-16 py-4 rounded-md border ${selectedPayment === 'paypal' ? 'border-2 border-gray-800' : 'border-gray-300'} bg-white`}>
                    <WalletCardsIcon className="my-1 h-6 w-6 text-gray-700 mx-auto" />
                    <span className='font-playfair'>Wallet</span>
                  </div>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" value="apple" checked={selectedPayment === 'apple'} onChange={() => setSelectedPayment('apple')} className="sr-only" />
                  <div className={`px-16 py-4 rounded-md border ${selectedPayment === 'apple' ? 'border-2 border-gray-800' : 'border-gray-300'} bg-white`}>
                    <DollarSignIcon className="mb-3 h-6 w-6 text-gray-700 mx-auto" />
                    <span className='font-playfair'>Cash</span>
                  </div>
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" placeholder="First Last" value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded-md py-2 px-4" />
            </div>
            <div>
              <label htmlFor="number" className="block text-sm font-medium text-gray-700">Card number</label>
              <input type="text" id="number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className="w-full border rounded-md py-2 px-4" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label htmlFor="month" className="block text-sm font-medium text-gray-700">Expires</label>
                <select id="month" value={expiryMonth} onChange={(e) => setExpiryMonth(e.target.value)} className="w-full border rounded-md py-2 px-4">
                  <option value="">Month</option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </div>
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
                <select id="year" value={expiryYear} onChange={(e) => setExpiryYear(e.target.value)} className="w-full border rounded-md py-2 px-4">
                  <option value="">Year</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                </select>
              </div>
              <div>
                <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC</label>
                <input type="text" id="cvc" placeholder="CVC" value={cvc} onChange={(e) => setCvc(e.target.value)} className="w-full border rounded-md py-2 px-4" />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button className="w-full bg-gray-800 text-white py-2 px-4 rounded-md">Continue</button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-4 border border-gray-300">
        <div className="border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold">Tour Details</h2>
        </div>
        <img src="/placeholder.svg" width={600} height={400} alt="Tour Image" className="rounded-lg mb-4" />
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Acme Mountain Retreat</h3>
            <div className="text-2xl font-bold">$400</div>
          </div>
          <p className="text-gray-600">
            Escape to our cozy mountain retreat, nestled in the heart of the Rockies. Enjoy breathtaking views, a
            private hot tub, and all the amenities you need for a relaxing getaway.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="space-y-1">
            <div className="text-gray-600">Price per night</div>
            <div className="text-lg font-semibold">$400</div>
          </div>
          <div className="space-y-1">
            <div className="text-gray-600">Nights</div>
            <div className="text-lg font-semibold">5</div>
          </div>
        </div>
        <hr className="my-4 border-gray-300" />
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="text-gray-600">Cleaning fee</div>
            <div className="text-lg font-semibold">$130</div>
          </div>
          <div className="space-y-1">
            <div className="text-gray-600">Personal charges</div>
            <div className="text-lg font-semibold">$50</div>
          </div>
        </div>
        <hr className="my-4 border-gray-300" />
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">Total</div>
          <div className="text-2xl font-bold">$2,130</div>
        </div>
      </div>
    </div>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function WalletCardsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
      <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" />
    </svg>
  );
}
