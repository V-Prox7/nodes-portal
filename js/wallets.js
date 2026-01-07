// Wallet list data
const wallets = [
    { name: 'Metamask', icon: 'M' },
    { name: 'Coinbase', icon: 'C' },
    { name: 'Ledger', icon: 'L' },
    { name: 'Trust Wallet', icon: 'T' },
    { name: 'Rabby', icon: 'R' },
    { name: 'Uniswap', icon: 'U' },
    { name: 'Phantom', icon: 'P' },
    { name: 'Zerion', icon: 'Z' },
    { name: 'Binance', icon: 'B' },
    { name: 'Exodus', icon: 'E' },
    { name: 'Rainbow', icon: 'RW' },
    { name: 'Gnosis Safe', icon: 'G' },
    { name: 'imToken', icon: 'I' },
    { name: 'TokenPocket', icon: 'TP' },
    { name: 'OKX Wallet', icon: 'O' },
    { name: 'Bitget Wallet', icon: 'BW' }
];

// Function to render wallet grid
function renderWallets() {
    const walletGrid = document.getElementById('walletGrid');
    
    if (!walletGrid) return;
    
    walletGrid.innerHTML = '';
    
    wallets.forEach(wallet => {
        const walletBtn = document.createElement('button');
        walletBtn.className = 'wallet-btn';
        walletBtn.innerHTML = '<div class="wallet-icon">' + wallet.icon + '</div><div class="wallet-name">' + wallet.name + '</div>';
        walletBtn.addEventListener('click', () => connectWallet(wallet.name));
        walletGrid.appendChild(walletBtn);
    });
}

// Function to handle wallet connection
function connectWallet(walletName) {
    alert('Connecting to ' + walletName + '...\nThis is a demo. In production, integrate Web3.js or Ethers.js');
    console.log('Attempting to connect ' + walletName);
    
    // Here you would implement actual wallet connection logic
    // Example with Web3Modal or wagmi
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderWallets);
} else {
    renderWallets();
}

console.log('Wallet connection script loaded successfully!');
