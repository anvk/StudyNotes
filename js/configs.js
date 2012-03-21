/* Alexey Novak, Yura Zenevich */
/* March 2012 */

/* Start App configuration and the active state. Model part. */

// Main array of the available notes to the App
var config = new function() {
    var that = this;
    
    that.globals = {
        notePath: "notes/",
        noteExtension: ".png"
    };
    
    that.categories = [
        {
            name: "algebra",
            notes: [
                {
                    name: "note1",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note2",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note3",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note4",
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
            notes: [
                {
                    name: "note1",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note2",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note3",
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
            notes: [
                {
                    name: "note1",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note2",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note3",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note4",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note5",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note6",
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
            notes: [
                {
                    name: "note1",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note2",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note3",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note4",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note5",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note6",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note7",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note8",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note9",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note10",
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
            notes: [
                {
                    name: "note1",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note2",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note3",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note4",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note5",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                }
            ],
            enabled: true
        },
        {
            name: "conversion",
            notes: [
                {
                    name: "note1",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note2",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                }
            ],
            enabled: true
        },
        {
            name: "french",
            notes: [
                {
                    name: "note1",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note2",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note3",
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
            notes: [
                {
                    name: "note1",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note2",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note3",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note4",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note5",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note6",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note7",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note8",
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
            notes: [
                {
                    name: "note1",
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
            notes: [
                {
                    name: "note1",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note2",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note3",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note4",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note5",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note6",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note7",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note8",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note9",
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
            notes: [
                {
                    name: "note1",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note2",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note3",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note4",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note5",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note6",
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
            notes: [
                {
                    name: "note1",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note2",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note3",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note4",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note5",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note6",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note7",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note8",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note9",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note10",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note11",
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
            notes: [
                {
                    name: "note1",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note2",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note3",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note4",
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
            notes: [
                {
                    name: "note1",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note2",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note3",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note4",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note5",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note6",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note7",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note8",
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
            notes: [
                {
                    name: "note1",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note2",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note3",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note4",
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
            notes: [
                {
                    name: "note1",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note2",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note3",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note4",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note5",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note6",
                    shortDescription: "",
                    author: "Miroslaw Nawrot",
                    revision: "1.0",
                    enabled: true
                },
                {
                    name: "note7",
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
    that.bookmarks = {
        notes: []
    };
    
    // Active state of the program
    that.currentState = {
        debug: true,            // Debug flag (might need it or not)
        fullVersion: true,      // Indication if the app is the support version
        activeNote : {          // Structure which tells us what is the current note
            category: "algebra",
            note: "note1"
        }
    };
};
