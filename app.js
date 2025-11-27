/**
 * Perio-GPT - Gestione Lingua e Traduzioni
 */

// Calcola l'anno corrente automaticamente
const currentYear = new Date().getFullYear();

const translations = {
    it: {
        // NAVBAR
        'lang-nav-what': 'Che Cos\'è', 
        'lang-nav-mission': 'Mission',
        'lang-nav-about': 'Chi Siamo',
        'lang-nav-awards': 'Premi',
        'lang-nav-research': 'Ricerca',
        'lang-nav-collab': 'Collaborazioni',

        // HERO SECTION
        'lang-hero-title': 'Perio-GPT: Intelligenza Artificiale in Parodontologia',
        'lang-hero-desc': 'Un modello GPT specializzato per diagnosi, terapia e prevenzione delle malattie parodontali.',
        'lang-hero-cta': 'Scopri di più',

        // CHE COS'E'
        'lang-h-what': 'Che cos\'è Perio-GPT?',
        'lang-p-what': 'Perio-GPT è un modello di intelligenza artificiale specializzato in parodontologia, sviluppato attraverso un rigoroso processo di reinstructing e validazione clinica. Utilizza la tecnologia RAG (Retrieval-Augmented Generation) per fornire risposte basate su prove scientifiche.',
        'lang-feature-ai': 'IA Specializzata',
        'lang-feature-ai-desc': 'Modello GPT-4o addestrato specificamente per parodontologia con accesso a linee guida e letteratura scientifica aggiornata.',
        'lang-feature-specialized': 'Evidence-Based',
        'lang-feature-specialized-desc': 'Ogni risposta è supportata da evidenze scientifiche e bibliografia accademica verificata.',

        // MISSION & VISION
        'lang-h-mission': 'Mission & Vision',
        'lang-mission-title': 'Mission',
        'lang-mission-desc': 'La mission di PerioGPT è rendere l\'intelligenza artificiale un alleato quotidiano del clinico, capace di coniugare rigore scientifico, semplicità d\'uso e reale impatto sulla pratica professionale.',
        'lang-vision-title': 'Vision',
        'lang-vision-desc': 'La vision è costruire un ecosistema digitale che integri apprendimento automatico, conoscenza scientifica e attività clinica, con l\'ambizione di promuovere un\'odontoiatria più predittiva, standardizzata e accessibile.',
        'lang-idea-title': 'L\'Idea',
        'lang-idea-desc': 'L\'idea alla base di PerioGPT nasce da una necessità concreta, condivisa da molti operatori del settore: ridurre la variabilità soggettiva nella diagnosi e nei piani di trattamento attraverso strumenti basati su evidenze scientifiche.',

        // TEAM
        'lang-h-team': 'Chi Siamo',
        'lang-p-team-desc': 'Un team multidisciplinare di odontoiatri, informatici e ricercatori dedicati all\'innovazione in parodontologia.',

        // EVENTI
        'lang-h-events': 'Eventi e Partecipazioni',
        'lang-cat-event': '2024-2025',
        'lang-event-startcup': 'Start Cup Puglia',
        'lang-event-startcup-desc': 'Partecipazione al principale concorso di imprenditorialità universitaria italiana. Un riconoscimento dell\'eccellenza dell\'innovazione tecnologica applicata alla medicina.',
        'lang-event-ranking': 'Posizionamento Top',
        'lang-event-pni': 'Primo Numero Impresa',
        'lang-event-pni-desc': 'Selezione per il programma di incubazione nazionale. Supporto per lo sviluppo imprenditoriale e la commercializzazione della tecnologia.',
        'lang-event-selection': 'Progetto Selezionato',

        // PREMI
        'lang-h-awards': 'Premi e Riconoscimenti',
        'lang-award-startcup': '4° Posto - Start Cup Puglia 2024',
        'lang-award-startcup-desc': 'Riconoscimento dell\'eccellenza nella proposta di innovazione tecnologica applicata alla medicina e all\'odontoiatria.',
        'lang-award-date': 'Novembre 2024',

        // RICERCA
        'lang-h-research': 'Ricerca e Pubblicazioni',
        'lang-p-research': 'La nostra ricerca è pubblicata sulle principali riviste internazionali di parodontologia e medical imaging, consolidando la base scientifica del nostro approccio.',
        'lang-cat-research1': 'J. Clin. Med. 2025',
        'lang-research-title1': 'AI per la Diagnosi dell\'Osteoporosi',
        'lang-research-desc1': '<em>Development of AI-Based Predictive Models for Osteoporosis Diagnosis in Postmenopausal Women from Panoramic Radiographs.</em><br>Uno studio approfondito sull\'uso di radiomica e deep learning per lo screening opportunistico nelle donne in postmenopausa.',
        'lang-btn-read': 'Leggi su PubMed',
        'lang-cat-research2': 'J. Clin. Periodontology 2024',
        'lang-research-title2': 'Il Modello Perio-GPT',
        'lang-research-desc2': '<em>Development and Comparative Evaluation of a Reinstructed GPT-4o Model Specialized in Periodontology.</em><br>Dettagli tecnici sul sistema RAG, la validazione clinica e le performance del modello specializzato.',

        // BACKGROUND SCIENTIFICO
        'lang-h-background': 'Background Scientifico',
        'lang-p-background': 'La nostra tecnologia si basa su tecniche avanzate di intelligenza artificiale e metodologie evidence-based consolidate.',
        'lang-feature-rag': 'Retrieval-Augmented Generation (RAG)',
        'lang-feature-rag-desc': 'Integrazione di database scientifici aggiornati con modelli di linguaggio per garantire risposte accurate e citate.',
        'lang-feature-gpt4': 'GPT-4o Specializzato',
        'lang-feature-gpt4-desc': 'Modello reinstructed su guidelines parodontologiche, letteratura peer-reviewed e protocolli clinici consolidati.',
        'lang-feature-evidence': 'Evidence-Based Medicine',
        'lang-feature-evidence-desc': 'Ogni consiglio clinico è supportato da studi randomizzati controllati e metanalisi della letteratura scientifica.',
        'lang-feature-validation': 'Validazione Clinica',
        'lang-feature-validation-desc': 'Studi di validazione comparativi con esperti clinici e protocolli di test standardizzati.',

        // COLLABORAZIONI
        'lang-h-collab': 'Collaborazioni Internazionali',
        'lang-p-collab': 'Partenariati strategici con le più prestigiose istituzioni accademiche mondiali per la ricerca e la validazione clinica.',
        'lang-collab-kcl': 'King\'s College London',
        'lang-collab-kcl-desc': 'Dipartimento di Odontoiatria Parodontale. Collaborazione sulla validazione clinica, studi prospettici e implementazione della tecnologia in ambito clinico.',
        'lang-collab-kcl-location': 'Londra, Regno Unito',
        'lang-collab-umich': 'University of Michigan',
        'lang-collab-umich-desc': 'Scuola di Medicina Dentale. Focus su intelligenza artificiale, radiomics e machine learning applicati all\'odontoiatria.',
        'lang-collab-umich-location': 'Ann Arbor, USA',

        // CONTATTI & FOOTER
        'lang-footer-about': 'Chi Siamo',
        'lang-footer-about-desc': 'Perio-GPT è un progetto innovativo che combina la parodontologia clinica con l\'intelligenza artificiale avanzata.',
        'lang-footer-links': 'Link Utili',
        'lang-footer-link-home': 'Home',
        'lang-footer-link-about': 'Chi Siamo',
        'lang-footer-link-research': 'Ricerca',
        'lang-footer-link-collab': 'Collaborazioni',


        // COPYRIGHT DINAMICO
        'lang-footer-copyright': `© ${currentYear} Perio-GPT. Tutti i diritti riservati.`
    },
    en: {
        // NAVBAR
        'lang-nav-what': 'What Is It',
        'lang-nav-mission': 'Mission',
        'lang-nav-about': 'About Us',
        'lang-nav-awards': 'Awards',
        'lang-nav-research': 'Research',
        'lang-nav-collab': 'Collaborations',

        // HERO SECTION
        'lang-hero-title': 'Perio-GPT: Artificial Intelligence in Periodontology',
        'lang-hero-desc': 'A specialized GPT model for diagnosis, therapy, and prevention of periodontal diseases.',
        'lang-hero-cta': 'Learn More',

        // WHAT IS IT
        'lang-h-what': 'What is Perio-GPT?',
        'lang-p-what': 'Perio-GPT is an artificial intelligence model specialized in periodontology, developed through a rigorous process of reinstructing and clinical validation. It uses RAG (Retrieval-Augmented Generation) technology to provide evidence-based responses.',
        'lang-feature-ai': 'Specialized AI',
        'lang-feature-ai-desc': 'GPT-4o model trained specifically for periodontology with access to updated guidelines and scientific literature.',
        'lang-feature-specialized': 'Evidence-Based',
        'lang-feature-specialized-desc': 'Every response is supported by scientific evidence and verified academic bibliography.',

        // MISSION & VISION
        'lang-h-mission': 'Mission & Vision',
        'lang-mission-title': 'Mission',
        'lang-mission-desc': 'PerioGPT\'s mission is to make artificial intelligence a daily ally for the clinician, capable of combining scientific rigor, ease of use, and real impact on professional practice.',
        'lang-vision-title': 'Vision',
        'lang-vision-desc': 'The vision is to build a digital ecosystem that integrates machine learning, scientific knowledge, and clinical activity, with the ambition to promote more predictive, standardized, and accessible dentistry.',
        'lang-idea-title': 'The Idea',
        'lang-idea-desc': 'The idea behind PerioGPT stems from a concrete need shared by many professionals in the sector: to reduce subjective variability in diagnosis and treatment plans through tools based on scientific evidence.',

        // TEAM
        'lang-h-team': 'Who We Are',
        'lang-p-team-desc': 'A multidisciplinary team of dentists, computer scientists, and researchers dedicated to innovation in periodontology.',

        // EVENTS
        'lang-h-events': 'Events and Participation',
        'lang-cat-event': '2024-2025',
        'lang-event-startcup': 'Start Cup Puglia',
        'lang-event-startcup-desc': 'Participation in the main Italian university entrepreneurship competition. Recognition of excellence in technological innovation applied to medicine.',
        'lang-event-ranking': 'Top Ranking',
        'lang-event-pni': 'Primo Numero Impresa',
        'lang-event-pni-desc': 'Selection for the national incubation program. Support for entrepreneurial development and technology commercialization.',
        'lang-event-selection': 'Selected Project',

        // AWARDS
        'lang-h-awards': 'Awards and Recognitions',
        'lang-award-startcup': '4th Place - Start Cup Puglia 2024',
        'lang-award-startcup-desc': 'Recognition of excellence in the proposal of technological innovation applied to medicine and dentistry.',
        'lang-award-date': 'November 2024',

        // RESEARCH
        'lang-h-research': 'Research and Publications',
        'lang-p-research': 'Our research is published in major international journals of periodontology and medical imaging, consolidating the scientific basis of our approach.',
        'lang-cat-research1': 'J. Clin. Med. 2025',
        'lang-research-title1': 'AI for Osteoporosis Diagnosis',
        'lang-research-desc1': '<em>Development of AI-Based Predictive Models for Osteoporosis Diagnosis in Postmenopausal Women from Panoramic Radiographs.</em><br>An in-depth study on the use of radiomics and deep learning for opportunistic screening in postmenopausal women.',
        'lang-btn-read': 'Read on PubMed',
        'lang-cat-research2': 'J. Clin. Periodontology 2024',
        'lang-research-title2': 'The Perio-GPT Model',
        'lang-research-desc2': '<em>Development and Comparative Evaluation of a Reinstructed GPT-4o Model Specialized in Periodontology.</em><br>Technical details on the RAG system, clinical validation, and performance of the specialized model.',

        // SCIENTIFIC BACKGROUND
        'lang-h-background': 'Scientific Background',
        'lang-p-background': 'Our technology is based on advanced artificial intelligence techniques and consolidated evidence-based methodologies.',
        'lang-feature-rag': 'Retrieval-Augmented Generation (RAG)',
        'lang-feature-rag-desc': 'Integration of updated scientific databases with language models to ensure accurate and cited responses.',
        'lang-feature-gpt4': 'Specialized GPT-4o',
        'lang-feature-gpt4-desc': 'Model reinstructed on periodontal guidelines, peer-reviewed literature, and consolidated clinical protocols.',
        'lang-feature-evidence': 'Evidence-Based Medicine',
        'lang-feature-evidence-desc': 'Every clinical advice is supported by randomized controlled trials and meta-analyses of scientific literature.',
        'lang-feature-validation': 'Clinical Validation',
        'lang-feature-validation-desc': 'Comparative validation studies with clinical experts and standardized test protocols.',

        // COLLABORATIONS
        'lang-h-collab': 'International Collaborations',
        'lang-p-collab': 'Strategic partnerships with the world\'s most prestigious academic institutions for research and clinical validation.',
        'lang-collab-kcl': 'King\'s College London',
        'lang-collab-kcl-desc': 'Department of Periodontology. Collaboration on clinical validation, prospective studies, and implementation of technology in the clinical setting.',
        'lang-collab-kcl-location': 'London, United Kingdom',
        'lang-collab-umich': 'University of Michigan',
        'lang-collab-umich-desc': 'School of Dental Medicine. Focus on artificial intelligence, radiomics, and machine learning applied to dentistry.',
        'lang-collab-umich-location': 'Ann Arbor, USA',

        // CONTACTS & FOOTER
        'lang-footer-about': 'About Us',
        'lang-footer-about-desc': 'Perio-GPT is an innovative project combining clinical periodontology with advanced artificial intelligence.',
        'lang-footer-links': 'Useful Links',
        'lang-footer-link-home': 'Home',
        'lang-footer-link-about': 'About Us',
        'lang-footer-link-research': 'Research',
        'lang-footer-link-collab': 'Collaborations',
        'lang-footer-contact': 'Contacts',

        // COPYRIGHT DINAMICO
        'lang-footer-copyright': `© ${currentYear} Perio-GPT. All rights reserved.`
    }
};

// --- LOGICA FUNZIONAMENTO ---

function switchLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('perio_gpt_language', lang);

    // Gestione Stato Bottoni
    const btnIt = document.getElementById('lang-it');
    const btnEn = document.getElementById('lang-en');

    if (lang === 'it') {
        btnIt.classList.add('active');
        btnEn.classList.remove('active');
    } else {
        btnEn.classList.add('active');
        btnIt.classList.remove('active');
    }

    // Aggiorna i testi
    updateTextContent(lang);
}

function updateTextContent(lang) {
    const currentTranslations = translations[lang];
    Object.keys(currentTranslations).forEach(key => {
        const elements = document.querySelectorAll('.' + key);
        elements.forEach(el => {
            el.innerHTML = currentTranslations[key];
        });
    });
}

// Inizializzazione
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('perio_gpt_language') || 'it';
    switchLanguage(savedLang);
});