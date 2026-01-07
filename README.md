# Nodes Portal - Web3 Communication Protocol

A modern, fully responsive Web3 portal enabling secure communication between wallets and dApps. Built with HTML5, CSS3, and vanilla JavaScript. Deployed on Netlify.

## Live Demo

View the live version: [https://nodes-portal.netlify.app](https://nodes-portal.netlify.app)

## Features

- **Modern Dark Theme** - Beautiful dark UI with blue accent colors
- **Responsive Design** - Mobile-first approach, works on all devices
- **Live Crypto Ticker** - Real-time cryptocurrency price data
- **Wallet Integration** - 60+ wallet options for connection
- **Quick Start Cards** - Easy navigation to common features
- **Smooth Animations** - Intersection Observer for scroll effects
- **Zero Dependencies** - Pure HTML, CSS, JavaScript

## Project Structure

```
nodes-portal/
├── index.html              # Homepage with hero and features
├── connection.html         # Wallet connection page
├── styles/
│   └── style.css          # All styling (responsive design)
├── js/
│   ├── main.js            # Main page functionality
│   └── wallets.js         # Wallet grid rendering
└── README.md              # This file
```

## Pages

### Home Page (index.html)
- Hero section with tagline
- Live cryptocurrency ticker
- Quick Start feature cards
- Distribution statistics
- Call-to-action sections

### Connection Page (connection.html)
- Wallet selection grid
- 60+ wallet integration options
- Responsive grid layout

## Installation & Setup

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/V-Prox7/nodes-portal.git
   cd nodes-portal
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - No build process required!
   - No npm packages to install

3. **Local server (optional)**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js
   npx http-server
   ```
   Then visit: `http://localhost:8000`

## Deployment on Netlify

### Step 1: Push Code to GitHub

1. Initialize git (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Nodes Portal"
   ```

2. Add remote repository
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/nodes-portal.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Connect to Netlify

1. **Go to Netlify**
   - Visit [https://netlify.com](https://netlify.com)
   - Sign up or log in with GitHub

2. **Create New Site**
   - Click "Add new site"
   - Select "Import an existing project"
   - Choose "GitHub"

3. **Authorize GitHub**
   - Click "Authorize Netlify"
   - Select your repository (nodes-portal)

4. **Configure Build Settings**
   - **Base directory**: Leave empty
   - **Publish directory**: `.` (root directory)
   - **Build command**: Leave empty (no build needed)
   
5. **Deploy**
   - Click "Deploy site"
   - Wait for deployment to complete
   - Your site is now live!

### Step 3: Custom Domain (Optional)

1. Go to **Site settings** > **Domain management**
2. Click **Add custom domain**
3. Enter your domain
4. Follow DNS configuration instructions

## Customization

### Update Site Name

1. **In HTML files:**
   - Change `<title>Nodes Portal</title>` to your site name
   - Update `.logo` text in navbar

2. **Update Colors:**
   - Edit `:root` variables in `styles/style.css`
   - Change `--primary-color`, `--dark-bg`, etc.

### Add More Wallets

1. Edit `js/wallets.js`
2. Add wallet objects to the `wallets` array:
   ```javascript
   { name: 'MetaMask', icon: 'MM' },
   { name: 'Coinbase', icon: 'CB' },
   // ... add more
   ```

### Modify Features

1. Edit Quick Start cards in `index.html`
2. Change section contents and styling
3. Update CSS in `styles/style.css`

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Grid, Flexbox, Animations, Gradients
- **JavaScript (ES6)** - DOM manipulation, Event listeners
- **Netlify** - Hosting and deployment
- **GitHub** - Version control

## Performance Features

- No external CDN dependencies
- Optimized CSS with media queries
- Smooth animations with CSS transforms
- Lightweight JavaScript (pure vanilla)
- Responsive images and layouts

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Wallet Integration Guide

To implement actual wallet connections, add Web3.js or Ethers.js:

```javascript
// Example with ethers.js
const connectWallet = async (walletName) => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    console.log("Connected:", accounts[0]);
  } catch (error) {
    console.error("Connection failed:", error);
  }
};
```

For Web3Modal integration:
```bash
npm install @web3modal/ethers ethers
```

## Troubleshooting

### Site not appearing on Netlify
- Clear browser cache
- Check build logs in Netlify dashboard
- Ensure repository is public

### CSS not loading
- Check file paths in HTML
- Ensure `styles/style.css` exists
- Clear Netlify cache and redeploy

### Wallet grid not showing
- Check browser console for errors
- Verify `js/wallets.js` is loaded
- Check element IDs in HTML match JavaScript

## Future Enhancements

- [ ] Real Web3 wallet integration (Web3Modal)
- [ ] Backend API for blockchain data
- [ ] Admin dashboard
- [ ] User authentication
- [ ] Transaction history
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Progressive Web App (PWA)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - feel free to use for personal and commercial projects

## Support

For issues and questions:
- Open an issue on GitHub
- Check existing documentation
- Review the deployment guide above

## Author

Created as a Web3 portal template for blockchain developers.

---

**Get Started:** Fork this repository, push to GitHub, and deploy to Netlify in minutes!
