# learn-react
Repositorio para aprender React. 

1. Creación de proyecto (solo haced uno de estos a o b):

a.
```
  npm create vite
```
Opciones: `"blog" > React > Javascript`

b. Clonar proyecto:
```
  git clone https://github.com/cesarlpb/learn-react.git
```

---

2. Una vez creado o clonado. Comandos para iniciar proyecto:                       
```
  cd blog
  npm i 
  npm run dev
```

## Live Share
`Aqui solo hay diversión:`: 
https://prod.liveshare.vsengsaas.visualstudio.com/join?E287C760B7FFF76DB409776E84E15423CF95
```
  ╱|、
(˚ˎ 。7  
  |、˜〵          
じしˍ,)ノ
```
```
ᓚᘏᗢ
```
```
¯\\__(ツ)_/¯
```
--- 

## Página de referencia

[Blog de viajes](https://www.viajeroscallejeros.com/)

## Componentes

```
<App>
  <Home>
    -- <Header>     // no requiere trabajo
      -- <Navbar>   // Logo + Enlaces -> estilos               "2/5"
    -- <Hero>       // a veces es slider -> estilos             2/5
    -- <PostContainer>      // Últimos posts -> renombrar a <Container> 3/5
      --- <Post>   // Crear desde cero   3 o 4 / 5
      --- <Post>
      --- <Post>
      --- <Post>
    -- <PostContainer>      // Guías
      ...
    -- <PostContainer>      // Consejos
      ...
    -- <Footer>   // estilos  2/5
      // 3 cols con enlaces
```

## Bootstrap con React-Bootstrap
[Instalación](https://react-bootstrap.netlify.app/docs/getting-started/introduction)
1. Instalar módulo:
```
  npm install react-bootstrap bootstrap
```
2. Pegar ejemplo con botones: https://react-bootstrap.netlify.app/docs/getting-started/introduction
3. Importar la hoja `bootstrap.min.css` en `main.jsx`:
```
  import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
```