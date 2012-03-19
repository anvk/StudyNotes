/* Alexey Novak, Yuriy Zenevich */
/* March 2012 */

/* Start App configuration and the active state. Model part. */

// Main array of the available notes to the App
var notes = [
    {
        name: "algebra",
        pages : [
            {
                note: "note1",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note2",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note3",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note4",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
        ],
        numPages: 4,
        enabled: true
    },
    {
        name: "astronomy",
        pages : [
            {
                note: "note1",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note2",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note3",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            }
        ],
        numPages: 3,
        enabled: true
    },
    {
        name: "biology",
        pages : [
            {
                note: "note1",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note2",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note3",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note4",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note5",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note6",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            }
        ],
        numPages: 6,
        enabled: true
    },
    {
        name: "calculus",
        pages : [
            {
                note: "note1",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note2",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note3",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note4",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note5",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note6",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note7",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note8",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note9",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note10",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            }
        ],
        numPages: 10,
        enabled: true
    },
    {
        name: "chemistry",
        pages : [
            {
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            }
        ],
        numPages: 5,
        enabled: true
    },
    {
        name: "conversion",
        numPages: 2,
        enabled: true
    },
    {
        name: "french",
        numPages: 3,
        enabled: true
    },
    {
        name: "geography",
        numPages: 8,
        enabled: true
    },
    {
        name: "geometry",
        numPages: 1,
        enabled: true
    },
    {
        name: "grammar",
        numPages: 9,
        enabled: true
    },
    {
        name: "greek",
        numPages: 6,
        enabled: true
    },
    {
        name: "literary",
        numPages: 11,
        enabled: true
    },
    {
        name: "music",
        numPages: 4,
        enabled: true
    },
    {
        name: "physics",
        numPages: 8,
        enabled: true
    },
    {
        name: "spanish",
        numPages: 4,
        enabled: true
    },
    {
        name: "trigonometry",
        numPages: 7,
        enabled: true
    },
];

// Structure wich will contain all required data for the bookmarks
var bookmarks = {
    pages: []
};

// Active state of the program
var currentState = {
    debug: true,            // Debug flag (might need it or not)
    fullVersion: true,      // Indication if the app is the support version
    activeNote : {          // Structure which tells us what is the current note
        name: "algebra",
        page: 0
    }
};