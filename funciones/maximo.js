// funciones/maximo.js
// Función: máximo
// Grupo: G3
// Estudiantes: Tinuola Fagbemi y Javier Díaz
// Descripción: Recibe dos números y retorna el mayor de ambos.

// Modificación realizada por: Javier Díaz — Estudiante 2 (G3)
// Mejora: Se agrega validación para verificar que ambas entradas sean números válidos.

export function maximo(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Error: ambos valores deben ser números válidos.";
  }
  return Math.max(a, b);
}