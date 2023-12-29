import { useState } from 'react';
import './App.css';


function App() {
  const [inputValue, setInputValue ] = useState(1345000);
  const [result, setResult] = useState([]);
  const [minusNum, setMinusNum] = useState([]);
  const [primeNum, setPrimeNum] = useState([]);

  const triangle = () => {
    let result = []
    let zeros = []
    const separated = `${inputValue}`.split('')
    console.log(separated, 'separated,,')
    // setResult(inputValue)
    separated.forEach((e, index) => {
      zeros.push('0')
      result.push(`${e + zeros}`)
    })

    let finalResult = []
    result.forEach((e) => {
      finalResult.push(e.split(',').join(''))
    })

    console.log(finalResult, 'result,,,')

    setResult(finalResult);
  }

  const urutanBilanganGanjil = (input) => {
    let hasil = [];
  
    for (let i = 0; i >= -input; i--) {
      if (i % 2 !== 0) {
        hasil.push(i);
      }
    }
  
    setMinusNum(hasil.join(', '))
  }
  

  const primeNumber = (num) => {
    let primes = [];

    for (let number = 2; number <= num; number++) {
      let isPrime = true;

      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        primes.push(number);
      }
    }

    setPrimeNum(primes.join(','))

  }


  return (
    <div className="App">
      <input type='text' value={inputValue} onChange={e => setInputValue(e.target.value)} />

      <div>
        <button onClick={triangle}>Generata segitiga</button>
        <button onClick={() => urutanBilanganGanjil(inputValue)}>Generata bilangan ganjil</button>
        <button onClick={() =>primeNumber(inputValue)}>Generata bilangan prima</button>
      </div>
      <div>
        {result ? result.map((e) => {
          return (
              <div>{e}</div>
          )
        }) : null}
      </div>
      <div>Bilangan ganjil: {minusNum}</div>

      <div>
        Bilangan prima: {primeNum}
      </div>

    </div>
  );
}

export default App;
