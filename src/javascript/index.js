export default async function searchCity(){
    // id de Andradas
    const cityName = 'Andradas';
    const key = process.env.API_KEY;

    // faz a requisição na api dos dados do tempo
    if(!key){
        console.error("API_KEY não encontrada!");
        return;
    }

    try{
        const responseAPI = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&lang=pt_br&units=metric`)

        // o .ok ve se foi bem-sucedida a requisição
        if(responseAPI.ok){
            const data = responseAPI.then( (response) => {
                response.json();            
            });

            return data;
        } else {
            console.error('Erro ao fazer a requisição');
        }
        
    } catch(error) {
        console.error('Erro ao fazer a requisição:', error);
    }
}