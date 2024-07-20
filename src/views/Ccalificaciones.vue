<template>
  <div class="container">
    <form class="form" @submit.prevent="handleClick">
      <label for="nota1">Nota 1</label>
      <input type="number" class="form-control" id="nota1" v-model="nota1" @input="validateNota1" placeholder="Nota 1"
        min="10" max="70" required>

      <label for="nota2">Nota 2</label>
      <input type="number" class="form-control" id="nota2" v-model="nota2" @input="validateNota2" placeholder="Nota 2"
        min="10" max="70" required>

      <label for="nota3">Nota 3</label>
      <input type="number" class="form-control" id="nota3" v-model="nota3" @input="validateNota3" placeholder="Nota 3"
        min="10" max="70" required>

      <label for="asist">Asistencia %</label>
      <input type="number" class="form-control" id="asist" v-model="asist" @input="validateAsist"
        placeholder="Asistencia" min="0" max="100" required>

      <div class="col-12">
        <button type="submit" @click="handleClick" class="btn btn-primary">Calcular</button>
      </div>
      <p v-if="mostrarPromedio"> El promedio es: {{ calculoPromedio }}</p>
      <p v-if="mostrarEstado"> Su estado es: {{ estado }}</p>
      <p id="aviso" v-else>{{ aviso }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nota1: null,
      nota2: null,
      nota3: null,
      asist: null,
      estado: "",
      aviso: "",
      validNota1: false,
      validNota2: false,
      validNota3: false,
      validAsist: false,
      mostrarPromedio: false,
      mostrarEstado: false,
    };
  },
  computed: {
    calculoPromedio() {
      return (this.nota1 * 0.35 + this.nota2 * 0.35 + this.nota3 * 0.3);
    }
  },

  methods: {
    validateNota1() {
      const nota1 = parseInt(this.nota1, 10);
      this.validNota1 = !isNaN(nota1) && nota1 >= 10 && nota1 <= 70;
    },
    validateNota2() {
      const nota2 = parseInt(this.nota2, 10);
      this.validNota2 = !isNaN(nota2) && nota2 >= 10 && nota2 <= 70;
    },
    validateNota3() {
      const nota3 = parseInt(this.nota3, 10);
      this.validNota3 = !isNaN(nota3) && nota3 >= 10 && nota3 <= 70;
    },
    validateAsist() {
      const asist = parseInt(this.asist, 10);
      this.validAsist = !isNaN(asist) && asist >= 0 && asist <= 100;
    },
    handleClick() {
      if (this.validNota1 && this.validNota2 && this.validNota3 && this.validAsist) {
        this.aviso = "";
        this.mostrarPromedio = true;
        this.estado = this.calculoPromedio >= 40 && this.asist >= 80 ? "Aprobado" : "Reprobado";
        this.mostrarEstado = true;
      } else {
        this.aviso = "Por favor, ingrese valores válidos para las notas y la asistencia";
        this.mostrarPromedio = false;
        this.mostrarEstado = false;
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

#aviso {
  color: rgb(255, 0, 0);
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

button {
  font-size: 20px;
  font-weight: bold;
  padding: 7px 20px;
  margin-top: 18px;
  margin-bottom: 18px;
}
</style>