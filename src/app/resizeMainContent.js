export const resizeMainContent = () => {
    const mainContent = document.getElementById('mainContent');
    if (mainContent) {
      mainContent.style.width = `${window.innerWidth}px`;
      mainContent.style.height = `${window.innerHeight}px`;
    }
  };
  