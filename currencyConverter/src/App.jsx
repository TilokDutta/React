import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from '../hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount,setAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState("usd")
  const [toCurrency, setToCurrency] = useState("inr")
  const [convertedAmount,setConvertedAmount] = useState(0)

const currencyInfo = useCurrencyInfo(fromCurrency)

const options = Object.keys(currencyInfo)

const swap = () =>{
  setFromCurrency(toCurrency)
  setToCurrency(fromCurrency)
  setAmount(convertedAmount)
  setConvertedAmount(amount)

}

const convert = () => {
  setConvertedAmount(amount * currencyInfo[toCurrency])
}
return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://media.istockphoto.com/id/2151866577/photo/indian-rupees-symbol-on-stock-market-background.jpg?s=2048x2048&w=is&k=20&c=dotUApftIlVLrIqNYv2-Hj_StOoN6j4lhGbNC08gNc0=')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      convert()
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          currencyOptions = {options}
                          onCurrencyChange={(currency) => setAmount(currency)}
                          selectCurrency={fromCurrency}
                          onAmountChange={(amount) => setAmount(amount)}
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount={convertedAmount}
                          currencyOptions = {options}
                          onCurrencyChange={(currency) => setToCurrency(currency)}
                          selectCurrency={toCurrency}
                          amountDisabled
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
