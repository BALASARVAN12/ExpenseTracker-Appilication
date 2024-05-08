import React from 'react';
import Image from 'next/image';

function HomePage() {
  return (
    <section className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl px-6 py-12 bg-white rounded-lg shadow-xl w-full md:w-4/5 lg:w-3/5">
        <h1 className="text-4xl font-bold text-center text-primary mb-6">
          Welcome to Expense Tracker
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8">
          Take control of your finances and manage your expenses effectively.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center">
          <div className="text-center">
            <Image
              src="/image.png"
              alt="Dashboard"
              width={500}
              height={350}
              className="rounded-lg shadow"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Track Your Expenses
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Start creating your budget, track your spending, and save money.
            </p>
            <a
              href="/sign-in"
              className="block w-full max-w-xs mx-auto rounded-lg bg-primary text-white py-3 px-6 text-lg font-semibold shadow-md transition duration-300 ease-in-out hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
