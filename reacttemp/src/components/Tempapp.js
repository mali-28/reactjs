import React, {useEffect, useState} from 'react';

const Tempapp = () =>{
    const [city, setCity] = useState(null);
    const[search, setSearch] = useState('mumbai');

    useEffect( () =>{
        const fetchApi = async () =>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ac66fbf7415cceba7aa17ad029f866f4`;
            const response = await fetch(url);
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);

        }
        fetchApi()
    }, [search]);

    return (<>
            <div className='box'>
                <div className='inputData'>
                    <input
                    type='search'
                    className='inputField'
                    value={search}
                    onChange={(event) =>{
                       setSearch(event.target.value)
                    }}/>
                </div>
            
            {!city ? (
                <p className='errorMsg'>No Data found</p>
            ): (<div>
            <div className='info'>
                <h1 className='location'>
                    <i className='fas fa-street-view'></i>{search}
                </h1>
                <h1 className= 'temp'>
                   {city.temp}Cel
                </h1>
                <h3 className='tempmin-max'>Min : {city.temp_min}Cel/Max : {city.temp_max}Cel</h3>
            </div>
            <div className='wave'></div>
            <div className='wave-two'></div>
            <div className='wave-three'></div>
            </div>
            )}
        </div>
        </>)
}

export default Tempapp;