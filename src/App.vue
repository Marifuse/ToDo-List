<template>
    <div id="main">
        <link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah&display=swap" rel="stylesheet">
         <!-- Título -->
        <h1 class="title"> {{ message }} </h1>

        <!-- ejemplo -->
        <!-- <input type="text" v-model="nombre"/>  -->
        <!-- <button @click="mostrarNombre">Mostrar/Ocultar</button> -->
        <!-- <p v-if="mostrar"> Su Nombre es: {{nombre}} </p> -->

        <!-- <p v-if="nombre !== ''"> Su Nombre es: {{nombre}} </p>
        <p v-else>Holis</p> -->

        <!-- Trabajo de hoy -->
        <!-- Seccion que contiene el input y la lista -->
        <section class="container">
            <!-- Título, input, y botón -->
            <h3 class="to-do">Tarea:</h3>
            <input type="text" v-model="tarea"/> 
            <br>
            <button @click="mostrarResult">Agregar Tarea</button>
            <br>
            <!-- Lista -->
            <ul class="todo-list">
                <li class="list-container" v-for="(t, index) in tareas" :key="index">
                    <span class="component"> {{t}} </span><input type="checkbox" @click="borrarTarea" v-bind:value="index">
                </li>
            </ul>
        </section>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: "ToDo List",
            tarea: "",
            tareas: [],
            mostrar: false
        }
    },
    methods: {
        // Función mostrar tarea
        mostrarResult: function() {
            this.mostrar = !this.mostrar;
        },
        // Función agregar tarea
        mostrarResult: function() {
            if(this.tarea != "")
            {
                this.tareas.push(this.tarea);
            }
            
            this.tarea = "" //Dejar el campo vacío en el input
        },
        // Función check
        borrarTarea: function(event) {
            this.tareas.splice(event.target.value, 1);
            event.target.checked = false;
        }
    }
}
</script>
<style scoped>
    /* Contenedor */
    #main {
        font-size: 25px;
        font-family: 'Gloria Hallelujah', cursive;
        text-align: center;
        padding: 2em;
    }
    /* Titulo de la página */
    .title {
        font-size: 2.5em;
        color: crimson;
        text-decoration-line: underline;
    }
    /* Sección container */
    .to-do {
        font-size: 1.5em;
        color: crimson;
        margin-bottom: 0;
    }
    input {
        width: 35%;
        background-color: lightcoral;
        color: crimson;
        text-align: center;
        font-size: 1em;      
        border-radius: 1em;
        border: 1px solid crimson;
    }
    button {
        width: 15%;
        background-color: lightcoral;
        color: crimson;
        font-family: 'Gloria Hallelujah', cursive;
        font-weight: bold;
        border-radius: 1em;
        border: 1px solid crimson;
    }
    /* Lista */
    .list-container {
        list-style: none;
        display: flex;
        width: 20%;
        margin: auto;
    }
    .component {
        padding-right: 1em;
        display: inline-block;
    }


</style>