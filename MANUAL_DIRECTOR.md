# Manual del Director/Administrador - Plataforma Educativa Inteligente

Guía para directores y administradores sobre uso del sistema.

## Tabla de Contenidos

1. [Introducción](#introducción)
2. [Dashboard Directivo](#dashboard-directivo)
3. [Gestión de Usuarios](#gestión-de-usuarios)
4. [Análisis Institucional](#análisis-institucional)
5. [Gestión de Cursos](#gestión-de-cursos)
6. [Reportes Ejecutivos](#reportes-ejecutivos)
7. [Configuración del Sistema](#configuración-del-sistema)
8. [Monitoreo de Riesgo](#monitoreo-de-riesgo)

---

## 👋 Introducción

### Funciones del Director

✅ Supervisar desempeño académico general
✅ Analizar riesgo en toda la institución
✅ Administrar usuarios del sistema
✅ Generar reportes ejecutivos
✅ Configurar parámetros institucionales
✅ Monitorear intervenciones
✅ Asegurar cumplimiento de políticas

---

## 📊 Dashboard Directivo

### Vista General

```
┌──────────────────────────────────────────┐
│ Bienvenido, Director López 👨‍💼            │
│ Noviembre 19, 2024                       │
├──────────────────────────────────────────┤
│                                           │
│ ESTADÍSTICAS CLAVE                        │
│ Total Estudiantes: 450                    │
│ Profesores: 35                            │
│ Cursos: 18                                │
│ Promedio General: 7.2/10                  │
│                                           │
│ RIESGO ACADÉMICO (GLOBAL)                 │
│ 🔴 ALTO:  15 (3.3%)                       │
│ 🟡 MEDIO: 65 (14.4%)                      │
│ 🟢 BAJO: 370 (82.3%)                      │
│                                           │
│ DESEMPEÑO POR CURSO                       │
│ [Gráfico mostrando promedio por curso]   │
│                                           │
│ INTERVENCIONES ACTIVAS                    │
│ Académicas: 18                            │
│ Psicológicas: 5                           │
│ Familiares: 3                             │
│ Total: 26                                 │
│                                           │
│ TAREAS PENDIENTES                         │
│ □ Revisar calificaciones por curso        │
│ □ Aprobar cambios de usuario              │
│ □ Generar reporte trimestral              │
│                                           │
└──────────────────────────────────────────┘
```

---

## 👥 Gestión de Usuarios

### Ver Usuarios

1. Click en "Gestión de Usuarios"
2. Ve lista de todos
3. Filtrar por:
   - Rol (Estudiante, Profesor, Director)
   - Estado (Activo, Inactivo)
   - Curso

### Crear Usuario

1. Click "Nuevo Usuario"
2. Completa:

```
Email: [________________]
Nombre: [________________]
Rol: [Estudiante ▼]
Curso: [Matemáticas ▼] (si es estudiante)

[ Crear ]
```

3. Se envía email automático con contraseña temporal
4. Usuario debe cambiar en primer login

### Editar Usuario

1. Click en usuario
2. Click "Editar"
3. Modifica información
4. Click "Guardar"

### Desactivar Usuario

1. Click en usuario
2. Click "Desactivar"
3. Usuario pierde acceso
4. Sus datos se preservan

### Importar Usuarios (Masivo)

1. Click "Importar"
2. Carga archivo CSV con:
   ```
   email,nombre,tipo_usuario,curso
   juan@test.cl,Juan García,student,Matemáticas
   maria@test.cl,María López,professor,
   ```
3. El sistema procesa automáticamente
4. Reciben credenciales por email

---

## 📈 Análisis Institucional

### Riesgo Académico Global

1. Click en "Análisis Institucional"
2. Ve estadísticas de toda la institución

```
ESTADÍSTICAS DE RIESGO

Total Estudiantes: 450

Distribución:
🔴 ALTO (>70%):      15 (3.3%)
🟡 MEDIO (40-70%):   65 (14.4%)
🟢 BAJO (<40%):     370 (82.3%)

Tendencia: Mejorando ↗️ (bajó 2% esta semana)

POR CURSO:
Matemáticas:     7 en riesgo (25% de 28)
Lenguaje:        3 en riesgo (11% de 27)
Física:          5 en riesgo (20% de 25)
```

### Comparación por Período

Ver evolución mes a mes:

```
EVOLUCIÓN RIESGO (últimos 3 meses)

Octubre:    🔴 18 (4%), 🟡 75 (16.7%)
Noviembre:  🔴 15 (3.3%), 🟡 65 (14.4%)
Diciembre:  🔴 ? (predicción: 2.8%)

Mejora: Riesgo bajando consistentemente ✓
```

### Desempeño Académico

```
PROMEDIO GENERAL: 7.2/10

Por Nivel:
11° Medio:     7.5
10° Medio:     7.1
9° Básico:     6.9

Por Área:
Matemáticas:   7.0
Lenguaje:      7.4
Ciencias:      7.1
```

---

## 📚 Gestión de Cursos

### Ver Todos los Cursos

1. Click en "Cursos"
2. Ve lista de todos
3. Información:
   - Profesor
   - Cantidad estudiantes
   - Promedio
   - Riesgo

### Crear Curso

1. Click "Nuevo Curso"
2. Completa:

```
Nombre: [________________]
Código: [___]
Profesor: [López ▼]
Período: [Semestre 2 2024 ▼]
Estudiantes Inscritos: [28]

[ Crear ]
```

### Monitoreo de Curso

Click en curso para ver:

```
MATEMÁTICAS AVANZADAS
Profesor: Dr. López
Estudiantes: 28
Promedio: 8.1

ESTADÍSTICAS:
- 90% entrega de tareas
- Riesgo: 25% (7 estudiantes)
- Asistencia promedio: 94%
- Últimas calificaciones: Buenas

ESTUDIANTES EN RIESGO:
□ Juan García - 🔴 ALTO
□ María López - 🟡 MEDIO
□ Pedro Ruiz - 🟡 MEDIO

[ Ver Detalles ] [ Intervenir ]
```

---

## 📊 Reportes Ejecutivos

### Tipos de Reportes

#### 1. Reporte Trimestral

1. Click "Reportes"
2. Click "Nuevo Reporte"
3. Selecciona:
   - Tipo: Trimestral
   - Período: Oct-Dic 2024

Genera:
- Desempeño general
- Comparativa por curso
- Análisis de riesgo
- Intervenciones realizadas
- Recomendaciones

#### 2. Reporte de Riesgo

Enfoque en estudiantes en riesgo:
- Cantidad y distribución
- Cursos más afectados
- Interventencias activas
- Efectividad

#### 3. Reporte de Desempeño

Análisis de logros:
- Mejores cursos
- Mejores estudiantes
- Mejores tendencias
- Áreas de mejora

### Exportar Reportes

```
[ Exportar ▼ ]
├─ PDF (para presentación)
├─ Excel (para análisis)
└─ PowerPoint (para junta)
```

---

## ⚙️ Configuración del Sistema

### Parámetros Institucionales

1. Click en "Configuración"
2. Datos generales:

```
Nombre Institución: [________________]
Logo: [ Cargar ]
Región: [Metropolitana ▼]
Teléfono: [________________]
Email Contacto: [________________]
Sitio Web: [________________]

[ Guardar ]
```

### Períodos Académicos

Definir semestres/trimestres:

```
PERÍODO ACTUAL: Semestre 2 2024

Inicio: 01 Agosto 2024
Fin: 22 Noviembre 2024

PRÓXIMO: Semestre 1 2025
Inicio: 03 Marzo 2025
Fin: 27 Junio 2025

[ Crear Período ]
```

### Umbrales de Riesgo

Configurar puntos de corte:

```
ALTO RIESGO: > 70% de probabilidad
MEDIO RIESGO: 40-70%
BAJO RIESGO: < 40%

Estos pueden ajustarse según política institucional.

[ Guardar ]
```

### Usuarios Administradores

Agregar/quitar admins:

```
Administradores Actuales:
✓ director@test.cl
✓ admin@test.cl

[ Agregar Nuevo ]
[ Remover ]
```

### Notificaciones Automáticas

Configurar alertas:

```
□ Enviar email cuando riesgo ALTO detectado
□ Enviar notificación en plataforma
□ Enviar resumen semanal
□ Alertar sobre intervenciones vencidas

[ Guardar ]
```

---

## 🚨 Monitoreo de Riesgo

### Dashboard de Riesgo

```
RIESGO EN TIEMPO REAL

Alertas Activas: 3
├─ Juan García (Matemáticas) - ALTO
├─ Ana Martínez (Lenguaje) - ALTO
└─ Pedro Ruiz (Física) - MEDIO

Intervenciones:
├─ Activas: 26
├─ Por vencer esta semana: 3
└─ Completadas este mes: 12
```

### Acciones por Riesgo Alto

Cuando se detecta riesgo alto:

1. **Automáticamente:**
   - Se notifica al profesor
   - Se crea intervención sugerida
   - Se registra en el sistema

2. **Como Director:**
   - Recibes notificación
   - Puedes monitore

ar
   - Puedes crear intervención adicional
   - Puedes contactar al profesor

### Ver Intervenciones

```
INTERVENCIONES ACTIVAS: 26

Por Tipo:
- Académicas: 18
- Psicológicas: 5
- Familiares: 3

Por Estado:
- En Progreso: 22
- Por Vencer: 3
- Completadas este mes: 12

[ Ver Todas ] [ Por Vencer ] [ Completadas ]
```

### Efectividad de Intervenciones

Análisis de qué funciona:

```
EFECTIVIDAD

Intervenciones Completadas: 47
Resultados:
- Muy efectivas (recuperación): 32 (68%)
- Efectivas (mejora): 12 (26%)
- Parciales: 2 (4%)
- Inefectivas: 1 (2%)

Tasa de éxito: 94% ✓ Excelente

Recomendación: Continuar con formato actual
```

---

## 📊 Análisis Avanzado

### Correlaciones

Entender qué factores impactan más:

```
FACTORES PRINCIPALES DE RIESGO

1. Asistencia baja (Impacto: 35%)
2. Calificaciones bajas (Impacto: 40%)
3. Tareas no completadas (Impacto: 20%)
4. Cambios emocionales (Impacto: 5%)

Combinación: Estudiante con 2+ factores
Probabilidad de riesgo: 85%
```

### Predicciones

Proyecciones para próximo período:

```
PROYECCIONES PRÓXIMO SEMESTRE

Estudiantes en riesgo esperado: 12 (2.7%)
Intervenciones recomendadas: 15-18
Cursos con mayor riesgo predicho:
1. Matemáticas (5 est.)
2. Física (4 est.)
3. Química (3 est.)
```

---

## 🆘 Troubleshooting

### Reportes tardan mucho

- Reportes grandes pueden demorar
- Intenta generar por período menor
- Usa la opción "Express" si existe

### No puedo ver datos de estudiante

- Verifica permisos de acceso
- Puede estar desactivado
- Contacta a admin técnico

### Gráficos no se cargan

- Refresca página
- Intenta con otro navegador
- Borra caché

---

**Última actualización:** Noviembre 2024

**Versión:** 1.0.0
