function Header() {
    return (
      <header className="bg-blue-200 w-full py-2 md:py-4 mb-4 flex flex-row justify-between px-4 md:px-6">
        <h1 className='font-bold text-2xl'>
          LLM Price Calculator
        </h1>
        <a href="https://github.com/ravi-sidharth/llm-price-calculator" target="_blank" rel="noreferrer" className='hover:bg-blue-300 py-1 px-2 rounded-md'>
          <img src="github.svg" alt="GitHub" className='w-6 h-6' />
        </a>
      </header>
    )
  }

  export default Header