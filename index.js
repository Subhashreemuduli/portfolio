function updateActiveLink() {
  let pathname = window.location.hash; 
  const navLinksElement = document.querySelectorAll('a');

  navLinksElement.forEach((nav_element) => {
    nav_element.classList.remove('active');

    if (nav_element.hash === pathname) {
      nav_element.classList.add('active');
    }
  });
}

window.addEventListener('load', updateActiveLink);

window.addEventListener('hashchange', updateActiveLink);

window.addEventListener('popstate', updateActiveLink);

