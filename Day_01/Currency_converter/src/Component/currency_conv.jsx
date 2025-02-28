import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(25000);
  const [fromCurrency, setFromCurrency] = useState('INR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [convertedAmount, setConvertedAmount] = useState(297.25);

  const handleConvert = () => {
    // Placeholder for conversion logic
    // For now, we'll just set a static converted amount
    setConvertedAmount(297.25);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Currency Converter</h1>
        <div className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Amount</label>
            <input
              type="number"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
              placeholder="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">From</label>
            <select
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">To</label>
            <select
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="INR">INR</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
          <button
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-lg"
            onClick={handleConvert}
          >
            Convert
          </button>
          {convertedAmount && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center">
              <p className="text-xl font-semibold">
                {amount} {fromCurrency} = {convertedAmount} {toCurrency}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;