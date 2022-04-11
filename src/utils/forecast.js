const request=require('request')

const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=d2a9007b46189c20179cbabfda4e2de9&query='+latitude+','+longitude+'&units=f'

    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to weather service!',undefined);
        }else if(response.body.error){
            callback('Unable to find location',undefined);
        }else{
            callback(undefined,'It is currently '+response.body.current.temperature+' degress out. There is a '+response.body.current.precip+' % chance of rain.')
        } 
    })
}

module.exports=forecast