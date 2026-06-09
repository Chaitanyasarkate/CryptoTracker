# CryptoTracker - Real-time Cryptocurrency Price Tracker

A modern, fully-functional cryptocurrency price tracker web application with live prices, market data, and beautiful UI.

## Features

✅ **Live Cryptocurrency Prices** - Real-time data from CoinGecko API  
✅ **8 Major Cryptocurrencies** - Bitcoin, Ethereum, Dogecoin, Cardano, Solana, Ripple, Polkadot, Litecoin  
✅ **24h Price Changes** - Shows percentage change with color indicators (green/red)  
✅ **Market Data** - Market cap and 24h trading volume for each coin  
✅ **Auto-refresh** - Prices update every 30 seconds automatically  
✅ **Beautiful UI** - Modern glassmorphism design with smooth animations  
✅ **Fully Responsive** - Works perfectly on desktop, tablet, and mobile  
✅ **Error Handling** - Graceful error messages if API is unavailable  
✅ **Loading States** - Loading spinners while fetching data  

## Project Structure

```
crypto/
├── index.html          # Main HTML file with semantic structure
├── styles.css          # Complete styling with animations & responsiveness
├── script.js           # JavaScript for API integration & functionality
├── images/
│   ├── background.png  # Hero section background
│   ├── logo.png        # Brand logo
│   ├── bitcoin.png     # Bitcoin icon
│   ├── ethereum.png    # Ethereum icon
│   └── dogecoin.png    # Dogecoin icon
└── README.md          # This file
```

## How to Run

### Option 1: Direct File Open (Simple)
1. Navigate to the project folder
2. Double-click `index.html` to open in your default browser

### Option 2: Local Server (Recommended)
Run any of these commands from the project directory:

**Using Node.js:**
```bash
npx http-server -p 8000
```

**Using Python 3:**
```bash
python -m http.server 8000
```

**Using Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

Then open: **http://localhost:8000**

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations, gradients, and glassmorphism
- **JavaScript (ES6+)** - Async/await for API calls
- **API** - CoinGecko API (free, no authentication required)
- **Responsive Design** - Mobile-first approach with media queries

## API Integration

The app uses the **CoinGecko API** (free tier):
- **Endpoint**: `https://api.coingecko.com/api/v3/coins/markets`
- **No Authentication**: Free to use, no API key required
- **Rate Limit**: 10-50 calls/minute (sufficient for this app)
- **Update Interval**: 30 seconds (configurable in script.js)

## Features Explained

### Live Price Showcase
The hero section displays the top 3 cryptocurrencies with:
- Real-time current price
- 24h percentage change
- Color-coded indicators (green for positive, red for negative)

### Prices Section
Full grid view of 8 cryptocurrencies showing:
- Current price in USD
- 24h percentage change with trend arrow
- Market capitalization
- 24h trading volume
- Animated cards with hover effects

### Auto-Refresh
Prices automatically update every 30 seconds without manual refresh

### Error Handling
If the API is unavailable:
- User-friendly error message displayed
- Retry happens automatically every 30 seconds
- No broken layout or console errors

## Browser Compatibility

✅ Chrome/Edge 88+  
✅ Firefox 87+  
✅ Safari 14+  
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Change Update Interval
Edit `script.js` line 47:
```javascript
setInterval(fetchCryptoPrices, 30000); // Change 30000 to desired milliseconds
```

### Add More Cryptocurrencies
Edit `script.js` line 4:
```javascript
const COINS = ['bitcoin', 'ethereum', 'dogecoin', 'cardano', 'solana', 'ripple', 'polkadot', 'litecoin', 'your-new-coin'];
```

### Change Colors
Edit `styles.css` lines 8-15:
```css
--primary: #ff960b;      /* Orange accent */
--success: #00d4aa;      /* Green for gains */
--danger: #ff6b6b;       /* Red for losses */
```

## Performance Optimization

- ✅ Minimal CSS (no unnecessary frameworks)
- ✅ Vanilla JavaScript (no jQuery dependency)
- ✅ Efficient DOM updates
- ✅ CSS animations at 60fps
- ✅ Lazy loading for images
- ✅ Optimized API calls

## Troubleshooting

### Prices not updating?
1. Check internet connection
2. Open browser console (F12) for errors
3. Verify API is accessible: `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`

### Images not showing?
- Ensure image files are in the `images/` folder
- Check file names match exactly (case-sensitive on some systems)

### Styles not applied?
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

## Future Enhancements

- [ ] Price history charts using Chart.js
- [ ] Favorites/watchlist feature
- [ ] Dark/Light mode toggle
- [ ] Convert prices to multiple currencies
- [ ] Historical price data
- [ ] Trading pair support
- [ ] PWA (Progressive Web App) support
- [ ] Local storage for preferences

## License

Open source - Free to use and modify

## Support

For issues or questions:
1. Check the browser console for error messages
2. Verify API endpoint is accessible
3. Ensure all image files are present

---


