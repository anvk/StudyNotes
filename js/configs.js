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
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note2",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note3",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note4",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
        ],
        enabled: true
    },
    {
        name: "astronomy",
        pages : [
            {
                note: "note1",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note2",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note3",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            }
        ],
        enabled: true
    },
    {
        name: "biology",
        pages : [
            {
                note: "note1",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note2",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note3",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note4",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note5",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note6",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            }
        ],
        enabled: true
    },
    {
        name: "calculus",
        pages : [
            {
                note: "note1",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note2",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note3",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note4",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note5",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note6",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note7",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note8",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note9",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note10",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            }
        ],
        enabled: true
    },
    {
        name: "chemistry",
        pages : [
            {
                note: "note1",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note2",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note3",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note4",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note5",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            }
        ],
        enabled: true
    },
    {
        pages : [
            {
                note: "note1",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note2",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            }
        ],
        name: "conversion",
        enabled: true
    },
    {
        name: "french",
        pages : [
            {
                note: "note1",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note2",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note3",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            }
        ],
        enabled: true
    },
    {
        name: "geography",
        pages : [
            {
                note: "note1",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note2",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note3",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note4",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note5",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note6",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note7",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note8",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            }
        ],
        enabled: true
    },
    {
        name: "geometry",
        pages : [
            {
                note: "note1",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            }
        ],
        enabled: true
    },
    {
        name: "grammar",
        pages : [
            {
                note: "note1",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note2",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note3",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note4",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note5",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note6",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note7",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note8",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note9",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            }
        ],
        enabled: true
    },
    {
        name: "greek",
        pages : [
            {
                note: "note1",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note2",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note3",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note4",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note5",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note6",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            }
        ],
        enabled: true
    },
    {
        name: "literary",
        pages : [
            {
                note: "note1",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note2",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note3",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note4",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note5",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note6",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note7",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note8",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note9",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note10",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note11",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            }
        ],
        enabled: true
    },
    {
        name: "music",
        pages : [
            {
                note: "note1",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note2",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note3",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note4",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            }
        ],
        enabled: true
    },
    {
        name: "physics",
        pages : [
            {
                note: "note1",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note2",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note3",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note4",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note5",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note6",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note7",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note8",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            }
        ],
        enabled: true
    },
    {
        name: "spanish",
        pages : [
            {
                note: "note1",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note2",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note3",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note4",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            }
        ],
        enabled: true
    },
    {
        name: "trigonometry",
        pages : [
            {
                note: "note1",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note2",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note3",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note4",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note5",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note6",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            },
            {
                note: "note7",
                shortDescription: "",
                author: "Miroslaw Nawrot",
                revision: "1.0",
                enabled: true
            }
        ],
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