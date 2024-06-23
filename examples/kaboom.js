// You can still use kkplay() instead of kkplay()!
kkplay();

addKKPlay(center());

onKeyPress(() => addKKPlay(mousePos()));
onMouseMove(() => addKKPlay(mousePos()));
