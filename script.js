// Data for Search
const directoryData = [
    { name: "Alcohol Care Team", number: "07778 932154", type: "Ext" },
    { name: "Ambulance Assessment (BHH)", number: "40894", type: "Ext" },
    { name: "Anticoagulation Team", number: "2456", type: "Bleep" },
    { name: "Ask A&E (BHH)", number: "40300 / 43265", type: "Ext" },
    { name: "Bed Managers (BHH)", number: "42033", type: "Ext" },
    { name: "Bereavement Office (BHH)", number: "41349", type: "Ext" },
    { name: "Blood Bank (BHH)", number: "40673", type: "Ext" },
    { name: "Blood Bank (Issue) (BHH)", number: "40674", type: "Ext" },
    { name: "Burns & Plastics (BHH)", number: "42477", type: "Ext" },
    { name: "Cardiology SpR (BHH)", number: "2331", type: "Bleep" },
    { name: "Cashiers (BHH)", number: "40621", type: "Ext" },
    { name: "Chaplaincy (BHH)", number: "41369", type: "Ext" },
    { name: "Children's ED (BHH) - Nurses Station", number: "42274", type: "Ext" },
    { name: "Children's ED (BHH) - Reception", number: "40481", type: "Ext" },
    { name: "Clinical Coding (BHH)", number: "43703", type: "Ext" },
    { name: "Crisis Team (Mental Health) (BHH)", number: "0121 301 5500", type: "Ext" },
    { name: "CT Scanner (BHH)", number: "41289", type: "Ext" },
    { name: "Dermatology (BHH)", number: "40492", type: "Ext" },
    { name: "Diabetes Team (BHH)", number: "42387", type: "Ext" },
    { name: "Dietetics (BHH)", number: "42668", type: "Ext" },
    { name: "Discharge Lounge (BHH)", number: "42323", type: "Ext" },
    { name: "Discharge Team (BHH)", number: "42292", type: "Ext" },
    { name: "District Nursing (BHH)", number: "0300 555 1919", type: "Ext" },
    { name: "Drug & Alcohol Services (BHH)", number: "0121 301 4141", type: "Ext" },
    { name: "Early Pregnancy Unit (EPU) (BHH)", number: "43508", type: "Ext" },
    { name: "Eating Disorders (BHH)", number: "0121 301 2400", type: "Ext" },
    { name: "ED Consultants (BHH)", number: "via switchboard", type: "Ext" },
    { name: "ED Secretaries (BHH)", number: "40679", type: "Ext" },
    { name: "ENT SHO (BHH)", number: "3124", type: "Bleep" },
    { name: "Equipment Library (BHH)", number: "40660", type: "Ext" },
    { name: "Estates (BHH)", number: "40666", type: "Ext" },
    { name: "Fracture Clinic (BHH)", number: "40490", type: "Ext" },
    { name: "Gastroenterology SpR (BHH)", number: "via switchboard", type: "Ext" },
    { name: "General Surgery SpR (BHH)", number: "3125", type: "Bleep" },
    { name: "Gynae SpR (BHH)", number: "3193", type: "Bleep" },
    { name: "Haematology SpR (BHH)", number: "2456", type: "Bleep" },
    { name: "Homeless Team (BHH)", number: "0121 303 7410", type: "Ext" },
    { name: "Infectious Diseases (BHH)", number: "42595", type: "Ext" },
    { name: "IT Service Desk (BHH)", number: "41130", type: "Ext" },
    { name: "Labs (Biochemistry) (BHH)", number: "40652", type: "Ext" },
    { name: "Labs (Haematology) (BHH)", number: "40656", type: "Ext" },
    { name: "Labs (Microbiology) (BHH)", number: "40662", type: "Ext" },
    { name: "Legal Services (BHH)", number: "40632", type: "Ext" },
    { name: "Library (BHH)", number: "40637", type: "Ext" },
    { name: "MaxFax (BHH)", number: "via switchboard", type: "Ext" },
    { name: "Medical Illustrations (BHH)", number: "40640", type: "Ext" },
    { name: "Medical Registrar (RMO) (BHH)", number: "1085", type: "Bleep" },
    { name: "Microbiology Advice (BHH)", number: "via switchboard", type: "Ext" },
    { name: "Mortuary (BHH)", number: "40644", type: "Ext" },
    { name: "MRI Scanner (BHH)", number: "41290", type: "Ext" },
    { name: "Neurology SpR (BHH)", number: "via switchboard", type: "Ext" },
    { name: "Neurosurgery (QEHB) (BHH)", number: "via switchboard", type: "Ext" },
    { name: "Obstetrics SpR (BHH)", number: "via switchboard", type: "Ext" },
    { name: "Occupational Health (BHH)", number: "40648", type: "Ext" },
    { name: "Oncology (BHH)", number: "42444", type: "Ext" },
    { name: "Ophthalmology (BHH)", number: "40492", type: "Ext" },
    { name: "Orthopaedics SpR (BHH)", number: "3010", type: "Bleep" },
    { name: "Outpatients (BHH)", number: "40650", type: "Ext" },
    { name: "Paediatrics SpR (BHH)", number: "2468", type: "Bleep" },
    { name: "Pain Team (BHH)", number: "42329", type: "Ext" },
    { name: "Palliative Care (BHH)", number: "42330", type: "Ext" },
    { name: "Patient Transport (BHH)", number: "40664", type: "Ext" },
    { name: "Pharmacy (BHH)", number: "40668", type: "Ext" },
    { name: "Phlebotomy (BHH)", number: "40670", type: "Ext" },
    { name: "Physiotherapy (BHH)", number: "40672", type: "Ext" },
    { name: "Plastics (BHH)", number: "42477", type: "Ext" },
    { name: "Police (BHH)", number: "101", type: "Ext" },
    { name: "Porters (BHH)", number: "40676", type: "Ext" },
    { name: "Psych Liaison (BHH)", number: "3344", type: "Bleep" },
    { name: "Radiography (X-ray) (BHH)", number: "40680", type: "Ext" },
    { name: "Rape Crisis (BHH)", number: "0121 643 4136", type: "Ext" },
    { name: "Renal SpR (BHH)", number: "via switchboard", type: "Ext" },
    { name: "Respiratory SpR (BHH)", number: "via switchboard", type: "Ext" },
    { name: "Resus Training (BHH)", number: "40684", type: "Ext" },
    { name: "Rheumatology (BHH)", number: "42385", type: "Ext" },
    { name: "Safeguarding Adults (BHH)", number: "42388", type: "Ext" },
    { name: "Safeguarding Children (BHH)", number: "42389", type: "Ext" },
    { name: "Security (BHH)", number: "42999", type: "Ext" },
    { name: "Sepsis Team (BHH)", number: "2777", type: "Bleep" },
    { name: "Sexual Health (BHH)", number: "0121 371 5220", type: "Ext" },
    { name: "Social Services (BHH)", number: "40688", type: "Ext" },
    { name: "Solar (CAMHS) (BHH)", number: "0121 301 2750", type: "Ext" },
    { name: "Solihull MIU / Minor Injuries Unit - Lead ENP", number: "07917 957287", type: "Ext" },
    { name: "Specialist Palliative Urgent Response (SPUR) / Hospice / End of life", number: "0121 809 1900 / 0300 555 1919", type: "Ext" },
    { name: "Stroke Team (BHH)", number: "42392", type: "Ext" },
    { name: "Switchboard (BHH)", number: "0", type: "Ext" },
    { name: "Theatres (BHH)", number: "40692", type: "Ext" },
    { name: "Urology SpR (BHH)", number: "via switchboard", type: "Ext" },
    { name: "Vascular SpR (BHH)", number: "via switchboard", type: "Ext" },
    { name: "Resus Access", number: "40894", type: "Code" },
    { name: "Staff Lounge", number: "C2679X", type: "Code" },
    { name: "Middle Grade Room", number: "C4590Z", type: "Code" },
    { name: "Minors Staff Room", number: "C6235Y", type: "Code" },
    { name: "Minors Clinical", number: "C1267Y", type: "Code" },
    { name: "Majors C Kitchen", number: "C2675X", type: "Code" },
    { name: "Staff Toilets", number: "C457XY", type: "Code" }
];

// --- Dark Mode Logic ---
function toggleDarkMode() {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        document.getElementById('darkModeIcon').classList.remove('fa-sun');
        document.getElementById('darkModeIcon').classList.add('fa-moon');
        document.getElementById('darkModeIconMobile').classList.remove('fa-sun');
        document.getElementById('darkModeIconMobile').classList.add('fa-moon');
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        document.getElementById('darkModeIcon').classList.remove('fa-moon');
        document.getElementById('darkModeIcon').classList.add('fa-sun');
        document.getElementById('darkModeIconMobile').classList.remove('fa-moon');
        document.getElementById('darkModeIconMobile').classList.add('fa-sun');
    }
}

// Check preference on load
function initDarkMode() {
    const theme = localStorage.getItem('theme');
    const html = document.documentElement;
    
    // Check if user has saved preference OR has system dark mode preference
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
        const icon = document.getElementById('darkModeIcon');
        if(icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
        const mobileIcon = document.getElementById('darkModeIconMobile');
        if(mobileIcon) {
            mobileIcon.classList.remove('fa-moon');
            mobileIcon.classList.add('fa-sun');
        }
    }
}


// --- Lucide Icons Logic ---
function initLucideIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    } else {
        console.warn('Lucide icons library not found, icons may be missing.');
        setTimeout(() => {
            if (typeof lucide !== 'undefined') lucide.createIcons();
        }, 1000);
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initLucideIcons();
    initDarkMode();
    showSection('dashboard');
});

// Section Navigation Logic
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section-content').forEach(el => {
        el.classList.add('hidden');
        el.classList.remove('fade-in');
    });

    // Show selected section
    const selected = document.getElementById(sectionId);
    if(selected) {
        selected.classList.remove('hidden');
    }
    
    // Update Active Button State
    updateNavButtons(sectionId);
    
    // Re-initialize icons if switching to 'who-sees-who'
    if (sectionId === 'who-sees-who') {
        initLucideIcons();
    }

    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobile-menu');
    if(mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
}

function updateNavButtons(activeId) {
    // List of all nav button IDs
    const navIds = ['dashboard', 'contacts', 'who-sees-who', 'clinical', 'admin', 'education'];
    
    navIds.forEach(id => {
        const btn = document.getElementById(`nav-${id}`);
        if(btn) {
            if(id === activeId) {
                btn.classList.add('bg-blue-900', 'dark:bg-slate-800', 'shadow-inner');
            } else {
                btn.classList.remove('bg-blue-900', 'dark:bg-slate-800', 'shadow-inner');
            }
        }
    });
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Accordion Logic
function toggleAccordion(id) {
    const content = document.getElementById(`content-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.classList.add('rotate-180');
    } else {
        content.classList.add('hidden');
        icon.classList.remove('rotate-180');
    }
}

// Directory Search Logic
function filterDirectory() {
    const input = document.getElementById('directorySearch').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    if (input.length < 1) {
        resultsContainer.innerHTML = '<div class="text-sm text-gray-400 italic">Type above to search bleeps, extensions, and teams.</div>';
        return;
    }

    const filtered = directoryData.filter(item => 
        item.name.toLowerCase().includes(input) || 
        item.number.includes(input)
    );

    if (filtered.length === 0) {
        resultsContainer.innerHTML = '<div class="text-sm text-gray-500 dark:text-gray-400">No results found.</div>';
        return;
    }

    filtered.forEach(item => {
        const div = document.createElement('div');
        div.className = 'flex justify-between items-center p-2 hover:bg-blue-50 dark:hover:bg-slate-700 rounded border border-gray-100 dark:border-slate-600 transition-colors';
        div.innerHTML = `
            <span class="text-sm font-medium text-gray-700 dark:text-gray-200">${item.name}</span>
            <span class="text-xs font-mono font-bold ${getBadgeColor(item.type)} px-2 py-1 rounded">${item.number} <span class="opacity-50 ml-1 text-[10px] uppercase">${item.type}</span></span>
        `;
        resultsContainer.appendChild(div);
    });
}

// Guideline Search Logic (Who Sees Who)
const guidelineSearchInput = document.getElementById('guidelineSearch');
if (guidelineSearchInput) {
    guidelineSearchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('#who-sees-who .card'); // Scope to the tab

        cards.forEach(card => {
            const content = card.querySelector('.search-content').innerText.toLowerCase();
            const title = card.querySelector('h2').innerText.toLowerCase();
            
            if (content.includes(term) || title.includes(term)) {
                card.style.display = 'block';
                // Reset standard grid/masonry display if needed, block usually works
            } else {
                card.style.display = 'none';
            }
        });

        if (term === '') {
            cards.forEach(card => {
                card.style.display = 'block'; 
            });
        }
    });
}

function getBadgeColor(type) {
    if (type === 'Code') return 'bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300';
    if (type === 'Bleep') return 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300';
    return 'bg-gray-100 dark:bg-slate-600 text-gray-800 dark:text-gray-200';
}
