export interface Project {
		title: string;
		description: string;
		link: string;
		tags: Array<string>;
        image: string;
        page: number;
}

export const projects: Array<Project> = [
    // page 1
    {
        "title": "Womble",
        "description": "Unscramble the word game. Written in JavaScript with Svelte",
        "link": "https://github.com/mw491/womble",
        "tags": ["Web", "Svelte", "SvelteKit", "Tailwind"],
        "image": "/images/womble.png",
        "page": 1
    },
    {
        "title": "Wordle CLI",
        "description": "Wordle clone for the terminal. Written in Rust using Ncurses",
        "link": "https://github.com/mw491/wordle-cli",
        "tags": ["Terminal", "Rust", "NCurses"],
        "image": "/images/wordle.png",
        "page": 1
    },
    // page 2
    {
        "title": "Goalkeeper",
        "description": "An app to keep your goals. Written in JavaScript using ReactJS",
        "link": "https://github.com/mw491/goalkeeper",
        "tags": ["Web", "ReactJS", "Vite"],
        "image": "/images/wordle.png",
        "page": 2
    },
    {
        "title": "Flask Blog",
        "description": "A blog/journal app. Written in Python using Flask and SQLite",
        "link": "https://github.com/mw491/flask_journal",
        "tags": ["Web", "Python", "Flask", "Vite"],
        "image": "/images/wordle.png",
        "page": 2
    },
    // page 3
    {
        "title": "Godo",
        "description": "A todolist app written in Golang using NCurses",
        "link": "https://github.com/mw491/godo",
        "tags": ["Terminal", "Golang", "NCurses"],
        "image": "/images/godo.png",
        "page": 3
    },
    {
        "title": "Gofetch",
        "description": "Fetch system information from terminal (minimal neofetch). Written in Golang using NCurses",
        "link": "https://github.com/mw491/gofetch",
        "tags": ["Terminal", "Golang", "Fetch"],
        "image": "/images/gofetch.png",
        "page": 3
    },
]