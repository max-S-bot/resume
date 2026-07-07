const resume = {
    heading: heading('Max Schwarz', [
        [
            'mailto:mxz.schwarz@gmail.com', 
            'mxz.schwarz@gmail.com',
        ],
        [
            'tel:+15109923830',
            '(510) 992-3830',
        ],
        [
            'https://github.com/max-s-bot',
            'github.com/max-S-bot',
        ],
        [
            'https://leetcode.com/mxz-schwarz',
            'leetcode.com/mxz-schwarz',
        ],
    ]),
    sections: [
        section('Education', [
            subsection(
                'B.S. in Applied Mathematics (incoming)', 
                [
                    'UC Santa Cruz',
                    'Santa Cruz, CA',
                    'Expected June 2030',
                ],
                ''
            ),
            subsection(
                'High School Diploma', 
                [
                    'Berkeley High School', 
                    'Berkeley, CA',
                    'June 2026',
                ], 
                'AP Scores: Physics C: Mechanics (5), Physics C: E&M (4), Calculus BC (5, self-studied), Computer Science A (5, self-studied), Statistics (4, self-studied)'
            ),
        ]),
        section('Skills', [
            subsection(
                'Languages', 
                [],
                'Java, JavaScript (ES6+), Bash/Shell, HTML5, CSS3'
            ),
            subsection(
                'Researching',
                [],
                'Haskell, Common Lisp  (self-directed study)'
            ),
            subsection(
                'Familiar with',
                [],
                'Python (scripting basics), SQL (SELECT queries, joins) '
            ),
            subsection(
                'Tools & Platforms',
                [],
                'Git / GitHub, Linux CLI, VS Code, Node.js, JDK'
            ), 
            subsection(
                'Concepts',
                [],
                'Functional programming, recursion, data structures, probability & statistics'
            ),
        ]),
        section('Projects', [
            subsection(
                link('https://github.com/max-S-bot/text-editor', 'Browser Text Editor').outerHTML,
                [
                    'Java',
                    'HTML',
                    'CSS',
                    'JavaScript',
                    '<i>in progress</i>',
                ],
                'Java HTTP server with three endpoints handling static file serving, filesystem directory listing, and file read/write. Frontend renders a navigable directory browser and a textarea that auto-saves on change via fetch POST, with Tab key support.'
            ),
            subsection(
                link('https://github.com/max-S-bot/JSON-parser', 'JSON Parser (Java)').outerHTML,
                [
                    'Java',
                    'Bash',
                ],
                'Recursive-descent parser covering the full JSON spec, with a typed value hierarchy and generic number parsing. Validated against an external acceptance test suite; distributed as a compiled JAR with Bash build scripts.'
            ),
            subsection(
                link('https://github.com/max-S-bot/hl-cs', 'TSP Genetic Algorithm').outerHTML,
                [
                    'JavaScript',
                    'p5.js',
                ],
                'Applied a genetic algorithm to the Travelling Salesman Problem — implemented selection, crossover, mutation, and elitism, and compared several crossover strategies. Visualizes tour evolution in real time.'
            ),
            subsection(
                link('https://github.com/max-S-bot/htmx', 'Live Message Board').outerHTML,
                [
                    'Java',
                    'HTMX',
                    'HTML',
                ],
                'HTTP server built from scratch in Java with no frameworks: request routing, cookie-based sessions, and JSON persistence to disk using the custom parser. Frontend uses htmx polling for live updates without a page reload.'
            ),
            subsection(
                link('https://github.com/max-S-bot/hl-cs', 'Markov Chain Text Generator').outerHTML,
                [
                    'JavaScript',
                ],
                'Models word sequences as a Markov chain - builds a bigram transition table from a corpus and samples it to generate text. Demonstrates familiarity with a probabilistic framework central to statistics and ML.'
            ),
            subsection(
                link('https://github.com/max-S-bot/dino-game', 'Dino Game').outerHTML,
                [
                    'Java',
                    'Swing',
                ],
                'Chrome dino clone in Java using Swing; physics-based jump arc, sprite animation, and collision detection with adjustable margins.'
            ),
        ]),
        section('Experiences', [
            subsection(
                'Teaching Assistant',
                [
                    'Berkeley Math Circle - Elementary Summer Program',
                    'Summer 2025', 
                ],
                'Supported K-5 students through problem sets in a one-week intensive math enrichment program; helped students work through problems where they were stuck and led hands-on activities.'
            ),
            subsection(
                'Physics Olympiad Club',
                [],
                'Member, Berkeley High School; studied for F = ma exam and classical mechanics, E&M, and modern physics at the olympiad level.'
            ),
            subsection(
                `Leetcode (${link('https://leetcode.com/mxz-schwarz', 'mxz-schwarz').outerHTML})`,
                [],
                '434 problems solved across 1,313 submissions: 251 easy, 171 medium, 12 hard.'
            ),
            subsection(
                'Driving',
                [],
                'Learning manual, adept at automatic, and struggling with parallel parking'
            )
        ]),
    ],
};