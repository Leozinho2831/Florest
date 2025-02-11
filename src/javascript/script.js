function weather(){
    const dayText = document.querySelector('#dayText');
    const temperature = document.querySelector('#temperature');
    const weatherEmogi = document.querySelector('#weather');

    // dia da semana
    const toDay = new Date();
    const dayWeek = toDay.getDay();
    const dayWeekText = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
    
    dayText.textContent = dayWeekText[dayWeek];

    // temperatura do dia
    async function searchCity(){
        // id de Andradas
        const cityID = '3472254';
        const key = 'c24e214bda82c9490effeb3ac8626923';

        // faz a requisição na api dos dados do tempo
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${key}&lang=pt_br&units=metric`).then( (response) => {

            return response.json();
        });

        // temperatura arredondada
        temperature.textContent = `${Math.round(data.main.temp)}º`;
        
        // icones da temperatura do dia
        const iconCode = data.weather[0].icon;
        const weatherEmojiCode = {
            "01d": "☀️",  // Céu limpo (dia)
            "01n": "🌙",  // Céu limpo (noite)
            "02d": "🌤️", // Poucas nuvens (dia)
            "02n": "🌥️", // Poucas nuvens (noite)
            "03d": "☁️",  // Nuvens dispersas
            "03n": "☁️",  
            "04d": "🌥️", // Nublado
            "04n": "🌥️", 
            "09d": "🌧️", // Chuva leve
            "09n": "🌧️",
            "10d": "🌦️", // Chuva moderada (dia)
            "10n": "🌧️", // Chuva moderada (noite)
            "11d": "⛈️", // Tempestade
            "11n": "⛈️",
            "13d": "❄️", // Neve
            "13n": "❄️",
            "50d": "🌫️", // Névoa
            "50n": "🌫️"
        };

        weatherEmogi.textContent = weatherEmojiCode[iconCode] || "❓";
    }

    searchCity();
}

weather();

function menuMobile(){
    const menu = document.querySelector('#menu');
    const navbar = document.querySelector('#navbar');

    function openMenu(){
        navbar.classList.toggle('hidden');
        navbar.classList.toggle('flex');
    }

    menu.addEventListener('click', openMenu);

    function closeMenu(event){
        const itemClick = event.target;
        
        // verifica se o clique foi fora
        if(itemClick == navbar){
            navbar.classList.add('hidden');
            navbar.classList.remove('flex');
        }
    }

    navbar.addEventListener('click', closeMenu);
}

menuMobile();