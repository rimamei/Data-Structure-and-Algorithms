// O(n)

const shoes = ["shoes"];
const brand = [
  "adidas",
  "reebook",
  "nike",
  "nuovo",
  "converse",
  "vans",
  "puma",
  "superga",
  "league",
  "piero",
  "prodo",
  "amble",
];

const large = new Array(100000).fill('shoes')

function findShoes(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "shoes") { 
      console.log("Found the shoes!");
    }
  }
  let t1 = performance.now();
  console.log(`Call to find the shoes took ${t1 - t0} ms`);
}

findShoes(large);
findShoes(shoes);
findShoes(brand);
