export function getFormBody(params){
    let formBody = [];

    for(let property in params){
        let encodedKey = encodeURIComponent(property);             // if user name is used rather than email and have space then uriencode in form of url : user%20name
        let encodedValue = encodeURIComponent(params[property]);    // aakash 5050 : aakash%205050

        formBody.push(encodedKey+"="+encodedValue);
    }

    return formBody.join('&');  // join all the element in formBody like => 'property1=value&property2=value'

}

export function getTokenFromLocalStorage(){
    return localStorage.getItem('token');
}