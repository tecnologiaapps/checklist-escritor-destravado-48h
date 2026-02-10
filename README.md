# Checklist Escritor Destravado em 48h 📚

Aplicativo PWA mobile-first para ajudar escritores a tirarem suas histórias do papel em 48 horas.

## 📱 Sobre o Aplicativo

Este é um Progressive Web App (PWA) simples e funcional que transforma o "Checklist Escritor Destravado em 48h" em uma experiência interativa mobile.

### Funcionalidades:

✅ **22 pontos do checklist** com conteúdo completo  
✅ **Checkboxes interativos** que salvam automaticamente  
✅ **Campo de anotações** para cada ponto  
✅ **Barra de progresso** visual  
✅ **Funciona offline** após primeiro acesso  
✅ **Instalável no celular** (Add to Home Screen)  
✅ **Design mobile-first** e responsivo  

## 🎨 Identidade Visual

- **Cor principal:** #fc8337 (laranja)
- **Estilo:** Simples, profissional, minimalista
- **Plataforma:** Exclusivamente mobile

## 📂 Estrutura de Arquivos

```
checklist-escritor/
├── index.html              # Página principal
├── style.css               # Estilos CSS
├── script.js               # Lógica JavaScript
├── manifest.json           # Configuração PWA
├── service-worker.js       # Cache offline
├── icons/                  # Ícones PWA
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

## 🚀 Como Publicar no GitHub Pages

### Passo 1: Criar Repositório

1. Acesse [GitHub](https://github.com)
2. Clique em **"New repository"**
3. Nome do repositório: `checklist-escritor` (ou outro de sua escolha)
4. Marque como **Público**
5. Clique em **"Create repository"**

### Passo 2: Fazer Upload dos Arquivos

**Opção A - Via Interface Web:**

1. No seu repositório, clique em **"Add file"** → **"Upload files"**
2. Arraste TODOS os arquivos e a pasta `icons`
3. Clique em **"Commit changes"**

**Opção B - Via Git (se você usa):**

```bash
git init
git add .
git commit -m "Primeiro commit - Checklist Escritor"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/checklist-escritor.git
git push -u origin main
```

### Passo 3: Ativar GitHub Pages

1. No seu repositório, vá em **Settings** (Configurações)
2. No menu lateral, clique em **Pages**
3. Em **"Source"**, selecione **"main"** branch
4. Clique em **"Save"**
5. Aguarde alguns minutos

### Passo 4: Acessar o App

Seu app estará disponível em:
```
https://SEU-USUARIO.github.io/checklist-escritor/
```

## 📱 Como Instalar no Celular

### No Android (Chrome):

1. Acesse o link do app no navegador
2. Toque no menu (3 pontos) → **"Adicionar à tela inicial"**
3. Confirme a instalação
4. O app aparecerá como um ícone na sua tela inicial

### No iPhone (Safari):

1. Acesse o link do app no Safari
2. Toque no ícone de **Compartilhar** (quadrado com seta)
3. Role para baixo e toque em **"Adicionar à Tela de Início"**
4. Confirme

## ✏️ Como Editar o Aplicativo

### Alterar Textos

Todos os textos estão no arquivo `index.html`. Para editar:

1. Abra o arquivo `index.html`
2. Procure pelo texto que deseja alterar
3. Edite diretamente
4. Salve o arquivo

**Exemplo:**
```html
<!-- Para alterar o título -->
<h1>Checklist Escritor Destravado em 48h</h1>
```

### Alterar Cores

Todas as cores estão no arquivo `style.css`. Principais cores:

```css
/* Cor principal (laranja) */
#fc8337

/* Branco */
#FFFFFF

/* Preto/Cinza escuro */
#343436

/* Cinza médio */
#56585E

/* Cinza claro */
#ECEFF3
```

Para alterar a cor principal:
1. Abra `style.css`
2. Faça "Localizar e substituir" (Ctrl+F)
3. Substitua `#fc8337` pela nova cor

### Adicionar Imagens

Para adicionar imagens aos pontos do checklist:

1. Coloque a imagem na pasta do projeto
2. No `index.html`, adicione dentro do `<div class="content-text">`:

```html
<img src="sua-imagem.png" alt="Descrição" style="width: 100%; border-radius: 8px; margin: 10px 0;">
```

## 💾 Como Funciona o Salvamento

O app usa **localStorage** do navegador para salvar:
- Checkboxes marcados/desmarcados
- Anotações de cada ponto
- Progresso geral

**Importante:** Os dados ficam salvos no navegador. Se limpar os dados do navegador, o progresso será perdido.

## 🔧 Solução de Problemas

### App não funciona offline
- Certifique-se de ter acessado o app pelo menos uma vez com internet
- Verifique se o service worker foi registrado corretamente

### Progresso não salva
- Verifique se o navegador permite localStorage
- Teste em modo anônimo se estiver tendo problemas

### Ícones não aparecem
- Certifique-se de que a pasta `icons` foi enviada junto com os arquivos
- Verifique se os caminhos no `manifest.json` estão corretos

## 📞 Suporte

Se tiver dúvidas ou problemas:
1. Verifique se todos os arquivos foram enviados corretamente
2. Teste primeiro no computador abrindo o `index.html`
3. Limpe o cache do navegador e tente novamente

## 📄 Licença

Este aplicativo foi desenvolvido exclusivamente para uso no produto "Checklist Escritor Destravado em 48h".

---

**Desenvolvido com simplicidade e clareza para quem não é programador** 💡
