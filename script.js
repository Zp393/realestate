  const searchInput = document.getElementById('searchInput');
  const locationFilter = document.getElementById('locationFilter');
  const priceFilter = document.getElementById('priceFilter');
  const rfoToggle = document.getElementById('rfoToggle');
  const resetBtn = document.getElementById('resetBtn');
  const cards = document.querySelectorAll('.property-card');

  function filterProperties() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedLocation = locationFilter.value;
    const selectedPrice = priceFilter.value;
    const rfoOnly = rfoToggle.checked;

    cards.forEach(card => {
      const title = card.querySelector('h2').textContent.toLowerCase();
      const location = card.getAttribute('data-location');
      const price = card.getAttribute('data-price');
      const isRfo = card.getAttribute('data-rfo') === 'yes';

      const matchesSearch = title.includes(searchTerm);
      const matchesLocation = !selectedLocation || location === selectedLocation;
      const matchesPrice = !selectedPrice || price === selectedPrice;
      const matchesRFO = !rfoOnly || isRfo;

      if (matchesSearch && matchesLocation && matchesPrice && matchesRFO) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Event Listeners
  searchInput.addEventListener('input', filterProperties);
  locationFilter.addEventListener('change', filterProperties);
  priceFilter.addEventListener('change', filterProperties);
  rfoToggle.addEventListener('change', filterProperties);

  // Reset filters
  resetBtn.addEventListener('click', () => {
    searchInput.value = '';
    locationFilter.value = '';
    priceFilter.value = '';
    rfoToggle.checked = false;
    filterProperties();
  });

