// Google Fonts API base URL
const googleFontsAPI = "https://fonts.googleapis.com/css2?family=";

// List of some Google Fonts
const fonts = [
    { name: 'Roboto', family: 'Roboto' },
    { name: 'Open Sans', family: 'Open+Sans' },
    { name: 'Lobster', family: 'Lobster' },
    { name: 'Lato', family: 'Lato' },
    { name: 'Montserrat', family: 'Montserrat' },
    { name: 'Pacifico', family: 'Pacifico' },
    { name: 'Oswald', family: 'Oswald' },
    { name: 'Poppins', family: 'Poppins' },
    { name: 'Raleway', family: 'Raleway' },
    { name: 'Dancing Script', family: 'Dancing+Script' },
    { name: 'Playfair Display', family: 'Playfair+Display' },
    { name: 'Source Sans Pro', family: 'Source+Sans+Pro' },
    { name: 'Merriweather', family: 'Merriweather' },
    { name: 'Bebas Neue', family: 'Bebas+Neue' },
    { name: 'Ubuntu', family: 'Ubuntu' },
    { name: 'Noto Sans', family: 'Noto+Sans' },
    { name: 'Amatic SC', family: 'Amatic+SC' },
    { name: 'Abril Fatface', family: 'Abril+Fatface' },
];

// HTML elements
const userInput = document.getElementById('userInput');
const fontDisplayContainer = document.getElementById('fontDisplayContainer');
const modeToggle = document.getElementById('modeToggle');

// Load Google Fonts dynamically
function loadGoogleFont(fontFamily) {
    const link = document.createElement('link');
    link.href = `${googleFontsAPI}${fontFamily}&display=swap`;
    link.rel = "stylesheet";
    document.head.appendChild(link);
}

// Generate Font Previews
function generateFontPreviews() {
    fontDisplayContainer.innerHTML = ''; // Clear previews
    
    const inputText = userInput.value || "Sample Text"; // Default text

    fonts.forEach(font => {
        loadGoogleFont(font.family); // Load each font dynamically

        // Font preview container
        const fontPreview = document.createElement('div');
        fontPreview.classList.add('font-preview');

        // Font text element
        const fontText = document.createElement('span');
        fontText.classList.add('font-text');
        fontText.style.fontFamily = font.family;
        fontText.textContent = inputText;

        // Copy button
        const copyButton = document.createElement('button');
        copyButton.classList.add('copy-btn');
        copyButton.textContent = 'Copy';
        copyButton.addEventListener('click', () => {
            // Copy the exact font text to clipboard
            navigator.clipboard.writeText(fontText.textContent)
                .then(() => alert(`Copied: "${fontText.textContent}"`))
                .catch(err => console.error('Copy failed:', err));
        });

        // Append elements
        fontPreview.appendChild(fontText);
        fontPreview.appendChild(copyButton);
        fontDisplayContainer.appendChild(fontPreview);
    });
}

// Toggle Dark/Light Mode
modeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
});

// Initialize font previews and default mode
document.body.classList.add('light'); // Start with light mode
generateFontPreviews(); // Generate previews for all fonts

// Update previews on input
userInput.addEventListener('input', generateFontPreviews);
