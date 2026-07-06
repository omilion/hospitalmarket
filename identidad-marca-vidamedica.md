# Identidad de marca VidaMedica

Fecha de revision: 2026-06-09  
Sitio revisado: https://vidamedica.cl/

Este documento resume la identidad visual y verbal observada en la web publica de VidaMedica, con foco en reutilizar la marca de forma consistente en sitio web, ecommerce, piezas comerciales, presentaciones y materiales institucionales.

## Fuentes revisadas

- Home: https://vidamedica.cl/
- Nosotros: https://vidamedica.cl/nosotros/
- Tienda: https://vidamedica.cl/tienda/
- Blog: https://vidamedica.cl/blog/
- Logo SVG: https://vidamedica.cl/logo.svg
- CSS compilada: https://vidamedica.cl/_next/static/css/3c5a6b0774934ae4.css

Nota: la pagina de contacto mostro una verificacion intermedia publica al momento de la revision, por lo que los datos de contacto se tomaron desde navegacion/footer y paginas accesibles.

## Esencia de marca

VidaMedica se presenta como una empresa chilena de insumos y dispositivos medicos certificados, orientada a profesionales de salud, clinicas, hospitales, laboratorios, instituciones y hogares que necesitan compra confiable con respaldo tecnico.

La marca se apoya en cuatro ideas principales:

- Certificacion y confianza: productos certificados ISP y altos estandares de calidad.
- Distribucion oficial: presencia de marcas globales como BD, Essity y Bard.
- Disponibilidad y rapidez: despacho nacional, con foco en 1 a 3 dias habiles en RM y 3 a 7 dias en regiones.
- Asesoria especializada: ayuda tecnica para elegir insumos adecuados segun necesidad clinica.

Promesa central recomendada: insumos medicos certificados, con respaldo profesional y despacho rapido en Chile.

## Nombre y uso verbal

- Nombre de marca: `VidaMedica`.
- Version de logotipo: `VIDAMEDICA&reg;`.
- Bajada/tagline: `Bienestar para las Personas`.
- Dominio: `vidamedica.cl`.

Usar `VidaMedica` como forma principal en textos comerciales y UI. Reservar `VIDAMEDICA&reg;` para footer, piezas institucionales, encabezados de marca y contextos donde se use el logotipo. Evitar alternar innecesariamente con `Vida Medica` separado, salvo que exista una razon legal o SEO especifica.

## Posicionamiento

VidaMedica debe sentirse como una marca medica, seria y operativa, no como una marca decorativa o aspiracional. La identidad actual combina limpieza clinica, e-commerce moderno y lenguaje institucional.

Territorio de marca:

- Sector: insumos medicos, dispositivos medicos, cuidado de heridas, terapia venosa, diabetes, toma de muestra, ortopedia e higiene.
- Audiencias: profesionales de salud, compras institucionales, pacientes/cuidadores, clinicas, hospitales y laboratorios.
- Diferenciadores visibles: certificacion ISP, distribuidor oficial, variedad de catalogo, despacho a todo Chile, experiencia de mercado.
- Personalidad: confiable, tecnica, directa, cercana, resolutiva.

## Paleta cromatica

### Colores principales

| Rol | Hex | Uso recomendado |
| --- | --- | --- |
| Marca / primario UI | `#2A8A86` | Botones principales, enlaces activos, iconos, badges, foco, hover de navegacion, acentos de cards. |
| Primario hover | `#1E7572` | Hover de CTA principal y enlaces importantes. |
| Primario oscuro | `#1A5E5C` | Estados activos, fondos institucionales oscuros, contraste sobre piezas claras. |
| Primario suave | `#E8F5F4` | Fondos de badges, areas de apoyo, estados suaves. |
| Primario muy claro | `#F0FAF9` | Superficies alternativas y hover suave. |
| Teal claro | `#7DD8D5` | Detalles decorativos controlados, resaltes secundarios, gradientes sutiles. |

### Colores del logotipo

| Rol | Hex | Uso |
| --- | --- | --- |
| Wordmark VIDAMEDICA | `#006B6E` | Color del texto principal y simbolo `&reg;` en el SVG del logo. |
| Tagline logo | `#32353E` | Bajada `Bienestar para las Personas` en el SVG del logo. |

El logo usa un teal mas oscuro que el primario UI. Mantener esta diferencia: `#006B6E` para el logotipo y `#2A8A86` para sistema visual/interfaz.

### Neutros

| Rol | Hex | Uso recomendado |
| --- | --- | --- |
| Fondo global | `#F8FAFB` | Fondo general del sitio y secciones claras. |
| Blanco | `#FFFFFF` | Navbar, cards, formularios, superficies principales. |
| Texto principal | `#1A202C` | Titulares, nombres de productos, texto de alta prioridad. |
| Texto secundario | `#64748B` | Navegacion, bajadas, descripciones, metadata. |
| Texto muted | `#94A3B8` | Placeholders, etiquetas suaves, iconos secundarios. |
| Borde | `#E2E8F0` | Separadores, inputs, cards, dropdowns. |
| Hover neutro | `#F1F5F9` | Estados hover suaves y fondos de menu movil. |
| Scrollbar / borde frio | `#CBD5E1` | Componentes secundarios y scrollbars. |

### Colores de soporte

| Rol | Hex | Uso recomendado |
| --- | --- | --- |
| WhatsApp | `#25D366` | Iconos o enlaces de WhatsApp. No usar como color de marca general. |
| Exito / confirmacion | `#1DA851` | Confirmaciones o estados positivos. |
| Alerta externa / partner | `#FFFF00` | Aparece en el badge de proveedor externo `hazlomejor.cl`; no usar como color VidaMedica. |
| Acento rosa | `#F05097` / `#D14080` | Presente en CSS como soporte; usar solo si ya existe un componente definido. |

### Proporcion recomendada

- 60-70% superficies claras: `#F8FAFB`, `#FFFFFF`.
- 20-25% texto y neutros: `#1A202C`, `#64748B`, `#E2E8F0`.
- 5-10% acento teal: `#2A8A86` y variantes.
- Menos de 2% colores de soporte como WhatsApp o alertas.

## Tokens sugeridos

```css
:root {
  --vm-brand: #2A8A86;
  --vm-brand-hover: #1E7572;
  --vm-brand-dark: #1A5E5C;
  --vm-brand-soft: #E8F5F4;
  --vm-brand-soft-2: #F0FAF9;
  --vm-logo-teal: #006B6E;
  --vm-logo-gray: #32353E;

  --vm-surface: #F8FAFB;
  --vm-white: #FFFFFF;
  --vm-border: #E2E8F0;
  --vm-text: #1A202C;
  --vm-text-muted: #64748B;
  --vm-text-soft: #94A3B8;

  --vm-whatsapp: #25D366;
  --vm-success: #1DA851;
}
```

## Tipografia

### Fuente principal

La web usa `Inter` como fuente principal para cuerpo, UI y logo. La CSS tambien carga `Geist` y `Geist Mono`, pero el estilo activo del sitio y el logotipo estan resueltos principalmente con Inter.

Stack recomendado:

```css
font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
```

### Pesos observados

- `400`: texto regular, bajadas, tagline del logo.
- `500`: links secundarios y textos de menu.
- `600`: subtitulos, menu movil, textos de apoyo.
- `700`: botones y CTAs.
- `900`: logotipo, H1/H2, etiquetas fuertes, titulos de categorias.

La marca se siente mas propia cuando usa pesos altos para titulares y rotulos, combinados con cuerpo sobrio en 400/500.

### Escala tipografica observada

| Elemento | Clase/escala observada | Uso |
| --- | --- | --- |
| H1 home | `text-4xl md:text-5xl lg:text-6xl`, `font-black`, `leading-[1.05]`, `tracking-tight` | Titular principal de pagina. |
| H2 seccion | `text-2xl` a `text-5xl`, `font-black` | Titulos de bloques como categorias, marcas y pilares. |
| H3 categoria | `text-sm`, `font-black`, uppercase | Rotulos de categoria, cards y mega menu. |
| Navegacion desktop | `text-xs`, `font-black`, uppercase, `tracking-[0.2em]` | Menu superior. |
| CTA | `text-sm`, `font-bold`, uppercase, `tracking-widest` | Botones principales y secundarios. |
| Texto cuerpo | `text-base` / `text-lg`, peso 400-500 | Descripciones y parrafos institucionales. |
| Microcopy | `text-[10px]` / `text-xs`, uppercase, tracking amplio | Eyebrows, badges, metadata. |

### Reglas tipograficas

- Usar mayusculas con tracking amplio solo en navegacion, badges, CTAs y etiquetas; no en parrafos.
- Reservar `font-black` para jerarquia clara: logo, H1, H2, categorias y numeros destacados.
- Evitar mezclar muchas familias: Inter debe resolver casi todo.
- Mantener line-height compacto en titulares (`1.05` a `1.25`) y mas aireado en parrafos (`1.5` a `1.625`).

## Logo

El logo publico es un SVG horizontal de `220 x 44 px`.

Estructura:

- Texto principal `VIDAMEDICA` en Inter, peso 900, color `#006B6E`.
- Simbolo `&reg;` alineado arriba a la derecha, Inter 900, color `#006B6E`.
- Tagline `Bienestar para las Personas` en Inter, peso 400, italic, color `#32353E`.

Usos recomendados:

- Preferir version completa en fondos blancos o muy claros.
- Mantener proporcion original; no condensar ni estirar.
- Usar altura minima aproximada de 36 px en navegacion movil, 40 px en desktop compacto y hasta 56 px en header principal.
- Dejar area de seguridad equivalente al alto de la bajada del logo alrededor.
- No recolorear el logo con el primario UI `#2A8A86`; preservar `#006B6E` salvo una version aprobada.
- No aplicar sombras, gradientes, outlines o fondos decorativos al logo.

## Sistema visual UI

### Layout

La web usa composicion limpia con contenedores centrados, fondos claros y bloques de ecommerce. La navegacion es fija, blanca, con blur y borde inferior suave. Los contenidos importantes usan tarjetas, grids y secciones con respiracion vertical.

Patrones principales:

- Contenedor maximo amplio tipo Tailwind `container`.
- Padding lateral `px-6`.
- Secciones con `py-12` a `py-32` segun jerarquia.
- Grids responsivos de 1 a 4 columnas.
- Header fijo con `bg-white/95`, `backdrop-blur-md`, borde `#E2E8F0`.

### Bordes y radios

- Inputs y botones: `rounded-xl` = 12 px.
- Cards destacadas y dropdowns: `rounded-2xl` = 16 px.
- Badges pequenos: `rounded-full`.
- Esquinas generales: suaves, modernas, pero no excesivamente redondeadas.

### Sombras

Sombras observadas:

```css
--shadow-card: 0 2px 8px #00000014;
--shadow-card-hover: 0 8px 24px #0000001f;
--shadow-navbar: 0 1px 3px #00000014;
```

Uso recomendado:

- Sombras suaves para cards y dropdowns.
- Hover con elevacion leve (`translateY(-0.5px)` a `-1.5px`) y sombra mas visible.
- Evitar sombras pesadas o dramaticas; la marca debe sentirse clinica y confiable.

### Botones

Boton primario:

- Fondo `#2A8A86`.
- Hover `#1E7572`.
- Texto blanco.
- Peso 700.
- Uppercase con tracking amplio.
- Padding generoso (`px-8 py-4` en CTAs grandes).
- Radio 12 px.

Boton secundario:

- Blanco o transparente sobre fondos oscuros.
- Borde suave.
- Texto teal o blanco segun contexto.
- Hover con relleno sutil.

Boton institucional / cuenta:

- Contorno teal `#2A8A86`.
- Texto teal.
- Hover: fondo teal y texto blanco.

### Navegacion

La navegacion refuerza una imagen B2B confiable:

- Logo a la izquierda.
- Links cortos en uppercase.
- Mega menu por categorias.
- Buscador visible en desktop.
- CTA `Mi cuenta`.
- Menu movil full-screen con items de 17 px y separadores suaves.

Categorias principales del menu:

- Cuidado de Heridas
- Fijacion Medica
- Diabetes
- Terapia Venosa
- Toma Muestra
- Otros Insumos
- Higiene

## Iconografia

La web usa iconos lineales SVG de trazo simple, generalmente con stroke 2 a 2.5. El estilo recomendado es:

- Iconos outline, geometricos, sin rellenos complejos.
- Color teal para acciones/beneficios principales.
- Gris secundario para busqueda, cuenta, menu y metadata.
- Iconos pequenos de 14 a 24 px en UI.
- Mantener coherencia con familia tipo Lucide/Heroicons.

## Imagenes y fotografia

El sitio usa assets de producto/marca y fotografia funcional:

- Banners de marcas oficiales: BD y Essity.
- Imagen institucional de tienda/oficina en Las Condes.
- Producto/categoria como recurso principal del ecommerce.

Direccion visual recomendada:

- Usar imagenes reales de productos, empaques, clinicas, bodega, despacho o atencion profesional.
- Priorizar nitidez, fondo limpio y buena iluminacion.
- Evitar imagenes medicas genericas demasiado stock, oscuras o dramaticas.
- En categorias, mostrar el tipo de insumo reconocible: apositos, jeringas, cateteres, tubos, vendas, ortopedia.
- Mantener overlays teal suaves solo cuando ayuden a legibilidad o hover.

## Tono de voz

El tono actual es tecnico, directo y comercialmente confiable. Habla de certificacion, disponibilidad, despacho y respaldo.

Principios:

- Claro antes que creativo.
- Profesional sin sonar frio.
- Orientado a resolver compra y abastecimiento.
- Usar datos concretos: plazos, marcas, cobertura, certificaciones.
- Evitar claims medicos absolutos que puedan sonar clinicamente riesgosos.

Frases y mensajes consistentes:

- `Insumos medicos certificados`
- `Distribuidor oficial`
- `Despacho a todo Chile`
- `Entrega RM en 24-48 hrs habiles`
- `1-3 dias habiles RM`
- `3-7 dias habiles regiones`
- `Venta institucional y mayorista`
- `Asesoria especializada`
- `Bienestar para las Personas`

## Copy base recomendado

### Descripcion corta

VidaMedica es una empresa chilena dedicada a la comercializacion de insumos y dispositivos medicos certificados, con marcas de prestigio internacional, asesoria especializada y despacho a todo Chile.

### Descripcion comercial

Compra insumos medicos certificados para clinicas, hospitales, laboratorios y cuidado en el hogar. En VidaMedica encuentras productos de alto estandar, distribucion oficial de marcas lideres y despacho rapido en Chile.

### Mensaje institucional

Trabajamos para facilitar el acceso a insumos medicos de calidad, con orientacion profesional, proveedores globales y un servicio confiable para instituciones y personas.

## Jerarquia de mensajes

1. Que vende: insumos y dispositivos medicos certificados.
2. A quien sirve: profesionales, instituciones de salud y hogares.
3. Por que confiar: certificacion ISP, marcas oficiales, experiencia de mercado.
4. Por que comprar ahora: stock, despacho rapido, cobertura nacional, venta institucional.
5. Como continuar: comprar, cotizar, contactar especialista o iniciar sesion.

## SEO y metadata observada

La web trabaja keywords de alta intencion comercial:

- `insumos medicos Chile`
- `insumos medicos certificados`
- `apositos`
- `jeringas`
- `cateteres`
- `tubos vacutainer`
- `cuidado de heridas`
- `terapia venosa`
- `diabetes`
- `toma de muestra`
- `distribuidor oficial BD`
- `Essity`

Metadata observada en home:

- Title: `Insumos Medicos Chile 2026 - Vidamedica`
- Description: compra de insumos medicos certificados en Chile, envio a todo Chile con BlueExpress.
- Open Graph: enfasis en distribuidor oficial, marcas BD, Essity, Cutimed y despacho nacional.

Recomendacion: mantener SEO transaccional por categoria y complementar con contenido tecnico en blog para capturar busquedas informativas.

## Componentes de marca reutilizables

### Badge de confianza

Uso: hero, cards institucionales, ficha de producto.

Texto sugerido:

- `Certificado ISP`
- `Distribuidor oficial`
- `Despacho a todo Chile`
- `Entrega RM 24-48 hrs`

Estilo:

- Fondo blanco o `#E8F5F4`.
- Texto `#2A8A86` o `#1A202C`.
- Icono outline teal.
- Uppercase, `text-[10px]` a `text-xs`, `font-black`, tracking amplio.

### Card de categoria

Contenido:

- Titulo corto en uppercase.
- Descripcion concreta de productos.
- CTA `Ver productos`.

Estilo:

- Fondo blanco o teal oscuro segun seccion.
- Radio 16 px.
- Hover con sombra suave y desplazamiento minimo.
- Acento teal en icono o borde.

### CTA institucional

Texto recomendado:

- `Cotizacion institucional`
- `Compra institucional / Mayoreo`
- `Hablar con un especialista`

Estilo:

- Primario si es accion principal.
- Secundario outline si acompana a `Comprar ahora`.

## Accesibilidad y contraste

Buenas practicas a mantener:

- `#1A202C` sobre fondos claros tiene buen contraste para texto principal.
- `#2A8A86` funciona bien para botones con texto blanco.
- Los estados focus ya usan outline teal (`2px solid #2A8A86`), conservarlos.
- Evitar texto `#94A3B8` en tamanos pequenos si es informacion critica.
- No depender solo del color para estados de error/exito; sumar icono y texto.
- Revisar contraste de textos blancos sobre imagenes con overlays.

## Reglas rapidas de uso

- Usar Inter como fuente unica salvo necesidad tecnica.
- Usar `#2A8A86` para acciones y acentos; no saturar toda la interfaz de teal.
- Mantener fondos claros y mucho blanco para sensacion clinica.
- Usar `font-black` con moderacion para titulares y etiquetas.
- Mantener CTAs cortos, concretos y orientados a compra/cotizacion.
- Mostrar certificaciones, marcas oficiales y plazos cerca de los puntos de decision.
- Usar imagenes reales de productos o contexto medico, no ilustraciones genericas.
- Preservar el logo en sus colores originales.

## Checklist para nuevas piezas

- El logo esta en color original y con espacio suficiente.
- La pieza usa `#2A8A86` como acento principal, no otro verde/azul improvisado.
- La tipografia principal es Inter.
- El mensaje menciona al menos uno de los pilares: certificacion, distribucion oficial, despacho, asesoria.
- Los botones tienen accion clara: comprar, cotizar, contactar, ver productos.
- La imagen muestra producto, servicio real o contexto medico creible.
- El contraste es legible en mobile y desktop.
- Las categorias usan nombres consistentes con el sitio.
- Los claims medicos son verificables y prudentes.
