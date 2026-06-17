# 🚀 Guia de Deployment & Testes

## 🧪 Como Testar Localmente

### Opção 1: Python (Recomendado)
```bash
cd "C:\Users\guiol\OneDrive\Desktop\Sites - Portifólio\Apresentacao"
python -m http.server 8000
# Acesse: http://localhost:8000
```

### Opção 2: Node.js (http-server)
```bash
npm install -g http-server
cd "C:\Users\guiol\OneDrive\Desktop\Sites - Portifólio\Apresentacao"
http-server -p 8000
# Acesse: http://localhost:8000
```

### Opção 3: VS Code Live Server
```
1. Instale extensão "Live Server"
2. Clique direito em index.html
3. Selecione "Open with Live Server"
4. Abre automaticamente em http://localhost:5500
```

---

## ✅ Checklist de Testes

### 🔍 Testes Visuais
- [ ] Página carrega sem erros
- [ ] Navbar fixa no topo
- [ ] Foto de perfil com animação (float)
- [ ] Gradientes renderizam corretamente
- [ ] Glassmorphism (blur) visível
- [ ] Cards com hover effect
- [ ] Botão muda cor no hover
- [ ] Footer aparece no rodapé

### 📱 Responsividade
- [ ] Testar em 1920px (desktop)
- [ ] Testar em 1024px (tablet)
- [ ] Testar em 768px (tablet small)
- [ ] Testar em 480px (mobile)
- [ ] Testar em 320px (mobile small)
- [ ] Foto de perfil redimensiona
- [ ] Fonte escala adequadamente
- [ ] Menu não quebra

### ⌨️ Navegação com Teclado
- [ ] Tab navega por links
- [ ] Tab navega para inputs
- [ ] Enter ativa links
- [ ] Enter em botão envia form
- [ ] Focus visible em todos elementos
- [ ] Ordem de foco é lógica
- [ ] Nenhum keyboard trap

### 🔤 Acessibilidade
- [ ] Titles legíveis em reader de tela
- [ ] Labels visíveis nos inputs
- [ ] Alt text em imagens
- [ ] Contraste suficiente (4.5:1+)
- [ ] Sem dependência só de cor
- [ ] Mensagens de erro claras
- [ ] Asteriscos de obrigatoriedade visíveis

### 📝 Validação de Formulário

#### Nome (obrigatório)
- [ ] Campo vazio: erro "Nome é obrigatório"
- [ ] 1 caractere: erro "mínimo 2"
- [ ] "12345": erro "apenas letras"
- [ ] "João": sucesso, sem erro
- [ ] "José da Silva": sucesso
- [ ] Validação em tempo real (ao sair)
- [ ] Validação ao submit

#### Email (opcional)
- [ ] Campo vazio: sem erro (opcional)
- [ ] "email.invalido": erro "Email inválido"
- [ ] "user@example.com": sucesso
- [ ] "test+tag@gmail.co.uk": sucesso
- [ ] Validação ao blur
- [ ] Validação ao submit

#### Mensagem (obrigatório)
- [ ] Campo vazio: erro
- [ ] "abc": erro "mínimo 10"
- [ ] "Olá mundo!!": erro "mínimo 10"
- [ ] "Olá mundo!!!!": sucesso (10 caracteres)
- [ ] Validação em tempo real
- [ ] Mensagem com acentos: OK

### 🔘 Botão & Envio
- [ ] Botão com texto "Enviar via WhatsApp"
- [ ] Ícone "→" visível
- [ ] Hover: botão sobe + shadow maior
- [ ] Focus: outline visível
- [ ] Click: desabilita temporariamente
- [ ] Click: texto muda para "Enviando..."
- [ ] Abre WhatsApp em nova aba
- [ ] Form reseta após sucesso
- [ ] Mensagem de sucesso aparece

### 🔗 Links & Navegação
- [ ] Início: scroll suave
- [ ] Sobre: scroll suave
- [ ] Projetos: scroll suave
- [ ] Contato: scroll suave
- [ ] Navbar atualiza foco ao navegar
- [ ] Hover em links: sublinha aparece
- [ ] Focus visível em links

### 🎨 Colors & Contrast
- [ ] Contraste texto/fundo: OK
- [ ] Gradientes legíveis
- [ ] Buttons visíveis
- [ ] Links distinguíveis
- [ ] Errors em vermelho claro
- [ ] Sucesso em verde

### ⚡ Performance
- [ ] Página carrega < 3s
- [ ] Sem console errors
- [ ] Sem console warnings (maioria)
- [ ] Animações suaves (60 FPS)
- [ ] Sem layout shift
- [ ] Images carregam lazy

### 🌐 Cross-browser
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (se Mac)
- [ ] Edge (latest)
- [ ] Mobile Chrome
- [ ] Mobile Safari (se iOS)

---

## 📊 Lighthouse Audit

### No Chrome DevTools:
```
1. Abrir http://localhost:8000
2. F12 ou Ctrl+Shift+I
3. Aba "Lighthouse"
4. Selecionar todas as categorias
5. Clicar "Analyze page load"
```

### Scores Esperados:
- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 90+
- **SEO:** 100

### Checklist automático:
- [ ] Performance > 90
- [ ] Accessibility > 95
- [ ] Best Practices > 90
- [ ] SEO = 100

---

## 🔒 Segurança Checklist

- [ ] Inputs fazem trim
- [ ] URL WhatsApp usa encodeURIComponent
- [ ] Sem XSS vulnerabilities
- [ ] Sem SQL injection (não aplica)
- [ ] HTTPS ready (future)
- [ ] Sem secrets hardcoded
- [ ] Validação client-side + server-side (future)

---

## 📦 Deployment (GitHub Pages)

### 1. Setup GitHub Pages
```bash
git init
git remote add origin https://github.com/seu-usuario/portfolio-web.git
git branch -M main
```

### 2. Push to GitHub
```bash
git add .
git commit -m "Deploy: Modernização completa do portfólio"
git push -u origin main
```

### 3. Habilitar Pages
```
1. GitHub repo → Settings
2. Pages → Source
3. Deploy from: main branch
4. Salvar
5. Aguardar 1-2 minutos
6. Acessar: https://seu-usuario.github.io/portfolio-web
```

### 4. Custom Domain (opcional)
```
1. Settings → Pages
2. Custom domain: seu-dominio.com
3. Configurar DNS provider (CNAME, A records)
4. Aguardar propagação DNS
```

---

## 🔍 SEO Verification

### Google Search Console
```
1. Ir para search.google.com/search-console
2. Adicionar propriedade (seu domínio)
3. Verificar ownership
4. Submit sitemap (future)
5. Monitorar performance
```

### Meta Tags Verification
```bash
# Abrir no navegador, pressionar F12 e verificar:
1. <title>: "Guilherme Oliveira | Desenvolvedor Full Stack"
2. <meta name="description">: visível
3. <meta property="og:title">: visível
4. <meta property="og:image">: visível (future)
```

---

## 📈 Analytics Setup (Opcional)

### Google Analytics
```html
<!-- Adicionar ao <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## 🐛 Debugging

### Chrome DevTools
```
1. F12 para abrir Developer Tools
2. Console: verificar erros/warnings
3. Elements: inspecionar HTML/CSS
4. Network: verificar requisições
5. Performance: profiling
6. Lighthouse: audit
```

### Firefox Developer Tools
```
1. F12 para abrir Developer Tools
2. Inspector: HTML/CSS
3. Console: JavaScript errors
4. Network: requisições
5. Accessibility: a11y issues
```

### Common Issues & Fixes
```
❌ "Fonts não carregam"
   → Verificar preconnect tags
   → Verificar internet
   → Check browser cache

❌ "Layout quebrado em mobile"
   → F12 → Toggle device toolbar
   → Testar em viewport específico
   → Check media queries

❌ "Validação não funciona"
   → F12 → Console → erros?
   → Verificar ID dos inputs
   → Testar em outro navegador

❌ "Animações travadas"
   → Verificar performance (F12)
   → Usar transform ao invés de left/top
   → Reduzir número de elementos animados
```

---

## 📝 Commit Message Convention

```bash
# Feature
git commit -m "feat: adicionar dark mode"

# Fix
git commit -m "fix: corrigir validação email"

# Docs
git commit -m "docs: atualizar README"

# Style
git commit -m "style: ajustar espaçamento"

# Refactor
git commit -m "refactor: organizar CSS com BEM"

# Performance
git commit -m "perf: lazy loading de imagens"

# Exemplo completo
git commit -m "feat: adicionar validação real-time

- Adicionar validação em tempo real com debounce
- Feedback visual inline para erros
- Aria-live para mensagens de status
- Closes #42"
```

---

## 🔄 Versionamento

### Semantic Versioning (semver)
```
MAJOR.MINOR.PATCH
  v1.0.0      ← Breaking changes
     v1.1.0   ← New features
        v1.0.1 ← Bug fixes
```

### Exemplo
```
v1.0.0 - Modernização inicial
v1.1.0 - Adicionar dark mode
v1.1.1 - Corrigir bug de validação
v2.0.0 - Integração com backend
```

---

## 📞 Suporte & Issues

### Reportar Bug
```
Título: [BUG] Validação não funciona em iPhone

Descrição:
- Versão do navegador: Safari 15.1
- Dispositivo: iPhone 12
- Passos para reproduzir:
  1. Abrir em iPhone
  2. Preencher nome com caracteres especiais
  3. Observar: erro não aparece

Esperado: Mostrar erro
Obtido: Nenhuma mensagem
```

### Feature Request
```
Título: [FEATURE] Adicionar dark mode

Descrição:
- Benefício: melhor para noite
- Prioridade: baixa
- Referências: GitHub dark mode, Twitter
```

---

## 🎓 Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [WebAIM - Accessibility](https://webaim.org/)
- [Google Web Vitals](https://web.dev/vitals/)
- [Lighthouse Docs](https://developers.google.com/web/tools/lighthouse)
- [Can I Use](https://caniuse.com/)

---

## ✅ Pre-launch Checklist

- [ ] Todos os testes passam
- [ ] Lighthouse > 90 em todas categorias
- [ ] Sem console errors
- [ ] Responsivo em todos breakpoints
- [ ] Keyboard navigation funciona
- [ ] Screen reader compatible
- [ ] Formulário valida corretamente
- [ ] WhatsApp link funciona
- [ ] GitHub commit message clara
- [ ] README.md atualizado
- [ ] Documentação completa
- [ ] Git history limpo
- [ ] .gitignore configurado
- [ ] LICENSE presente
- [ ] GitHub Pages habilitado

---

## 🚀 Ready to Deploy!

```
┌──────────────────────────────────────┐
│  ✅ TUDO PRONTO PARA PUBLICAÇÃO ✅   │
│                                      │
│  📊 Qualidade: ⭐⭐⭐⭐⭐          │
│  🔒 Acessibilidade: ⭐⭐⭐⭐⭐      │
│  ⚡ Performance: ⭐⭐⭐⭐⭐        │
│  📱 Responsividade: ⭐⭐⭐⭐⭐      │
│                                      │
│  Deploy agora! 🎉                   │
└──────────────────────────────────────┘
```

---

**Última atualização:** Junho 2024  
**Versão:** 1.0
