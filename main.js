let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString( '<span style="color:#6c85a7"> En proceso de convertirme en Física</SPAN>')
  .pauseFor(200)
  .deleteChars(10)
  .start()

