import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3008/api/",
    headers: { "Content-Type": "application/json" }
})

export async function postSignup(email: String, password: any) {
    await instance.post('/user/signup', {
        email: email,
        password: password
    })
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })

}

export async function LoginRequest(email: String, password: any) {
    try {
        const response = await instance.post('/user/login', {
            email: email,
            password: password
        })
        if (response.data && response.data.token) {
            const token = response.data.token
            console.log(token)
            return token;

        } else {
            console.log('login failed')
        }

    }
    catch (error) {
        console.log(error)
    }

}

export async function ContactMe(email: String, subject: String, message: String) {
  
        await instance.post('/user/contact', {
            email: email,
            subject: subject,
            message: message
        }).then((response) => {
            console.log(response.data)
        })
            .catch((error) => {
                console.log(error)
            })

}

export async function getPokemon(name:any){
   const response = await instance.get('/poke-api',{
    params:{
        name:name
    }
   })
   const data = response.data.data;
   return data
   
}

