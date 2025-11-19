# Manual del Profesor - Plataforma Educativa Inteligente

Guía completa para profesores sobre cómo usar la Plataforma Educativa Inteligente.

## Tabla de Contenidos

1. [Introducción](#introducción)
2. [Dashboard del Profesor](#dashboard-del-profesor)
3. [Gestión de Cursos](#gestión-de-cursos)
4. [Creación de Tareas](#creación-de-tareas)
5. [Calificación de Trabajos](#calificación-de-trabajos)
6. [Análisis de Riesgo](#análisis-de-riesgo)
7. [Registro de Intervenciones](#registro-de-intervenciones)
8. [Reportes](#reportes)
9. [Comunicación con Estudiantes](#comunicación-con-estudiantes)
10. [Troubleshooting](#troubleshooting)

---

## 👋 Introducción

### ¡Bienvenido!

La Plataforma Educativa Inteligente te ayuda a:

✅ **Administrar tus cursos**
- Crear y editar contenido
- Registrar estudiantes
- Organizar tareas y evaluaciones

✅ **Calificar efectivamente**
- Cargar calificaciones
- Proporcionar feedback personalizado
- Generar reportes

✅ **Analizar desempeño**
- Identificar estudiantes en riesgo
- Entender patrones de desempeño
- Intervenir oportunamente

✅ **Comunicarte**
- Mensajes con estudiantes
- Compartir recursos
- Crear anuncios

---

## 📊 Dashboard del Profesor

### Vista General

Tu dashboard muestra:
- Tus cursos (número de estudiantes)
- Estudiantes en riesgo por curso
- Tareas por calificar
- Últimas intervenciones
- Métricas académicas

```
┌─────────────────────────────────────────┐
│ Hola, Prof. López 👨‍🏫                    │
│ Noviembre 19, 2024                      │
├─────────────────────────────────────────┤
│                                          │
│ MIS CURSOS (3)                           │
│ • Matemáticas (28 estudiantes)          │
│ • Física (25 estudiantes)               │
│ • Geometría (22 estudiantes)            │
│                                          │
│ ESTUDIANTES EN RIESGO (5)                │
│ 🔴 ALTO:  3 estudiantes                 │
│ 🟡 MEDIO: 2 estudiantes                 │
│                                          │
│ TAREAS POR CALIFICAR (8)                 │
│ • Matemáticas: 5 entregas               │
│ • Física: 3 entregas                    │
│                                          │
│ INTERVENCIONES ACTIVAS (2)               │
│ • Juan García - Plan de recuperación    │
│ • María López - Tutoría especial        │
│                                          │
│ PRÓXIMAS CLASES                          │
│ • Hoy 10:30 - Matemáticas Avanzadas   │
│ • Mañana 2:00 - Física General         │
│                                          │
└─────────────────────────────────────────┘
```

---

## 📚 Gestión de Cursos

### Ver Mis Cursos

1. Click en "Mis Cursos" (sidebar)
2. Ves lista de todos tus cursos
3. Click en un curso para detalles

### Crear un Nuevo Curso

1. Click en "Mis Cursos"
2. Click en "Crear Nuevo Curso"
3. Completa información:

```
Nombre: [________________]
Código: [___]
Descripción: [________________]
             [________________]
Período: [Semestre 2 2024 ▼]
Horario: [Lun y Mié, 10:00-11:30]

[ Cancelar ] [ Crear ]
```

4. Click "Crear"
5. El curso está listo

### Información del Curso

Dentro de cada curso ves:

**Tabs:**
- **Inicio:** Descripción, avisos
- **Estudiantes:** Lista de inscritos
- **Contenido:** Lecciones, material
- **Tareas:** Lista de tareas
- **Exámenes:** Evaluaciones
- **Configuración:** Editar curso

### Agregar Estudiantes

1. Curso → "Estudiantes"
2. Click "Agregar Estudiante"
3. Busca por nombre/email
4. Click para seleccionar
5. Click "Confirmar"
6. ✅ Estudiante agregado

Alternativa: Importar lista (CSV)
- Archivo con: email, nombre, registro
- Upload el archivo
- Sistema automáticamente los agrega

---

## ✏️ Creación de Tareas

### Crear Nueva Tarea

1. Curso → "Tareas"
2. Click "Crear Tarea"
3. Completa formulario:

```
Título: [_____________________]
Descripción: [_________________]
             [_________________]

Instrucciones:
[_________________________________]
[_________________________________]

Tipo: [Individual ▼]
     Archivo requerido: [Sí ▼]
     Tamaño máximo: [5 MB]

Fecha de Entrega: [20 Nov 2024 ▼]
Hora Límite: [23:59]

Ponderación: [__] %

[ Cancelar ] [ Crear ]
```

4. Click "Crear"
5. ✅ Tarea creada

### Editar Tarea

1. Curso → "Tareas"
2. Click en la tarea
3. Click "Editar"
4. Modifica lo necesario
5. Click "Guardar"

### Agregar Rúbrica

Las rúbricas ayudan a calificar consistentemente:

1. Tarea → "Rúbrica"
2. Click "Agregar Rúbrica"
3. Define criterios:

```
Criterio 1: Claridad (30%)
  ○ Excelente (90-100)
  ○ Bueno (80-89)
  ○ Aceptable (70-79)
  ○ Necesita mejora (< 70)

Criterio 2: Completitud (40%)
  ○ Excelente
  ○ Bueno
  ○ Aceptable
  ○ Necesita mejora

Criterio 3: Originalidad (30%)
  ○ Excelente
  ○ Bueno
  ○ Aceptable
  ○ Necesita mejora
```

4. Click "Guardar Rúbrica"

---

## 📝 Calificación de Trabajos

### Ver Entregas

1. Curso → "Tareas"
2. Click en tarea
3. Ves "Entregas" con estado

```
┌──────────────────────────────────────┐
│ ENTREGAS - Ejercicios Cap 5          │
│ Límite: 20 Nov 2024, 23:59           │
├──────────────────────────────────────┤
│                                       │
│ Estudiante    │ Estado      │ Nota   │
│ ────────────────────────────────────  │
│ Juan García   │ ✅ Entregado │ --    │
│ María López   │ ✅ Entregado │ --    │
│ Pedro Ruiz    │ ⏳ Pendiente │ --    │
│ Ana Martínez  │ ⏳ Atrasada  │ --    │
│                                       │
└──────────────────────────────────────┘
```

### Calificar Trabajo

1. Click en estudiante entregado
2. Ves su archivo en previsualizador
3. Tienes opciones:

```
┌──────────────────────────────────────┐
│ CALIFICAR - Ejercicios Cap 5         │
│ Estudiante: Juan García              │
├──────────────────────────────────────┤
│                                       │
│ Archivo: Ejercicios_Juan.pdf         │
│ [Previsualizador del PDF aquí]        │
│                                       │
│ CALIFICACIÓN                          │
│ Nota: [8.5] /10                       │
│                                       │
│ RÚBRICA                               │
│ Claridad:      ○ Excelente (30)      │
│ Completitud:   ○ Bueno (32)          │
│ Originalidad:  ○ Excelente (30)      │
│ Total: 92/100 = 9.2                 │
│                                       │
│ FEEDBACK                              │
│ [Excelente trabajo. Muy completo     │
│  y con buena presentación. Continúa  │
│  así. Ver comentarios en el PDF.]    │
│                                       │
│ [ Cancelar ] [ Guardar ]              │
│                                       │
└──────────────────────────────────────┘
```

4. Ingresa nota (0-10)
5. Usa rúbrica si existe
6. Escribe feedback (recomendado)
7. Click "Guardar"
8. ✅ Calificado

### Dar Feedback Detallado

Buen feedback incluye:

✅ **Qué hizo bien**
- "Excelente análisis de..."
- "La estructura fue clara..."

✅ **Qué mejorar**
- "Falta desarrollo de..."
- "Revisa la ortografía..."

✅ **Cómo mejorar**
- "Consulta capítulo 5..."
- "Practica con ejercicios similares..."

✅ **Ánimo**
- "Buen esfuerzo, continúa así"
- "Vas muy bien, mejora esto y serás excelente"

---

## 🔴 Análisis de Riesgo

### Ver Estudiantes en Riesgo

1. Click en "Análisis de Riesgo" (sidebar)
2. Ves todos tus estudiantes
3. Ordenados por nivel de riesgo

```
┌────────────────────────────────────────┐
│ ANÁLISIS DE RIESGO - Mis Estudiantes  │
├────────────────────────────────────────┤
│                                        │
│ Nombre        │ Curso     │ Riesgo    │
│ ────────────────────────────────────── │
│ Juan García   │ Mate      │ 🔴 ALTO  │
│ María López   │ Mate      │ 🟡 MEDIO │
│ Pedro Ruiz    │ Física    │ 🟢 BAJO  │
│ Ana Martínez  │ Mate      │ 🔴 ALTO  │
│                                        │
│ [ Ver Detalles ]                       │
│                                        │
└────────────────────────────────────────┘
```

### Entender Análisis de Riesgo

Los factores incluyen:
- **Calificaciones:** Promedio bajo
- **Asistencia:** Faltas frecuentes
- **Tareas:** No entrega o atrasa
- **Participación:** Baja participación
- **Tendencia:** Va bajando

### Ver Detalles de Estudiante

Click en estudiante:

```
┌──────────────────────────────────────┐
│ JUAN GARCÍA - Análisis Detallado     │
│                                      │
│ NIVEL: 🔴 ALTO RIESGO               │
│ Score: 78% (Necesita intervención)  │
│                                      │
│ FACTORES:                            │
│ • Calificaciones: 5.8 (bajo)         │
│ • Asistencia: 72% (bajo)             │
│ • Tareas: 60% completadas            │
│ • Participación: Baja                │
│ • Tendencia: Bajando                 │
│                                      │
│ HISTORIA:                            │
│ [Gráfico mostrando tendencia]        │
│ Últimas 4 semanas: bajando           │
│                                      │
│ RECOMENDACIONES:                     │
│ • Hablar con estudiante             │
│ • Crear plan de recuperación         │
│ • Tutoría especial                   │
│ • Mayor seguimiento                  │
│                                      │
│ [ Crear Intervención ]               │
│                                      │
└──────────────────────────────────────┘
```

---

## 📋 Registro de Intervenciones

### ¿Qué es una Intervención?

Un plan de apoyo cuando un estudiante está en riesgo.

**Ejemplos:**
- Tutoría especial
- Plan de recuperación
- Seguimiento cercano
- Apoyo psicológico

### Crear Intervención

#### Desde Análisis de Riesgo:

1. Click en estudiante en riesgo
2. Click "Crear Intervención"

#### O Directamente:

1. Click en "Intervenciones" (sidebar)
2. Click "Nueva Intervención"
3. Completa formulario:

```
Estudiante: [Juan García ▼]
Tipo: [Académica ▼]
     Opciones:
     - Académica
     - Psicológica
     - Familiar
     - Sanitaria

Título: [Plan de Recuperación - Matemáticas]

Descripción:
[_________________________________]
[_________________________________]

Acciones específicas:
- Tutoría 2x/semana
- Repasar capítulos 3-5
- Ejercicios prácticos

Fecha Inicio: [20 Nov 2024]
Fecha Vencimiento: [20 Dic 2024]

[ Cancelar ] [ Crear ]
```

4. Click "Crear"
5. ✅ Intervención creada

### Registrar Seguimiento

1. Intervenciones → selecciona una activa
2. Click "Agregar Seguimiento"
3. Completa:

```
Fecha: [20 Nov 2024]

Actividades realizadas:
□ Tutoría presencial
□ Envío de material
□ Evaluación de avance
□ Conversación con estudiante
□ Contacto con familia

Progreso:
[_________________________________]
Ej: Mejora notable en cálculo,
pero necesita más trabajo en
geometría

Estado: [En progreso ▼]

Próximos pasos:
[_________________________________]

[ Cancelar ] [ Guardar ]
```

4. Click "Guardar"
5. Se registra automáticamente

### Cerrar Intervención

Cuando se logra el objetivo:

1. Intervención → "Cerrar"
2. Resultado final:

```
¿Fue efectiva?
○ Muy efectiva - Recuperación completa
○ Efectiva - Mejora significativa
○ Parcialmente - Mejora leve
○ Inefectiva - No hubo cambio

Resumen:
[_________________________________]

Recomendaciones para futuro:
[_________________________________]

[ Cancelar ] [ Cerrar ]
```

3. Click "Cerrar"
4. ✅ Intervención cerrada

---

## 📊 Reportes

### Crear Reporte de Curso

1. Click en "Reportes" (sidebar)
2. Click "Nuevo Reporte"
3. Selecciona curso
4. Elige período
5. Selecciona información:
   - [ ] Calificaciones
   - [ ] Asistencia
   - [ ] Análisis de riesgo
   - [ ] Intervenciones
   - [ ] Recomendaciones

6. Click "Generar"
7. Espera a que se procese

### Exportar Reporte

Después de generar:

1. Click en reporte
2. Click "Exportar"
3. Elige formato:
   - 📄 PDF (para imprimir)
   - 📊 Excel (para análisis)
4. ✅ Descargado

### Reporte de Riesgo

Para ver análisis agregado:

1. Click "Reportes"
2. Click "Reporte de Riesgo"
3. Selecciona período
4. Ves:
   - Cantidad en riesgo
   - Gráficos por nivel
   - Factores principales
   - Intervenciones activas

---

## 💬 Comunicación con Estudiantes

### Enviar Aviso al Curso

1. Curso → "Avisos"
2. Click "Nuevo Aviso"
3. Escribe:

```
Asunto: [Cambio en fecha del examen]

Mensaje:
[_________________________________]
[_________________________________]

Adjuntos: [ Cargar ]

Importante: [ ] Marcar como importante

[ Cancelar ] [ Publicar ]
```

4. Click "Publicar"
5. Todos ven el aviso en el curso

### Enviar Mensaje Privado

1. Click en "Mensajes"
2. Click "Nuevo Mensaje"
3. Selecciona estudiante
4. Escribe mensaje
5. Click "Enviar"

### Grupo de Chat de Curso

1. Curso → "Chat"
2. Todos los estudiantes pueden ver
3. Útil para dudas generales
4. El profesor modera

---

## 🆘 Troubleshooting

### Problema: No puedo ver las entregas

**Solución:**
1. Verifica que tenga "Archivo requerido"
2. Revisa que ya pasó la fecha límite
3. Refresca la página
4. Si persiste, contacta soporte

### Problema: La calificación no aparece

**Solución:**
1. Verifica haber hecho click "Guardar"
2. Refresca la página
3. Barra de búsqueda para encontrar estudiante
4. Puede tardar un minuto en actualizar

### Problema: Estudiante dice que entregó pero no lo veo

**Solución:**
1. Verifica en "Todas las entregas" (no solo entregadas)
2. Puede estar aún subiendo
3. Solicita que reintente
4. Si hay error del sistema, contacta soporte

### Problema: No puedo crear tarea

**Solución:**
1. Verifica ser creador del curso
2. Intenta en otro navegador
3. Limpia caché (Ctrl+Shift+Supr)
4. Si persiste, contacta soporte

---

## 💡 Tips para Éxito

### ✅ Buenas Prácticas

1. **Sé claro en instrucciones**
   - Describe exactamente qué esperas
   - Proporciona ejemplos
   - Menciona criterios de evaluación

2. **Califica regularmente**
   - No dejes acumular
   - Realimenta pronto
   - Sé justo y consistente

3. **Monitorea riesgo**
   - Revisa riesgos regularmente
   - Intervén temprano
   - No esperes a que sea muy tarde

4. **Comunícate**
   - Avisos claros
   - Responde mensajes
   - Disponibilidad para dudas

5. **Mantén registros**
   - Documenta intervenciones
   - Guarda feedback
   - Toma notas de progreso

---

**Última actualización:** Noviembre 2024

**Versión:** 1.0.0

Para más información, contacta a soporte.
