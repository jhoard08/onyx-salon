const LandingPage = () => {
    const header = () => {
        const section = document.createElement('section');
        const element = document.createElement('div');
        section.appendChild(element);
        element.textContent = "Onyx Salon & Barber Co.";
        element.classList.add('hello', 'display-1');
        return section;
    }
    const meetUs = () => {
        const section = document.createElement('section');
        const element = document.createElement('div');
        section.appendChild(element);
        element.textContent = "Meet Us";
        element.classList.add('meet-us');
        return section;
    }

    return { header, meetUs };
}

export default LandingPage;