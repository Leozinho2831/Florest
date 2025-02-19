function header(){
    const dayText = document.querySelector('#dayText');
    const temperature = document.querySelector('#temperature');
    const weatherEmogi = document.querySelector('#weather');
    const humidityText = document.querySelector('#humidity');

    // dia da semana
    const toDay = new Date();
    const dayWeek = toDay.getDay();
    const dayWeekText = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
    
    dayText.textContent = dayWeekText[dayWeek];

    // console.log(data);
    

    // temperatura do dia
    async function weather(){
        // id de Andradas
        const cityName = 'Andradas';
        const key = 'c24e214bda82c9490effeb3ac8626923';

        // faz a requisição na api dos dados do tempo
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&lang=pt_br&units=metric`).then( (response) => {
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

        // adicionando porcentagem de umidade
        humidityText.textContent = `${data.main.humidity}%`;

        // mudando vídeo de fundo
        const videoItem = document.querySelector('#video');

        const verifyWeather = data.weather[0].description;
        
        switch (verifyWeather){
            case "céu limpo":
            case "nuvens dispersas":
            case "poucas nuvens":
                videoItem.src = 'src/img/videos/video_sol.mp4';
                break;
            case "nublado":
                videoItem.src = 'src/img/videos/video_nublado.mp4';
                break;
            case "chuva leve": 
            case "chuva moderada":
            case "chuva forte": 
            case"chuva intensa":
            case "trovoada":
                videoItem.src = 'src/img/videos/video_chuva.mp4';
                break;
            case "neve":
                videoItem.src = 'src/img/videos/video_nevando.mp4';
                break;
            case "névoa":
                videoItem.src = 'src/img/videos/video_nevoa.mp4';
                break;
            default:
                videoItem.src = 'src/img/videos/video_sol.mp4';
                break;
        }
        
    }
    weather();
}

header();

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