/*
 * Controlador
 */
var Controlador = function (modelo) {
  this.modelo = modelo;
};

Controlador.prototype = {
  agregarPregunta: function (pregunta, respuestas) {
    this.modelo.agregarPregunta(pregunta, respuestas);
  },
  agregarVotos: function (preguntas, respuestas) {
    this.modelo.agregarVotos(preguntas, respuestas);
  },
  editarPregunta: function (id, idPregunta, pregunta) {
    this.modelo.editarPregunta(id, idPregunta, pregunta);
  },
  borrarPregunta: function (id) {
    this.modelo.borrarPregunta(id);
  },
  borrarTodasPreguntas: function (preguntas) {
    this.modelo.borrarTodasPreguntas(preguntas);
  },
};
