/* ============================================================================
   THEME MANAGEMENT
   ============================================================================ */

/**
 * Initialize theme system on page load
 */
function initTheme() {
	const savedTheme = localStorage.getItem('theme-preference');
	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const theme = savedTheme || (prefersDark ? 'dark' : 'dark'); // Default to dark
	applyTheme(theme);
}

/**
 * Apply theme to document
 * @param {string} theme - 'light' or 'dark'
 */
function applyTheme(theme) {
	if (theme === 'light') {
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme-preference', 'light');
	} else {
		document.documentElement.removeAttribute('data-theme');
		localStorage.setItem('theme-preference', 'dark');
	}
}

/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
	const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
	const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
	applyTheme(newTheme);
}

/**
 * Setup theme toggle button
 */
function setupThemeToggle() {
	const themeToggle = document.getElementById('theme-toggle');
	if (themeToggle) {
		themeToggle.addEventListener('click', toggleTheme);
		// Add keyboard support (Space/Enter)
		themeToggle.addEventListener('keydown', (e) => {
			if (e.key === ' ' || e.key === 'Enter') {
				e.preventDefault();
				toggleTheme();
			}
		});
	}
}

/* ============================================================================
   FORM VALIDATION & UTILITIES
   ============================================================================ */

/**
 * Validar email usando regex padrão
 * @param {string} email - Email para validar
 * @returns {boolean}
 */
function isValidEmail(email) {
	if (!email) return true; // Email é opcional
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

/**
 * Validar nome (mínimo 2 caracteres, apenas letras e espaços)
 * @param {string} nome - Nome para validar
 * @returns {boolean}
 */
function isValidName(nome) {
	const trimmed = nome.trim();
	return trimmed.length >= 2 && /^[a-zA-ZÀ-ÿ\s]+$/.test(trimmed);
}

/**
 * Validar mensagem (mínimo 10 caracteres)
 * @param {string} mensagem - Mensagem para validar
 * @returns {boolean}
 */
function isValidMessage(mensagem) {
	const trimmed = mensagem.trim();
	return trimmed.length >= 10;
}

/**
 * Exibir erro em campo específico
 * @param {HTMLInputElement|HTMLTextAreaElement} campo - Campo HTML
 * @param {string} mensagemErro - Mensagem de erro
 */
function showFieldError(campo, mensagemErro) {
	const errorElement = document.getElementById(`${campo.id}-error`);
	if (errorElement) {
		errorElement.textContent = mensagemErro;
	}
	campo.setAttribute('aria-invalid', 'true');
}

/**
 * Limpar erro em campo específico
 * @param {HTMLInputElement|HTMLTextAreaElement} campo - Campo HTML
 */
function clearFieldError(campo) {
	const errorElement = document.getElementById(`${campo.id}-error`);
	if (errorElement) {
		errorElement.textContent = '';
	}
	campo.setAttribute('aria-invalid', 'false');
}

/**
 * Exibir mensagem de status do formulário
 * @param {string} mensagem - Mensagem a exibir
 * @param {string} tipo - 'sucesso' ou 'erro'
 */
function showFormStatus(mensagem, tipo) {
	const statusElement = document.getElementById('form-status');
	if (statusElement) {
		statusElement.textContent = mensagem;
		statusElement.className = `form-status ${tipo}`;
		
		if (tipo === 'sucesso') {
			setTimeout(() => {
				statusElement.textContent = '';
				statusElement.className = 'form-status';
			}, 5000);
		}
	}
}

/* ============================================================================
   CONTACT FORM HANDLER
   ============================================================================ */

const formulario = document.getElementById('formulario');
const campoNome = document.getElementById('nome');
const campoEmail = document.getElementById('email');
const campoMensagem = document.getElementById('mensagem');
const botaoEnviar = formulario?.querySelector('button[type="submit"]');

const TELEFONE_WHATSAPP = '5519997740596';
const DELAY_VALIDACAO = 500; // ms
let timeoutValidacao = null;

// Validação em tempo real - Nome
if (campoNome) {
	campoNome.addEventListener('blur', () => {
		const nome = campoNome.value.trim();
		if (nome && !isValidName(nome)) {
			showFieldError(campoNome, 'Nome deve ter pelo menos 2 caracteres e conter apenas letras');
		} else {
			clearFieldError(campoNome);
		}
	});

	campoNome.addEventListener('input', () => {
		clearTimeout(timeoutValidacao);
		timeoutValidacao = setTimeout(() => {
			const nome = campoNome.value.trim();
			if (nome && !isValidName(nome)) {
				showFieldError(campoNome, 'Nome deve ter pelo menos 2 caracteres e conter apenas letras');
			} else {
				clearFieldError(campoNome);
			}
		}, DELAY_VALIDACAO);
	});
}

// Validação em tempo real - Email
if (campoEmail) {
	campoEmail.addEventListener('blur', () => {
		const email = campoEmail.value.trim();
		if (email && !isValidEmail(email)) {
			showFieldError(campoEmail, 'Email inválido');
		} else {
			clearFieldError(campoEmail);
		}
	});

	campoEmail.addEventListener('input', () => {
		clearTimeout(timeoutValidacao);
		timeoutValidacao = setTimeout(() => {
			const email = campoEmail.value.trim();
			if (email && !isValidEmail(email)) {
				showFieldError(campoEmail, 'Email inválido');
			} else {
				clearFieldError(campoEmail);
			}
		}, DELAY_VALIDACAO);
	});
}

// Validação em tempo real - Mensagem
if (campoMensagem) {
	campoMensagem.addEventListener('blur', () => {
		const mensagem = campoMensagem.value.trim();
		if (mensagem && !isValidMessage(mensagem)) {
			showFieldError(campoMensagem, 'Mensagem deve ter pelo menos 10 caracteres');
		} else {
			clearFieldError(campoMensagem);
		}
	});

	campoMensagem.addEventListener('input', () => {
		clearTimeout(timeoutValidacao);
		timeoutValidacao = setTimeout(() => {
			const mensagem = campoMensagem.value.trim();
			if (mensagem && !isValidMessage(mensagem)) {
				showFieldError(campoMensagem, 'Mensagem deve ter pelo menos 10 caracteres');
			} else {
				clearFieldError(campoMensagem);
			}
		}, DELAY_VALIDACAO);
	});
}

// Submit handler
if (formulario) {
	formulario.addEventListener('submit', (event) => {
		event.preventDefault();

		// Validar todos os campos
		const nome = campoNome.value.trim();
		const email = campoEmail.value.trim();
		const mensagem = campoMensagem.value.trim();

		let isValid = true;

		// Validar nome (obrigatório)
		if (!nome || !isValidName(nome)) {
			showFieldError(campoNome, 'Nome é obrigatório e deve ter pelo menos 2 caracteres');
			isValid = false;
		} else {
			clearFieldError(campoNome);
		}

		// Validar email (opcional)
		if (email && !isValidEmail(email)) {
			showFieldError(campoEmail, 'Email inválido');
			isValid = false;
		} else {
			clearFieldError(campoEmail);
		}

		// Validar mensagem (obrigatório)
		if (!mensagem || !isValidMessage(mensagem)) {
			showFieldError(
				campoMensagem,
				'Mensagem é obrigatória e deve ter pelo menos 10 caracteres'
			);
			isValid = false;
		} else {
			clearFieldError(campoMensagem);
		}

		if (!isValid) {
			showFormStatus('Por favor, corrija os erros acima', 'erro');
			return;
		}

		try {
			// Desabilitar botão enquanto processa
			botaoEnviar.disabled = true;
			botaoEnviar.textContent = 'Enviando...';

			// Construir mensagem
			let textoWhatsapp = `Olá! Me chamo ${nome}.`;
			
			if (email) {
				textoWhatsapp += `\n\nEmail: ${email}`;
			}
			
			textoWhatsapp += `\n\nMensagem:\n${mensagem}`;

			// Gerar URL do WhatsApp
			const urlWhatsapp = `https://wa.me/${TELEFONE_WHATSAPP}?text=${encodeURIComponent(textoWhatsapp)}`;

			// Pequeno delay para UX visual
			setTimeout(() => {
				window.open(urlWhatsapp, '_blank');
				
				// Resetar formulário
				formulario.reset();
				showFormStatus('Mensagem preparada! Redirecionando para WhatsApp...', 'sucesso');
				
				// Restaurar botão
				botaoEnviar.disabled = false;
				botaoEnviar.textContent = 'Enviar via WhatsApp';
			}, 300);

		} catch (error) {
			console.error('Erro ao processar formulário:', error);
			showFormStatus('Erro ao processar mensagem. Tente novamente.', 'erro');
			botaoEnviar.disabled = false;
			botaoEnviar.textContent = 'Enviar via WhatsApp';
		}
	});
}

/* ============================================================================
   ACCESSIBILITY & ENHANCEMENTS
   ============================================================================ */

// Suporte para navegação com teclado
document.addEventListener('keydown', (event) => {
	// ESC para fechar qualquer modal/overlay futuro
	if (event.key === 'Escape') {
		const statusElement = document.getElementById('form-status');
		if (statusElement && statusElement.textContent) {
			statusElement.textContent = '';
			statusElement.className = 'form-status';
		}
	}

	// Tab + Enter para enviar formulário
	if (event.key === 'Enter' && event.ctrlKey && formulario) {
		formulario.dispatchEvent(new Event('submit'));
	}
});

// Smooth scroll para links de navegação (fallback para navegadores antigos)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
	link.addEventListener('click', (event) => {
		const href = link.getAttribute('href');
		const target = document.querySelector(href);

		if (target) {
			// Browser suporta scroll-behavior: smooth
			// Mas adicionar fallback programático se necessário
			event.preventDefault();
			target.scrollIntoView({ behavior: 'smooth' });
		}
	});
});

/* ============================================================================
   PERFORMANCE OPTIMIZATION
   ============================================================================ */

// Lazy load images (fallback para navegadores sem suporte nativo)
if ('IntersectionObserver' in window) {
	const imageObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const img = entry.target;
				if (img.dataset.src) {
					img.src = img.dataset.src;
					img.removeAttribute('data-src');
				}
				observer.unobserve(img);
			}
		});
	});

	document.querySelectorAll('img[data-src]').forEach((img) => {
		imageObserver.observe(img);
	});
}

/* ============================================================================
   INITIALIZATION ON DOM READY
   ============================================================================ */

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', () => {
		initTheme();
		setupThemeToggle();
	});
} else {
	// DOM já foi carregado
	initTheme();
	setupThemeToggle();
}
