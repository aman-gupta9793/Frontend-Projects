const counters = document.querySelectorAll(".counter");

console.log(counters);

counters.forEach((counter) => {
  counter.innerText = "0";

  let target = +counter.getAttribute("data-target");
  console.log(target);

  let count = 0;

  function incrementCounter() {
    if (count < target) {
      count++;
      counter.innerText = count;
      setInterval(incrementCounter, 1);
    } else {
      counter.innerText = target;
    }
  }
  incrementCounter();
});
