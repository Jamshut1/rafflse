function showSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

// Telegram WebApp + TON Connect
window.onload = async () => {
  const tg = window.Telegram.WebApp;
  tg.expand();

  const username = tg.initDataUnsafe.user?.username || "Гость";
  document.getElementById('username').innerText = username;

  // TonConnect
  const tonConnect = new TonConnect();

  const connectWalletBtn = document.getElementById('connect-wallet');
  const walletAddressEl = document.getElementById('wallet-address');

  connectWalletBtn.addEventListener('click', async () => {
    await tonConnect.connectWallet();

    const wallet = tonConnect.wallet;
    if (wallet?.account) {
      walletAddressEl.innerText = `🔹 Кошелёк: ${wallet.account.address}`;
    } else {
      walletAddressEl.innerText = 'Кошелёк не подключён';
    }
  });
};
