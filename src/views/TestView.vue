<!-- <template>
    <div>
        <h1>Ciao</h1>
        <h1>Ciao</h1>
        <h1>Ciao</h1>
        <h1>Ciao</h1>
        <button @click="go">ciao</button>
    </div>
</template> -->

<!-- <script>
import router from "@/router";
export default {
    name : 'TestVieww',
    methods : {
        go() {
            router.push('/home')
        }
    }
}
</script> -->

/**
 * ******** ******** ******** ******** ******** ******** ******** ******** ******** ******** ******** *******
 * ******** ******** ******** ******** ******** ******** ******** ******** ******** ******** ******** *******
 * ******** ******** ******** ******** ******** ******** ******** ******** ******** ******** ******** *******
 * ******** ******** ******** ******** ******** ******** ******** ******** ******** ******** ******** *******
 * ******** ******** ******** ******** ******** ******** ******** ******** ******** ******** ******** *******
 */

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
                <img src="@/assets/img/unito.png" alt="logo" class="img-unito" />
                <img src="@/assets/img/logo.png" alt="logo" class="img-logo" />
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

export default {

    name: "LoginPage",

    data() {
        return {

        }
    },

    methods : {
        // go() {
        //     router.push('/home')
        // },
        go() {
            googleTokenLogin().then(async (response) => {

                const res = await fetch(
                    "https://www.googleapis.com/oauth2/v3/userinfo?access_token=" + response.access_token, {
                        method: "GET",
                    }
                );
                const user = await res.json();

                if (user.hd === "edu.unito.it") {
                    alert("Benvenuto " + user.name);
                    router.push('/home')
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

// const log = () => {
//     router.push("/home");
// }

// const login = () => {
//   googleTokenLogin().then(async (response) => {

//     const res = await fetch(
//         "https://www.googleapis.com/oauth2/v3/userinfo?access_token=" + response.access_token, {
//             method: "GET",
//         }
//     );
//     const user = await res.json();
//     // console.log(user);
//     if (user.hd === "edu.unito.it") {
//         alert("Benvenuto " + user.name);
//         router.push("/home");
//     } else {
//         this.$swal({
//             position: 'top-end',
//             icon: 'error',
//             title: 'Ci spiace, solo gli utenti facenti parte dell\'Università degli Studi di Torino possono accedere a questa piattaforma',
//             showConfirmButton: false,
//             timer: 2000,
//             toast : false, 
//         });
//     }
//   });
// };

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
    justify-content: center;
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
    padding: .5%;
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
        font-size: 500%;
    }
    .subtitle-uniti {
        font-size: 150%;
    }
}

















.login-page {
    background-color: var(--white);
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: aqua;
}

.login-page__container {
    border-radius: 1rem;
    padding: 2rem;
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: red;
}

.login-page__container__logo {
    width: 100%;
    max-width: 200px;
    margin-bottom: 2rem;
}

.login-page__container__logo img {
    width: 100%;
}
</style>
