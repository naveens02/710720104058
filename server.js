const express = require("express");
const app = express();

app.use(express.json());

const oddNumbers = [];
const evenNumbers = [0];
const primeNumbers = [];
const fibonacciNumbers = [0, 1];

var i = 0;

app.get("/numbers/navfibonacci/:n", (req, res) => {
  const n = req.params.n;

  
  for (i = 2; i <= n; i++) {
    fibonacciNumbers[i] = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
  }
  
  res.json(fibonacciNumbers);
});

app.get("/numbers/navprimes/:n", (req, res) => {
  const n = req.params.n;
  
  
  for (i = 2; i < n; i++) {
    let isPrime = true;
    
    for (j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    
    if (isPrime) {
      primeNumbers.push(i);
    }
  }

  res.send(primeNumbers);
});

app.get("/numbers/navevens/:n", (req, res) => {
  const n = req.params.n;
  
  
  for (i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  
  res.json(evenNumbers);
});

app.get("/numbers/navodds/:n", (req, res) => {
  const n = req.params.n;
  
  
  for (i = 1; i < n; i++) {
    if (i % 2 !== 0) {
      oddNumbers.push(i);
    }
  }
  
  res.send(oddNumbers);
});

app.listen(5000);
