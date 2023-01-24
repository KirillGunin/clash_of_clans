export const process = {
    dev: true,
};

export const site = {
    home: process.dev ? "https://localhost:8080" : "https://app.tocode.ru",
};

export const app = {
    title: "Clash of clans",
};

export const links = [
    { title: "Home", page: "home", url: "/" },
    { title: "About", page: "about", url: "/about" },
];
