// Creează containerul pentru omuleț
const omulet = document.createElement('div');
omulet.id = 'omuletContainer';

// Adaugă imaginea sau emoji-ul unui omuleț
omulet.innerHTML = '👤'; // Poți înlocui cu o imagine <img> dacă vrei

// Stilizare omuleț (poziție, dimensiuni, etc.)
Object.assign(omulet.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    cursor: 'pointer',
    zIndex: 1000
});

// Eveniment la click (exemplu: alertă)
omulet.addEventListener('click', () => {
    alert('Salut! Eu sunt Virtual Catalin :)');
});

// Adaugă în body
document.body.appendChild(omulet);
