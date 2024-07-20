<template>
    <div class="container">
        <form class="form" @submit.prevent="submitForm" novalidate>
            <label for="name">Nombre</label>
            <input type="text" class="form-control" id="name" v-model="form.name" @input="validateName">
            <p v-if="errors.name" class="error-message">{{ errors.name }}</p>
            <label for="email">Correo</label>
            <input type="email" class="form-control" id="email" v-model="form.email" @input="validateEmail" required>
            <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
            <label for="pass">Contraseña</label>
            <input type="password" class="form-control" id="pass" v-model="form.pass" @input="validatePass">
            <p v-if="errors.pass" class="error-message">{{ errors.pass }}</p>
            <label for="rPass">Repetir Constraseña</label>
            <input type="password" class="form-control" id="rPass" v-model="form.rPass" @input="validateRPass">
            <p v-if="errors.rPass" class="error-message">{{ errors.rPass }}</p>
            <div class="buttonContainer">
                <button type="submit" class="btn btn-success">Enviar</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: "",
                email: "",
                pass: "",
                rPass: ""
            },
            errors: {
                name: "",
                email: "",
                pass: "",
                rPass: ""
            },
        }
    },

    methods: {
        validateName() {
            if (!this.form.name) {
                this.errors.name = 'El campo nombre es requerido';
            } else if (/\d/.test(this.form.name)) {
                this.errors.name = 'El nombre no debe contener números';
            } else if (this.form.name.length < 3) {
                this.errors.name = 'El nombre debe contener al menos 3 caracteres';
            } else {
                this.errors.name = '';
            }
        },
        validateEmail() {
            if (!this.form.email) {
                this.errors.email = 'El campo correo es requerido';
            } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.email)) {
                this.errors.email = 'El correo es inválido';
            } else {
                this.errors.email = '';
            }
        },
        validatePass() {
            if (!this.form.pass) {
                this.errors.pass = 'El campo contraseña es requerido';
            } else if (this.form.pass.length < 5) {
                this.errors.pass = 'La contraseña debe tener al menos 5 caracteres';
            } else {
                this.errors.pass = '';
            }
        },
        validateRPass() {
            if (!this.form.rPass) {
                this.errors.rPass = 'El campo repetir contraseña es requerido';
            } else if (this.form.rPass !== this.form.pass) {
                this.errors.rPass = 'Las contraseñas no coinciden';
            } else {
                this.errors.rPass = '';
            }
        },
        submitForm() {
            this.validateName();
            this.validateEmail();
            this.validatePass();
            this.validateRPass();

            if (!Object.values(this.errors).some(error => error !== '')) {
                alert('El registro se ha realizado correctamente');
            }
        }
    }

}
</script>

<style scoped>
.container {
    height: 94vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

label {
    font-size: 18px;
    font-weight: bold;
    margin: 10px;
}

.form-control {
  width: 50vh;
  margin-bottom: 20px;
}

.error-message {
    color: rgb(255, 0, 0);
    margin-top: 5px;
}

.buttonContainer {
    text-align: left;
    width: 100%;
}

button {
    font-size: 20px;
    font-weight: bold;
    padding: 7px 20px;
    margin-top: 18px;
}
</style>