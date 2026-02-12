# Checklist Escritor Destravado em 48h 📱

**PWA (Progressive Web App) Mobile-First com Instalação Obrigatória**

## 🎯 Objetivo do Projeto

Este NÃO é um site comum. É um **aplicativo mobile** que funciona através de tecnologia PWA.

O usuário deve:
1. ✅ Acessar o link no celular
2. ✅ Ver a tela de instalação
3. ✅ Instalar o app na tela inicial
4. ✅ Abrir como aplicativo (não pelo navegador)

**O conteúdo só fica disponível após a instalação.**

## 🚀 Como Funciona

### Para o Usuário Final:

1. **Acessa o link** no navegador do celular
2. **Vê uma tela de instalação** (não o conteúdo)
3. **Clica em "INSTALAR APLICATIVO"** (Android) ou segue instruções (iOS)
4. **App é instalado** na tela inicial com ícone próprio
5. **Abre o app** pela tela inicial
6. **Usa o checklist** completo com todas as funcionalidades

### Experiência do Usuário:

- ✅ Parece um app nativo
- ✅ Abre em tela cheia (sem barra de URL)
- ✅ Funciona offline após instalação
- ✅ Ícone próprio na tela inicial
- ✅ Dados salvos automaticamente

## 📱 Funcionalidades

### Tela de Instalação:
- **Detecção automática** de Android/iOS/Desktop
- **Botão de instalação** para Android
- **Instruções visuais** para iOS (Safari)
- **Mensagem informativa** para Desktop

### Aplicativo (Após Instalação):
- ✅ 22 pontos do checklist completo
- ✅ Checkboxes que salvam automaticamente
- ✅ Campo de anotações para cada ponto
- ✅ Barra de progresso visual
- ✅ Funciona 100% offline
- ✅ Botão resetar progresso
- ✅ Interface mobile otimizada

## 🎨 Identidade Visual

- **Cor principal:** #fc8337 (laranja)
- **Estilo:** Profissional, minimalista, clean
- **Ícone:** "ED" em fundo laranja

## 📂 Estrutura de Arquivos

```
checklist-escritor/
├── index.html              # Página principal (tela instalação + app)
├── style.css               # Estilos completos
├── script.js               # Lógica de instalação e app
├── manifest.json           # Configuração PWA (display: standalone)
├── service-worker.js       # Cache para offline
├── icons/                  # Ícones PWA (8 tamanhos)
│   ├── icon-72.png
│   ├── icon-96.png
│   ├── icon-128.png
│   ├── icon-144.png
│   ├── icon-152.png
│   ├── icon-192.png
│   ├── icon-384.png
│   └── icon-512.png
└── README.md               # Este arquivo
```

## 🌐 Como Publicar no GitHub Pages

### Passo 1: Criar Repositório no GitHub

1. Acesse https://github.com
2. Clique em **"New repository"**
3. Nome: `checklist-escritor` (ou outro)
4. Visibilidade: **Público**
5. Clique em **"Create repository"**

### Passo 2: Fazer Upload dos Arquivos

**Via Interface Web (Mais Fácil):**

1. No repositório, clique em **"Add file"** → **"Upload files"**
2. Arraste TODOS os arquivos:
   - `index.html`
   - `style.css`
   - `script.js`
   - `manifest.json`
   - `service-worker.js`
   - Pasta `icons` (com todos os ícones)
3. Escreva uma mensagem: "Primeiro commit"
4. Clique em **"Commit changes"**

**Via Git (Se você usa):**

```bash
git init
git add .
git commit -m "App PWA Checklist Escritor"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/checklist-escritor.git
git push -u origin main
```

### Passo 3: Ativar GitHub Pages

1. No repositório, vá em **Settings** (Configurações)
2. Menu lateral → **Pages**
3. Em **"Source"** → Selecione branch **"main"**
4. Pasta: **/ (root)**
5. Clique em **"Save"**
6. Aguarde 2-5 minutos

### Passo 4: Seu App Está Online!

URL: `https://SEU-USUARIO.github.io/checklist-escritor/`

**IMPORTANTE:** Teste SEMPRE no celular primeiro!

## 📱 Como Instalar no Celular

### Android (Chrome/Edge/Brave):

1. Acesse o link do app no navegador
2. Você verá a **tela de instalação**
3. Clique no botão **"📱 INSTALAR APLICATIVO"**
4. Confirme a instalação
5. O app aparecerá na **tela inicial** com o ícone "ED"
6. Abra o app pela tela inicial

### iPhone (Safari):

1. Acesse o link no Safari
2. Você verá **instruções visuais** na tela
3. Siga os 4 passos:
   - Toque no ícone **Compartilhar** ⎙
   - Role e toque em **"Adicionar à Tela de Início"**
   - Toque em **"Adicionar"**
   - Abra o app pela tela inicial

### ⚠️ Desktop:

Se acessar do computador, verá mensagem pedindo para abrir no celular.

## 🔧 Como Editar

### Alterar Textos:

Todos os textos estão em `index.html`:

```html
<!-- Título principal -->
<h1>Checklist Escritor Destravado em 48h</h1>

<!-- Conteúdo dos pontos -->
<p>Texto do checklist aqui...</p>
```

### Alterar Cores:

Em `style.css`, substitua `#fc8337` pela cor desejada:

```css
/* Exemplos de onde a cor aparece */
background-color: #fc8337;
color: #fc8337;
border-color: #fc8337;
```

### Adicionar Imagens:

1. Coloque a imagem na pasta do projeto
2. No HTML, adicione:

```html
<img src="sua-imagem.png" alt="Descrição" 
     style="width: 100%; border-radius: 8px; margin: 15px 0;">
```

### Alterar Ícone do App:

1. Substitua os arquivos em `/icons/`
2. Mantenha os mesmos nomes e tamanhos
3. Use a cor #fc8337 de fundo

## 🔍 Como Funciona a Detecção

### O JavaScript Detecta:

1. **Se está instalado** (modo standalone)
   - ✅ Sim → Mostra o app
   - ❌ Não → Mostra tela de instalação

2. **Qual dispositivo:**
   - 🤖 Android → Botão de instalação
   - 🍎 iOS → Instruções visuais
   - 💻 Desktop → Mensagem para acessar no celular

### Lógica Principal (script.js):

```javascript
// Verifica se está rodando como app instalado
const isStandalone = window.matchMedia('(display-mode: standalone)').matches;

if (isStandalone) {
    // Mostrar conteúdo do app
} else {
    // Mostrar tela de instalação
}
```

## ✅ Checklist de Publicação

Antes de compartilhar o link com clientes:

- [ ] Todos os arquivos foram enviados ao GitHub
- [ ] GitHub Pages está ativado
- [ ] Link está funcionando
- [ ] Testou no celular Android
- [ ] Testou no iPhone (se possível)
- [ ] Instalação funciona corretamente
- [ ] App abre em tela cheia (sem barra de URL)
- [ ] Conteúdo está correto
- [ ] Progresso está salvando
- [ ] Funciona offline após instalação

## 🐛 Solução de Problemas

### "O botão de instalar não aparece" (Android)

- Verifique se está acessando via HTTPS (GitHub Pages usa HTTPS automaticamente)
- Limpe o cache do navegador
- Tente em outro navegador (Chrome, Edge, Brave)

### "Abre como site, não como app"

- Certifique-se de que o usuário instalou o app
- Peça para abrir PELO ÍCONE na tela inicial, não pelo navegador

### "Não funciona offline"

- Acesse o app online pelo menos uma vez
- Espere alguns segundos para o cache completar
- Verifique se o Service Worker foi registrado

### "Progresso não salva"

- Limpe o cache e acesse novamente
- Verifique se o navegador permite localStorage
- Teste em modo privado para descartar extensões

## 📞 Suporte Técnico

### Para Testar Localmente:

1. Abra `index.html` diretamente no navegador
2. Ou use um servidor local:

```bash
# Python 3
python -m http.server 8000

# Acesse: http://localhost:8000
```

### Verificar Service Worker:

1. Abra DevTools (F12)
2. Aba "Application"
3. Menu "Service Workers"
4. Deve aparecer como "activated and running"

## 🎯 Objetivo Final

O usuário deve sentir que:
- ✅ Instalou um aplicativo
- ✅ Está usando um aplicativo
- ✅ NÃO está usando um site

Mesmo sendo tecnicamente um PWA, a experiência deve ser 100% de app nativo!

---

**Desenvolvido para funcionar como APLICATIVO, não como site** 🚀
