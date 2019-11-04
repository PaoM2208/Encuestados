/*
 * Modelo
 */
var Modelo = function () {
  this.preguntas = localStorage.getItem('preguntas') ? JSON.parse(localStorage.getItem('preguntas')) : [];
  this.ultimoId = 0;

  //inicializacion de eventos
  this.preguntaAgregada = new Evento(this);
  this.votoAgregado = new Evento(this);
  this.preguntaEditada = new Evento(this);
  this.preguntaEliminada = new Evento(this);
  this.eliminarTodasPreguntas = new Evento(this);
};

Modelo.prototype = {
  //se obtiene el id más grande asignado a una pregunta
  obtenerUltimoId: function () {
    return this.preguntas.length - 1;
  },

  //se agrega una pregunta dado un nombre y sus respuestas
  agregarPregunta: function (nombre, respuestas) {
    var id = this.obtenerUltimoId();
    id++;
    var nuevaPregunta = { 'textoPregunta': nombre, 'id': id, 'cantidadPorRespuesta': respuestas };
    this.preguntas.push(nuevaPregunta);
    this.guardar();
    this.preguntaAgregada.notificar();
  },

  agregarVotos: function (tituloPregunta, respuestas) {
    this.tituloPregunta.forEach(pregunta => {
      if (pregunta.textoPregunta === tituloPregunta) {
        pregunta.cantidadPorRespuesta.forEach(respuesta => {
          respuestas === respuesta.textoRespuesta ? respuesta.cantidad += 1 : 0;
        });
      }});

    this.votoAgregado.notificar();
  },

  editarPregunta: function (id, idPregunta, pregunta) {
    var botonAgregar = pregunta.html();
    this.preguntas.find(function (adicionPregunta) {
      if (adicionPregunta.id === id) {
        idPregunta.val(adicionPregunta.textoPregunta);
      };
    });
    pregunta.text('Editar pregunta');
    pregunta.click(function () {
      pregunta.text(botonAgregar);
    })
    this.borrarPregunta(id);
    this.preguntaEditada.notificar();
  },

  borrarPregunta: function (id) {
    this.preguntas.splice(id, 1);
    this.guardar();
    this.preguntaEliminada.notificar();
  },

  //se guardan las preguntas
  guardar: function () {
    localStorage.setItem('preguntas', JSON.stringify(this.preguntas));
  },

  borrarTodasPreguntas: function (preguntas) {
    preguntas.splice(0, this.preguntas.length);
    localStorage.clear();
    this.eliminarTodasPreguntas.notificar();
  },
};
