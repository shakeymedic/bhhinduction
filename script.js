// Data for Search (Merged from all source files)
const directoryData = [
    // --- Codes ---
    { name: "All Staff Lounge / Locker Room", number: "C2679X / C2790X", type: "Code" },
    { name: "All Staff Break Room (Handover Room)", number: "C230ZY", type: "Code" },
    { name: "Majors C Kitchen", number: "C2675X", type: "Code" },
    { name: "Middle Grade Room (Office)", number: "C4590Z", type: "Code" },
    { name: "Minors Staff Room", number: "C6235Y", type: "Code" },
    { name: "Minors Clinical Rooms", number: "C1267Y", type: "Code" },
    { name: "Staff Toilets", number: "C457XY / C487XY", type: "Code" },
    { name: "Resus Access", number: "40894", type: "Code" },

    // --- Key Internal Numbers (Extensions) ---
    { name: "Majors A Nurse in Charge", number: "42274 / 42263", type: "Ext" },
    { name: "Majors A Reception", number: "42265 / 42257", type: "Ext" },
    { name: "Majors B Nurse in Charge", number: "43166", type: "Ext" },
    { name: "Majors B Desk", number: "40903 / 40274", type: "Ext" },
    { name: "Majors C Nurse Station", number: "41266 / 40273", type: "Ext" },
    { name: "Majors Reception (Main)", number: "43263 / 51636", type: "Ext" },
    { name: "Assessment Point", number: "41272", type: "Ext" },
    { name: "EDAA Reception", number: "40130", type: "Ext" },
    { name: "Paeds Reception", number: "40481 / 52274", type: "Ext" },
    { name: "Resus", number: "40894 / 42136", type: "Ext" },
    { name: "CT Room", number: "41289 / 51761", type: "Ext" },
    { name: "X-Ray Reception", number: "42288 / 41264", type: "Ext" },
    { name: "Duty Radiologist (Ext)", number: "42374 / 40345", type: "Ext" },
    { name: "Halo Office", number: "40741", type: "Ext" },
    { name: "Pathology", number: "41185 / 43842", type: "Ext" },
    { name: "Clinic 9", number: "42477", type: "Ext" },
    { name: "IT Support (24/7)", number: "41130", type: "Ext" },
    { name: "ED IT (Office Hours)", number: "42277", type: "Ext" },
    { name: "Admin Office (Undercroft)", number: "42257", type: "Ext" },
    { name: "Admin Office (Minors)", number: "43091", type: "Ext" },
    { name: "Switchboard", number: "0", type: "Ext" },
    { name: "QE Switchboard (from BHH/GHH)", number: "6248", type: "Ext" },
    { name: "Blood Bank", number: "40673", type: "Ext" },
    { name: "Blood Bank (Issue)", number: "40674", type: "Ext" },
    { name: "Bed Managers (Ext)", number: "42033 / 40483", type: "Ext" },
    { name: "Bereavement Office", number: "41349", type: "Ext" },
    { name: "Cashiers", number: "40621", type: "Ext" },
    { name: "Chaplaincy", number: "41369", type: "Ext" },
    { name: "Clinical Coding", number: "43703", type: "Ext" },
    { name: "Equipment Library", number: "40660", type: "Ext" },
    { name: "Estates", number: "40666 / 42555", type: "Ext" },
    { name: "Fracture Clinic", number: "40490", type: "Ext" },
    { name: "Labs (Biochemistry)", number: "40652", type: "Ext" },
    { name: "Labs (Haematology)", number: "40656", type: "Ext" },
    { name: "Labs (Microbiology)", number: "40662", type: "Ext" },
    { name: "Legal Services", number: "40632", type: "Ext" },
    { name: "Library", number: "40637", type: "Ext" },
    { name: "Medical Illustrations", number: "40640", type: "Ext" },
    { name: "Mortuary", number: "40644", type: "Ext" },
    { name: "Occupational Health", number: "40648", type: "Ext" },
    { name: "Oncology", number: "42444", type: "Ext" },
    { name: "Outpatients", number: "40650", type: "Ext" },
    { name: "Patient Transport", number: "40664", type: "Ext" },
    { name: "Pharmacy", number: "40668 / 42470", type: "Ext" },
    { name: "Phlebotomy", number: "40670", type: "Ext" },
    { name: "Physiotherapy", number: "40672", type: "Ext" },
    { name: "Porters", number: "40676", type: "Ext" },
    { name: "Security", number: "42999", type: "Ext" },
    { name: "Sexual Health", number: "0121 371 5220", type: "Ext" },
    { name: "Social Services", number: "40688", type: "Ext" },
    { name: "Theatres", number: "40692", type: "Ext" },
    { name: "ED Secretaries", number: "40679", type: "Ext" },
    { name: "GAU", number: "43506 / 43505", type: "Ext" },
    { name: "MAU", number: "40191", type: "Ext" },

    // --- Bleeps & Specialty Contacts (Updated from Photo) ---
    { name: "Anaesthetics", number: "1290", type: "Bleep" },
    { name: "Bed Manager (Bleep)", number: "2549", type: "Bleep" },
    { name: "Biochemistry (Bleep)", number: "2529", type: "Bleep" },
    { name: "Cardiac Triage", number: "2331", type: "Bleep" },
    { name: "Duty Radiologist", number: "3186", type: "Bleep" },
    { name: "ENT SHO", number: "3214", type: "Bleep" },
    { name: "Frailty Team (OPAL)", number: "3274", type: "Bleep" },
    { name: "Gynae SpR", number: "3193", type: "Bleep" },
    { name: "Haematology / Blood Bank", number: "2449", type: "Bleep" },
    { name: "Infectious Diseases SpR", number: "2728", type: "Bleep" },
    { name: "ITU SpR", number: "2336", type: "Bleep" },
    { name: "Medicine SpR (RMO)", number: "1085", type: "Bleep" },
    { name: "NIV Physio", number: "2715", type: "Bleep" },
    { name: "Obstetrics SpR", number: "2140", type: "Bleep" },
    { name: "Paediatrics SpR", number: "2923", type: "Bleep" },
    { name: "Psych Liaison (PLT)", number: "2088", type: "Bleep" },
    { name: "Respiratory SpR", number: "2633", type: "Bleep" },
    { name: "Site Lead", number: "2470", type: "Bleep" },
    { name: "Surgical SpR", number: "3215", type: "Bleep" },
    { name: "Surgical SHO (RSO)", number: "3213", type: "Bleep" },
    { name: "T&O SpR", number: "3010", type: "Bleep" },
    { name: "T&O SHO", number: "6028", type: "Bleep" },
    { name: "X-Ray (Radiographer)", number: "2448", type: "Bleep" },

    // --- Switchboard / Other ---
    { name: "Urology SpR", number: "via switch (0)", type: "Switch" },
    { name: "Vascular SpR", number: "via switch (0)", type: "Switch" },
    { name: "Neurosurgery (Urgent)", number: "via switch (0)", type: "Switch" },
    { name: "MaxFax", number: "via switch (QE)", type: "Switch" },
    { name: "Ophthalmology (City)", number: "via switch", type: "Switch" },
    { name: "Gastroenterology SpR", number: "via switch", type: "Switch" },
    { name: "Renal SpR", number: "via switch", type: "Switch" },
    { name: "Neurology SpR", number: "via switch", type: "Switch" },
    { name: "Microbiology Advice", number: "via switch", type: "Switch" },
    
    // --- External / Teams ---
    { name: "Alcohol Care Team", number: "07778 932154", type: "Ext" },
    { name: "Crisis Team (Mental Health)", number: "0121 301 5500", type: "Ext" },
    { name: "District Nursing", number: "0300 555 1919", type: "Ext" },
    { name: "Drug & Alcohol Services", number: "0121 301 4141", type: "Ext" },
    { name: "Eating Disorders", number: "0121 301 2400", type: "Ext" },
    { name: "Homeless Team", number: "0121 303 7410", type: "Ext" },
    { name: "Rape Crisis", number: "0121 643 4136", type: "Ext" },
    { name: "Solar (CAMHS)", number: "0121 301 2750", type: "Ext" },
    { name: "Solihull MIU Lead ENP", number: "07917 957287", type: "Ext" },
    { name: "SPUR / Hospice", number: "0121 809 1900 / 0300 555 1919", type: "Ext" },
    { name: "Stroke Team", number: "42392", type: "Ext" },
    { name: "Pain Team", number: "42329", type: "Ext" },
    { name: "Palliative Care", number: "42330", type: "Ext" },
    { name: "Resus Training", number: "40684", type: "Ext" },
    { name: "Safeguarding Adults", number: "42388", type: "Ext" },
    { name: "Safeguarding Children", number: "42389", type: "Ext" },
    { name: "Infectious Diseases", number: "42595", type: "Ext" },
    { name: "Dermatology / Ophthalmology", number: "40492", type: "Ext" },
    { name: "Diabetes Team", number: "42387", type: "Ext" },
    { name: "Dietetics", number: "42668", type: "Ext" },
    { name: "Discharge Lounge", number: "42323", type: "Ext" },
    { name: "Discharge Team", number: "42292", type: "Ext" },
    { name: "Early Pregnancy Unit (EPU)", number: "43508", type: "Ext" }
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
