import React from "react"
export default function Header() {
  return (
    <header 
      className="flex flex-col item-center max-w-7xl h-64 m-auto text-center bg-[url('/images/pattern-bg-mobile.png')] bg-no-repeat bg-center bg-cover lg:bg-[url('/images/pattern-bg-desktop.png')]"
    >
      <h1 className="mt-8 text-2xl text-white">IP Address Tracker</h1>
      <div className="mt-8 flex align-center mx-auto w-4/5 sm:w-1/2">
        <input 
          type="text"
          className="px-8 bg-white w-full rounded-l-xl"
          placeholder="Search for any IP address or domain"
        />
        <button type="submit" className="w-13 h-13 text-white bg-[var(--darker-gray)] rounded-r-xl">
          <p>{`>`}</p>
        </button>
      </div>
    </header>
  )
}
