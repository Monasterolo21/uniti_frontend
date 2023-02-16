 <template>
    <div class="login-container">
        <div class="login-top-panel">
            <div>
                <h1 class="title-uniti">UNIT-I</h1>
                <h3 class="subtitle-uniti">Il Social Network per gli studenti</h3>
                <h3 class="subtitle-uniti">dell'Università degli Studi di Torino</h3>
            </div>
        </div>
        <div class="login-bottom-panel">
            <div class="container-logo-unito">
                <div class="img-cnt">
                    <img src="@/assets/img/unito.png" alt="logo" class="img-unito" />
                </div>
                <div class="img-cnt">
                    <img src="@/assets/img/logo.png" alt="logo" class="img-logo" />
                </div>
            </div>
        </div>
        <div>
            <h3 class="hint">Usa le tue credenziali 
                <span class="fb">myUnito</span> 
                per accedere con Google
            </h3>
        </div>

        <button id="google" @click="go">
            <div class="btn-div">
                <img src="@/assets/img/google.png"/>
                <h3>Accedi con Google</h3>
            </div>
        </button>
    </div>
</template>

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
 */

<!-- <script setup> -->
<script>
// https://yobaji.github.io/vue3-google-login/#custom-login-button-1
// https://stackoverflow.com/questions/359472/how-can-i-verify-a-google-authentication-api-access-token

import { googleTokenLogin } from "vue3-google-login";
import router from "@/router";
import store from "@/store";

export default {

    name: "LoginPage",

    data() {
        return {

        }
    },

    methods : {

        go() {
            googleTokenLogin().then(async (response) => {

                const res = await fetch(
                    "https://www.googleapis.com/oauth2/v3/userinfo?access_token=" + response.access_token, {
                        method: "GET",
                    }
                );
                const user = await res.json();
                
                if (user.hd === "edu.unito.it") {

                    let reqUser = {
                        email : user.email.toString(),
                        name : user.given_name.toString(),
                        surname : user.family_name.toString(),
                        urlPicture : user.picture.toString(),
                    }

                    const res = store.dispatch('authenticationOAuth', reqUser);
                    res.then((u) => {
                        console.log(u);
                        if(u)
                            router.push('/home')
                    })           
                    
                } else {
                    this.$swal({
                        position: 'top-end',
                        icon: 'error',
                        title: 'Ci spiace, solo gli utenti facenti parte dell\'Università degli Studi di Torino possono accedere a questa piattaforma',
                        showConfirmButton: false,
                        timer: 1000,
                        toast : false, 
                    });
                }
            });
        }
    }
}

</script>

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
 */


<style>
.login-container {
    height: 100%;
    
}

.login-top-panel {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-color);
    padding-top: 5%;
    padding-bottom: 5%;
}

.login-bottom-panel {
    display: flex;
    justify-content: center;
    align-items: center;
}

.title-uniti {
    color: white;
    font-weight: bold;
    font-size: 700%;
    margin: 0 !important;
}

.subtitle-uniti {
    color: white;
    font-size: 200%;
    margin-top: 1%;
}

.container-logo-unito {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 400px;
    max-height: 400px;
    margin-bottom: 2rem;
    padding-top: 2%;
}
.container-logo-unito img {
    margin-left: 5%;
    margin-right: 5%;
}

.container-logo-unito .img-unito{
    width: 100%;
}

.container-logo-unito .img-logo{
    width: 40%;
}

.fb {
    font-weight:normal;
}

.hint {
    margin-left: 2%;
    margin-right: 2%;
}

#google {
    margin-top: 1.5%;
    margin-bottom: 1%;
    border-radius: 0;
    padding: 1%;
    border: none;
}

.btn-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.btn-div img {
    max-width: 50px;
}

.btn-div h3 {
    font-family: 'Raleway', sans-serif;
}

@media screen and (max-width: 1000px) {
    .title-uniti {
        font-size: 400%;
    }
    .subtitle-uniti {
        font-size: 120%;
    }
    .container-logo-unito {
        display: block;
    }
    .container-logo-unito .img-unito{
        width: 50%;
        margin-top: 5%;
        margin-bottom: 5%;
    }
    .container-logo-unito .img-logo{
        width: 20%;
    }
    .img-cnt {
        width: 100%;
    }

    #google {
        margin-top: 10%;
     }

    /* .container-logo-unito {
        
        width: 100%;
    }
    .container-logo-unito .img-unito{
        width: 50%;
    }
    .container-logo-unito .img-logo{
        width: 20%;
    } */
}


</style>
