function aceitarCookies() {
    // Define um cookie com o nome 'cookie-aceito' e o valor 'true' por 30 dias
    document.cookie = 'cookie-aceito=true;expires=' + new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
    // Oculta o aviso de cookie
    document.getElementById('cookie-notice').style.display = 'none';
  }

  function recusarCookies() {
    // Define um cookie com o nome 'cookie-recusado' e o valor 'true' por 30 dias
    document.cookie = 'cookie-recusado=true;expires=' + new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
    // Oculta o aviso de cookie
    document.getElementById('cookie-notice').style.display = 'none';
    // Você pode adicionar aqui código adicional para lidar com a recusa de cookies, se necessário
  }

  // Verifica se o cookie 'cookie-aceito' existe quando a página é carregada
  if (document.cookie.indexOf('cookie-aceito=true') > -1) {
    // Oculta o aviso de cookie
    document.getElementById('cookie-notice').style.display = 'none';
  }