function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
}

window.onload = async () => {
  console.log('Сайт загружен');

  const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'https://steady-zuccutto-1ad9b2.netlify.app/tonconnect-manifest.json',
    buttonRootId: 'ton-connect-button'
  });

  // Подписка на изменения статуса
  tonConnectUI.onStatusChange(wallet => {
    if (wallet && wallet.account?.address) {
      document.getElementById('wallet-address').innerText = `🔹 Адрес: ${wallet.account.address}`;
    } else {
      document.getElementById('wallet-address').innerText = 'Кошелёк не подключён';
    }
  });
};
