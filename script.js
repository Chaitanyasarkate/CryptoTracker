const API_URL = 'https://api.coingecko.com/api/v3/coins/markets';
const COINS = ['bitcoin', 'ethereum', 'dogecoin', 'cardano', 'solana', 'ripple', 'polkadot', 'litecoin'];
const SHOWCASE_COINS = ['bitcoin', 'ethereum', 'dogecoin'];

let allCoinsData = {};

async function fetchCryptoPrices() {
    try {
        const params = new URLSearchParams({
            vs_currency: 'usd',
            ids: COINS.join(','),
            order: 'market_cap_desc',
            per_page: COINS.length,
            sparkline: false,
            price_change_percentage: '24h'
        });

        const response = await fetch(`${API_URL}?${params}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        data.forEach(coin => {
            allCoinsData[coin.id] = {
                name: coin.name,
                symbol: coin.symbol.toUpperCase(),
                price: coin.current_price,
                change24h: coin.price_change_percentage_24h,
                image: coin.image,
                marketCap: coin.market_cap,
                volume24h: coin.total_volume
            };
        });

        updateShowcase();
        updatePricesGrid();
        updateTimestamp();
        hideErrorMessage();

    } catch (error) {
        console.error('Error fetching prices:', error);
        showErrorMessage('Failed to load prices. Please try again later.');
    }
}

function updateShowcase() {
    const showcase = document.getElementById('coin-showcase');

    let html = '';
    SHOWCASE_COINS.forEach(coinId => {
        const coin = allCoinsData[coinId];
        if (!coin) return;

        const isPositive = coin.change24h >= 0;
        const changeClass = isPositive ? 'positive' : 'negative';
        const changeSymbol = isPositive ? '+' : '';

        html += `
            <div class="coin-card">
                <img src="${coin.image}" alt="${coin.name}" onerror="this.src='images/${coinId}.png'">
                <div class="coin-info">
                    <h3>${coin.name}</h3>
                    <p class="price">$${coin.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    <p class="change ${changeClass}">${changeSymbol}${coin.change24h.toFixed(2)}%</p>
                </div>
            </div>
        `;
    });

    showcase.innerHTML = html;
}

function updatePricesGrid() {
    const grid = document.getElementById('prices-grid');

    let html = '';
    Object.keys(allCoinsData).forEach(coinId => {
        const coin = allCoinsData[coinId];

        const isPositive = coin.change24h >= 0;
        const changeClass = isPositive ? 'positive' : 'negative';
        const changeSymbol = isPositive ? '+' : '';
        const marketCap = coin.marketCap ? `$${(coin.marketCap / 1e9).toFixed(2)}B` : 'N/A';

        html += `
            <div class="price-card">
                <div class="card-header">
                    <img src="${coin.image}" alt="${coin.name}">
                    <div class="card-title">
                        <h3>${coin.name}</h3>
                        <span class="symbol">${coin.symbol}</span>
                    </div>
                </div>
                <div class="card-body">
                    <p class="large-price">$${coin.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    <p class="change ${changeClass}"><span class="arrow">${isPositive ? '▲' : '▼'}</span> ${changeSymbol}${coin.change24h.toFixed(2)}%</p>
                </div>
                <div class="card-footer">
                    <div class="stat">
                        <span class="label">Market Cap</span>
                        <span class="value">${marketCap}</span>
                    </div>
                    <div class="stat">
                        <span class="label">Volume</span>
                        <span class="value">${coin.volume24h ? `$${(coin.volume24h / 1e9).toFixed(2)}B` : 'N/A'}</span>
                    </div>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;
}

function updateTimestamp() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    document.getElementById('update-time').textContent = timeString;
}

function showErrorMessage(message) {
    const errorDiv = document.getElementById('error-message');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
}

function hideErrorMessage() {
    const errorDiv = document.getElementById('error-message');
    errorDiv.style.display = 'none';
}

function refreshPrices() {
    fetchCryptoPrices();
}

document.addEventListener('DOMContentLoaded', function() {
    fetchCryptoPrices();

    setInterval(fetchCryptoPrices, 30000);

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') {
                e.preventDefault();
            }
        });
    });
});
