
<script>
  const serviceCosts = {"Service": {"price": 65.0, "product": 4.82, "utilities": 9.57}, "Bleach Tint": {"price": 30.0, "product": 7.02, "utilities": 6.38}, "Cleanse": {"price": 55.0, "product": 9.22, "utilities": 9.57}, "Hi-Lift": {"price": 35.0, "product": 4.33, "utilities": 3.19}, "Masking": {"price": 55.0, "product": 7.52, "utilities": 6.38}, "Root Melt": {"price": 50.0, "product": 7.52, "utilities": 6.38}, "Root Tint": {"price": 50.0, "product": 7.01, "utilities": 6.38}, "Semi Long": {"price": 46.0, "product": 6.47, "utilities": 4.25}, "Semi Short": {"price": 10.0, "product": 4.94, "utilities": 2.13}, "Colour Bomb": {"price": 25.0, "product": 2.36, "utilities": 1.06}, "K18 to Colour": {"price": 20.0, "product": 2.36, "utilities": 1.06}, "L"oreal Detox": {"price": 30.0, "product": 6.47, "utilities": 19.14}, "Malabu C": {"price": 20.0, "product": 4.82, "utilities": 2.13}, "Revlon Gloss Treat": {"price": 40.0, "product": 5.42, "utilities": 1.06}, "Revlon Scalp Treatment": {"price": 15.0, "product": 2.36, "utilities": 1.06}, "Revlon Scalp Mask": {"price": 10.0, "product": 2.36, "utilities": 2.13}, "Treatment": {"price": 32.0, "product": 9.58, "utilities": 7.44}, "Curly Blowdry": {"price": 17.0, "product": 3.8, "utilities": 6.38}, "Gent Cut": {"price": 17.0, "product": 3.8, "utilities": 6.38}, "Gents Wash and Cut": {"price": 57.0, "product": 9.58, "utilities": 9.57}, "cut blowdry long": {"price": 52.0, "product": 5.25, "utilities": 9.57}, "cut medium": {"price": 47.0, "product": 3.8, "utilities": 9.57}, "cut short": {"price": 37.0, "product": 3.8, "utilities": 6.38}, "oap": {"price": 24.0, "product": 6.69, "utilities": 6.38}, "short blowdry": {"price": 29.0, "product": 10.3, "utilities": 6.38}, "long blowdry": {"price": 27.0, "product": 9.85, "utilities": 6.38}, "medium blowdry": {"price": 65.0, "product": 11.12, "utilities": 9.57}, "1/2 head medium": {"price": 75.0, "product": 12.5, "utilities": 9.57}, "41/2 head long": {"price": 70.0, "product": 15.51, "utilities": 12.76}, "baby lights": {"price": 85.0, "product": 3.24, "utilities": 15.95}, "balyage": {"price": 60.0, "product": 14.56, "utilities": 9.57}, "half head short": {"price": 70.0, "product": 19.39, "utilities": 12.76}, "full head short": {"price": 88.0, "product": 23.37, "utilities": 15.95}, "full headlong": {"price": 45.0, "product": 11.03, "utilities": 9.57}, "upstyle": {"price": 88.0, "product": 13.43, "utilities": 19.14}, "colour change": {"price": 55.0, "product": 5.67, "utilities": 9.57}, "face framing": {"price": 15.0, "product": 6.11, "utilities": 6.38}, "floods": {"price": 50.0, "product": 6.8, "utilities": 6.38}, "tbar long": {"price": 40.0, "product": 6.8, "utilities": 6.38}};

  document.getElementById('serviceName').addEventListener('change', function() {
    const selected = this.value;
    if (serviceCosts[selected]) {
      document.getElementById('servicePrice').value = serviceCosts[selected].price;
      document.getElementById('productCost').value = serviceCosts[selected].product;
      document.getElementById('laborCost').value = (serviceCosts[selected].utilities).toFixed(2);
    }
  });

  document.getElementById('profitForm').addEventListener('submit', function(event) {
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
</script>
