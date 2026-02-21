// Checklist Escritor Destravado em 48h - Versão v10 Estável
const CHECKLIST_DATA = [
    { id: 1, phase: 1, title: "Ambiente de Escrita", content: "Defina onde você vai escrever. Pode ser um caderno, o bloco de notas do celular ou um computador. O importante é ter um lugar fixo." },
    { id: 2, phase: 1, title: "Alinhamento de Mentalidade", content: "Escrever não é sobre inspiração, é sobre decisão. Decida que você vai terminar este checklist." },
    { id: 3, phase: 1, title: "Definição do Gênero", content: "Sobre o que você quer escrever? Romance, Terror, Autoajuda? Escolha um e mantenha o foco." },
    { id: 4, phase: 1, title: "Público-Alvo", content: "Para quem você está escrevendo? Imagine uma pessoa real lendo seu livro." },
    { id: 5, phase: 1, title: "A Grande Ideia", content: "Resuma seu livro em uma única frase. Se não conseguir, a ideia ainda está confusa." },
    { id: 6, phase: 1, title: "O Conflito Central", content: "Qual é o grande problema que seu livro resolve ou apresenta?" },
    { id: 7, phase: 1, title: "Personagens Principais", content: "Dê nome e uma característica marcante para seus protagonistas." },
    { id: 8, phase: 2, title: "Estrutura de Capítulos", content: "Divida sua história em pelo menos 10 capítulos curtos." },
    { id: 9, phase: 2, title: "O Início Impactante", content: "As primeiras linhas devem prender o leitor imediatamente." },
    { id: 10, phase: 2, title: "Desenvolvimento de Personagens", content: "Mostre como seus personagens mudam ao longo da história." },
    { id: 11, phase: 2, title: "Diálogos Realistas", content: "Leia seus diálogos em voz alta. Eles parecem naturais?" },
    { id: 12, phase: 2, title: "Cenários e Ambientação", content: "Descreva os lugares de forma que o leitor consiga visualizar." },
    { id: 13, phase: 2, title: "O Ponto de Virada", content: "Acontece algo que muda tudo na metade do livro." },
    { id: 14, phase: 2, title: "Clímax da História", content: "O momento de maior tensão, onde o conflito é resolvido." },
    { id: 15, phase: 2, title: "O Desfecho", content: "Feche as pontas soltas e dê um final satisfatório." },
    { id: 16, phase: 3, title: "Primeira Revisão", content: "Leia tudo e corrija erros óbvios de gramática e lógica." },
    { id: 17, phase: 3, title: "Feedback de Leitores Beta", content: "Mostre para 2 ou 3 pessoas de confiança e ouça as críticas." },
    { id: 18, phase: 3, title: "Ajustes Finais", content: "Aplique os feedbacks que fazem sentido para sua obra." },
    { id: 19, phase: 3, title: "Título Definitivo", content: "Escolha um título que seja impossível de ignorar." },
    { id: 20, phase: 3, title: "Sinopse Atrativa", content: "Escreva o texto da contracapa que vai vender seu livro." },
    { id: 21, phase: 3, title: "Capa e Design", content: "Pense visualmente como seu livro será apresentado." },
    { id: 22, phase: 3, title: "Plano de Publicação", content: "Decida se vai publicar na Amazon, editora ou de forma independente." }
];

const MOTIVATIONAL_PHRASES = [
    "O primeiro rascunho não precisa ser bom, ele só precisa existir.",
    "Você não pode editar uma página em branco.",
    "Escrever é a única maneira de descobrir o que você tem a dizer.",
    "Um escritor é alguém que não desistiu de escrever.",
    "Sua história importa. Alguém precisa ler o que só você pode escrever."
];

const TUTORIAL_VIDEO_LINK = "https://youtube.com/@senorlabios?si=LpwaFMTqVwinM8ov"; // Substitua pelo seu link não listado
const FEEDBACK_LINK = "https://forms.gle/exemplo"; // Substitua pelo seu link do formulário

let state = {
    completed: [],
    notes: {},
    collapsedPhases: [1, 2, 3] // Começam recolhidas
};

// Carregar estado do LocalStorage
function loadState() {
    const saved = localStorage.getItem('checklist_escritor_v10');
    if (saved) {
        state = JSON.parse(saved);
    }
}

// Salvar estado no LocalStorage
function saveState() {
    localStorage.setItem('checklist_escritor_v10', JSON.stringify(state));
    updateProgress();
}

// Atualizar barra de progresso (Livro SVG)
function updateProgress() {
    const total = CHECKLIST_DATA.length;
    const completedCount = state.completed.length;
    const percent = Math.round((completedCount / total) * 100);
    
    const textElements = [document.getElementById('progress-text'), document.getElementById('list-progress-text')];
    textElements.forEach(el => {
        if (el) el.innerText = `${completedCount}/${total} pontos concluídos (${percent}%)`;
    });

    const fillLeft = document.getElementById('book-fill-left');
    const fillRight = document.getElementById('book-fill-right');
    
    if (fillLeft && fillRight) {
        const fillWidth = (percent / 100) * 33;
        if (percent <= 50) {
            fillLeft.setAttribute('width', (percent / 50) * 33);
            fillRight.setAttribute('width', 0);
        } else {
            fillLeft.setAttribute('width', 33);
            fillRight.setAttribute('width', ((percent - 50) / 50) * 33);
        }
    }
}

// Trocar de tela
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    
    const floatHome = document.getElementById('btn-float-home');
    if (screenId === 'screen-dashboard') {
        floatHome.style.display = 'none';
        renderDashboard();
    } else {
        floatHome.style.display = 'flex';
        if (screenId === 'screen-list') renderList();
    }
    window.scrollTo(0, 0);
}

// Botão da Casinha (Correção solicitada)
function handleBack() {
    showScreen('screen-dashboard');
}

// Renderizar Dashboard
function renderDashboard() {
    const quoteBox = document.getElementById('daily-quote');
    if (quoteBox) {
        const randomQuote = MOTIVATIONAL_PHRASES[Math.floor(Math.random() * MOTIVATIONAL_PHRASES.length)];
        quoteBox.innerText = `"${randomQuote}"`;
    }
    updateProgress();
}

// Renderizar Lista
function renderList() {
    const container = document.getElementById('checklist-container');
    container.innerHTML = '';

    [1, 2, 3].forEach(phaseNum => {
        const phaseWrapper = document.createElement('div');
        phaseWrapper.className = 'phase-wrapper';
        
        const isCollapsed = state.collapsedPhases.includes(phaseNum);
        
        phaseWrapper.innerHTML = `
            <div class="phase-header ${isCollapsed ? 'collapsed' : ''}" onclick="togglePhase(${phaseNum})">
                <div class="phase-header-content">
                    <img src="icone-fase${phaseNum}.png" width="24" height="24" style="margin-right:10px">
                    Fase ${phaseNum}
                </div>
                <span class="phase-toggle-icon">▼</span>
            </div>
            <div id="phase-content-${phaseNum}" class="phase-content ${isCollapsed ? 'collapsed' : ''}"></div>
        `;
        
        const contentArea = phaseWrapper.querySelector(`#phase-content-${phaseNum}`);
        CHECKLIST_DATA.filter(d => d.phase === phaseNum).forEach(item => {
            const isDone = state.completed.includes(item.id);
            const itemCard = document.createElement('div');
            itemCard.className = 'point-card';
            itemCard.style.borderLeftColor = isDone ? 'var(--primary-color)' : 'transparent';
            itemCard.onclick = () => showDetails(item.id);
            
            itemCard.innerHTML = `
                <div class="point-title">${item.title}</div>
                <div class="custom-checkbox ${isDone ? 'checked' : ''}">
                    <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
            `;
            contentArea.appendChild(itemCard);
        });
        
        container.appendChild(phaseWrapper);
    });
}

function togglePhase(phaseNum) {
    if (state.collapsedPhases.includes(phaseNum)) {
        state.collapsedPhases = state.collapsedPhases.filter(p => p !== phaseNum);
    } else {
        state.collapsedPhases.push(phaseNum);
    }
    saveState();
    renderList();
}

// Mostrar Detalhes
function showDetails(id) {
    const item = CHECKLIST_DATA.find(d => d.id === id);
    const isDone = state.completed.includes(id);
    const note = state.notes[id] || "";
    
    const container = document.getElementById('details-view');
    container.innerHTML = `
        <div class="details-header">
            <img src="icone-ponto.png" width="80" height="80" style="margin-bottom:15px">
            <h2>${item.title}</h2>
        </div>
        <div class="card details-content">
            <p>${item.content}</p>
        </div>
        <div class="large-check-container" onclick="toggleCheck(${id})">
            <div class="custom-checkbox ${isDone ? 'checked' : ''}" style="width:30px; height:30px;">
                <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <span style="font-weight:bold">${isDone ? 'Concluído' : 'Marcar como Concluído'}</span>
        </div>
        <div class="card">
            <h4 style="margin-bottom:10px">Minhas Anotações:</h4>
            <textarea class="notes-area" placeholder="Escreva aqui suas ideias sobre este ponto..." oninput="saveNote(${id}, this.value)">${note}</textarea>
        </div>
    `;
    showScreen('screen-details');
}

function toggleCheck(id) {
    if (state.completed.includes(id)) {
        state.completed = state.completed.filter(i => i !== id);
    } else {
        state.completed.push(id);
        showModal();
    }
    saveState();
    showDetails(id);
}

function saveNote(id, value) {
    state.notes[id] = value;
    saveState();
}

// Modal de Conclusão
function showModal() {
    const modal = document.getElementById('modal-overlay');
    const phrase = MOTIVATIONAL_PHRASES[Math.floor(Math.random() * MOTIVATIONAL_PHRASES.length)];
    document.getElementById('modal-phrase').innerText = `"${phrase}"`;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}

// Funções de Exportação (Nova Lógica Infalível)
function exportNotes() {
    let content = "CHECKLIST ESCRITOR DESTRAVADO EM 48H\n\n";
    CHECKLIST_DATA.forEach(item => {
        const status = state.completed.includes(item.id) ? "[CONCLUÍDO]" : "[PENDENTE]";
        const note = state.notes[item.id] || "Sem anotações.";
        content += `PONTO: ${item.title} ${status}\n`;
        content += `DESCRIÇÃO: ${item.content}\n`;
        content += `MINHAS ANOTAÇÕES: ${note}\n`;
        content += "------------------------------------------\n\n";
    });

    // Em vez de forçar download, abre em uma nova janela para o usuário copiar ou salvar
    const win = window.open("", "_blank");
    win.document.write(`<pre style="white-space: pre-wrap; font-family: sans-serif; padding: 20px;">${content}</pre>`);
    win.document.title = "Minhas Anotações - Checklist Escritor";
    alert("O conteúdo foi gerado em uma nova aba. Você pode copiar o texto ou usar a opção 'Imprimir' do seu celular para salvar como PDF.");
}

function exportPDF() {
    // Mesma lógica simplificada para PDF
    exportNotes();
}

// Links Externos
function watchTutorial() { window.location.href = TUTORIAL_VIDEO_LINK; }
function openFeedback() { window.location.href = FEEDBACK_LINK; }
function reportProblem() { window.location.href = "mailto:senorlabios@senorlabios.com?subject=Problema no App Checklist"; }

// Reset com Timer
let resetTimer;
function startResetTimer() {
    const alertBox = document.getElementById('custom-alert');
    const timerEl = document.getElementById('alert-timer');
    const confirmBtn = document.getElementById('alert-btn-confirm');
    
    document.getElementById('alert-title').innerText = "Resetar Tudo?";
    document.getElementById('alert-body').innerText = "Isso apagará todo o seu progresso e anotações permanentemente.";
    
    alertBox.style.display = 'flex';
    timerEl.style.display = 'block';
    confirmBtn.disabled = true;
    
    let count = 15;
    timerEl.innerText = count;
    
    clearInterval(resetTimer);
    resetTimer = setInterval(() => {
        count--;
        timerEl.innerText = count;
        if (count <= 0) {
            clearInterval(resetTimer);
            confirmBtn.disabled = false;
            timerEl.style.display = 'none';
        }
    }, 1000);
}

function closeAlert() {
    clearInterval(resetTimer);
    document.getElementById('custom-alert').style.display = 'none';
}

function confirmAlert() {
    localStorage.removeItem('checklist_escritor_v10');
    location.reload();
}

// Inicialização
window.onload = () => {
    loadState();
    renderDashboard();
};
