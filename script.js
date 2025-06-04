const serviceCosts = {
  "Bleach Tint": { price: 65.0, product: 4.82, utilities: 9.57 },
  "Cleanse": { price: 30.0, product: 7.02, utilities: 6.38 },
  "Hi-Lift": { price: 55.0, product: 9.22, utilities: 9.57 },
  "Masking": { price: 35.0, product: 4.33, utilities: 3.19 },
  "Root Melt": { price: 55.0, product: 7.52, utilities: 6.38 },
  "Root Tint": { price: 50.0, product: 7.52, utilities: 6.38 },
  "Semi Long": { price: 50.0, product: 7.01, utilities: 6.38 },
  "Semi Short": { price: 46.0, product: 6.47, utilities: 4.25 },
  "Colour Bomb": { price: 10.0, product: 4.94, utilities: 2.13 },
  "K18 to Colour": { price: 25.0, product: 2.36, utilities: 1.06 },
  "Loreal Detox": { price: 20.0, product: 2.36, utilities: 1.06 }
};

document.getElementById('serviceName').addEventListener('change', function () {
  const selected = this.value;
  if (serviceCosts[selected]) {
    document.getElementById('servicePrice').value = serviceCosts[selected].price;
    document.getElementById('productCost').value = serviceCosts[selected].product;
    document.getElementById('laborCost').value = serviceCosts[selected].utilities.toFixed(2);
  }
});

document.getElementById('profitForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const serviceName = document.getElementById('serviceName').value;
  const servicePrice = parseFloat(document.getElementById('servicePrice').value);
  const productCost = parseFloat(document.getElementById('productCost').value);
  const laborCost = parseFloat(document.getElementById('laborCost').value);
  const otherExpenses = parseFloat(document.getElementById('otherExpenses').value);
  const profit = servicePrice - (productCost + laborCost + otherExpenses);
  document.getElementById('profitResult').innerText = profit.toFixed(2);
  document.getElementById('selectedService').innerText = serviceName;
});
