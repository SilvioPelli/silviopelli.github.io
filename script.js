/* === Über mich > Mehr lesen === */
const btn = document.getElementById('toggleMehr'); /* Button der gedrückt wird */
const mehrText = document.getElementById('mehrText'); /* Der Textbereich der ein- und ausgeblendet wird */

btn.addEventListener('click', () => { /* Wenn Button geklickt wird führe code in geschweifter Klammer aus */
    const istVersteckt = mehrText.hasAttribute('hidden'); /* Ist der Text versteckt ? */

    if (istVersteckt) { /* Wenn Text versteckt führe diesen Code aus */
        mehrText.removeAttribute('hidden'); /* Text wir gezeigt indem hidden Attribut entfernt wird */
        btn.textContent = 'Weniger anzeigen'; /* Button Text wir dzu Weniger anzeigen */
        btn.setAttribute('aria-expanded', 'true'); /* Screenreader wissen Bereich ist jetzt ausgeklappt */
    } else { /* Wenn istVersteckt nicht true */
        mehrText.setAttribute('hidden', ''); /* mehrText ist versteckt */
        btn.textContent = 'Mehr lesen'; /* Button Text, Mehr lesen */
        btn.setAttribute('aria-expanded', 'false'); /* Screenreader wissen, Bereich eingeklappt */
    }
});

/* Slide Up */ 
document.addEventListener('DOMContentLoaded', ()=> { /* Code wird erst ausgeführt wenn das gesamte HTML-Dokument geladen wurde. Nach Body vor Bilder */
    const projekte = document.querySelectorAll('.projekt'); /* Erstellt Liste aller Elemente mit Klasse .projekt. querySelectorAll gibt NodeList zurück (ähnlich wie Array) */

    const observer = new IntersectionObserver((entries) => { /* Browser-Tool: Erkennt wann ein Element in den sichtbaren Bereich des Bildschirm scrollt */
        entries.forEach((entry, index) => { /* entries enthält alle Elemente deren SIchtbarkeit sich gerade verändert hat (weil in Viewport gescrollt) */
            if (entry.isIntersecting) { /* Ist Projekt gerade sichtbar? */
                setTimeout(() => { /* Gestaffelte Verzögerung */
                    entry.target.classList.add('visible'); /* Sobald Verzögerung z.b 200ms abgelaufen sind bekommt das Element die Klasse .visible und wird durch die definierung im @Keyframe slideUP aktiviert */
                }, index * 200); 
                observer.unobserve(entry.target); /* Wenn ein Element eingeblendet wurde wird es vom observer abgehängt - Performance */
            }
        });
    }, {
        threshold: 0.1 /* Sagt dem Observer : Element liegt im Sichtbaren bereich wenn 10% zusehen sind */
    });

    projekte.forEach(projekt => {  /* Observer wird auf jedes .projekt-Element angesetzt, Browser beobachtet wann dieses Element in Viewport kommt */
        observer.observe(projekt);
    });
});

