const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

window.addEventListener('mousemove', (event) => {
	cursor.style.left = `${event.clientX}px`;
	cursor.style.top = `${event.clientY}px`;
});

window.addEventListener('mousedown', () => {
	cursor.style.transform = 'translate(-50%, -50%) scale(1.35)';
});

window.addEventListener('mouseup', () => {
	cursor.style.transform = 'translate(-50%, -50%) scale(1)';
});

const formulario = document.getElementById('formulario');
const campoNome = document.getElementById('nome');
const campoMensagem = document.getElementById('mensagem');
const telefoneWhatsapp = '5519997740596';

if (formulario && campoNome && campoMensagem) {
	formulario.addEventListener('submit', (event) => {
		event.preventDefault();

		const nome = campoNome.value.trim();
		const mensagem = campoMensagem.value.trim();

		if (!nome || !mensagem) {
			alert('Preencha nome e mensagem para continuar.');
			return;
		}

		const texto = `Olá! Me chamo ${nome}. ${mensagem}`;
		const urlWhatsapp = `https://wa.me/${telefoneWhatsapp}?text=${encodeURIComponent(texto)}`;

		window.open(urlWhatsapp, '_blank');
	});
}
