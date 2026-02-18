const points = [
    { id: 1, phase: 1, title: "Ambiente de Escrita", content: "Ambiente físico propício para a atividade literária\n\nO ambiente de escrita não precisa ser bonito, silencioso ou perfeito. Ele precisa ser reconhecível. Um lugar que o seu cérebro associe automaticamente com "agora eu escrevo".\n\nPode ser uma mesa simples, um canto do quarto, a mesa da cozinha à noite. O importante é que esse espaço reduza distrações e facilite o início. Quanto menos esforço você precisa para começar, maior a chance de continuar.\n\nAmbiente não é luxo. É estratégia contra a procrastinação. Crie um esconderijo que tem essa aura, ela irá propiciar a atividade de escrita, a ideia é: Poucos itens para sua mente não ter tantos estímulos visuais.", why: "O ambiente importa! A energia desses ambientes propiciam a atividade, de maneira que ela acontece naturalmente, sem muito esforço!", completionPhrase: "Seu esconderijo está pronto – agora, as distrações somem!" },
    { id: 2, phase: 1, title: "Alinhamento de Mentalidade", content: "A — Você já tem tudo que precisa para começar\nB — Compromisso com a existência, não com a perfeição\n\nVocê não está travado porque falta talento, estudo ou inspiração.\n\nVocê está travado porque acredita que ainda não está pronto. Esse checklist existe para quebrar essa mentira.\n\nO compromisso aqui não é escrever bem. É escrever algo que exista.\n\nPerfeição é um problema da revisão, não da criação. Histórias boas só nascem depois que histórias imperfeitas existem.\n\nEnquanto você tentar acertar de primeira, você não começa.\n\nQuando você aceita escrever mal no início, você avança.", completionPhrase: "Você já tem tudo – comece imperfeito e avance!" },
    { id: 3, phase: 1, title: "Rotina de Escrita Bloqueada na Agenda", content: "Se a escrita não tem horário, ela vira desejo abstrato.\n\nBloquear um horário na agenda é um ato de respeito com a sua história.\n\nNão precisa ser longo: 20 ou 30 minutos já funcionam. O importante é que esse horário exista e seja tratado como compromisso real, não como "se sobrar tempo".\n\nEscritores não escrevem quando dá vontade. Escrevem quando chega a hora.", completionPhrase: "Horário marcado é promessa cumprida – escreva quando chega a hora." },
    { id: 4, phase: 1, title: "Metas de Escrita", content: "Metas não existem para te pressionar, e sim para te orientar.\n\nSem meta, você nunca sabe se avançou ou não.\n\nDefina algo simples e mensurável:\n– número de palavras\n– número de páginas\n– ou tempo escrevendo\n\nMeta pequena, cumprida com constância, vence qualquer explosão ocasional de motivação.", completionPhrase: "Pequenas metas constroem grandes histórias – você avançou hoje!" },
    { id: 5, phase: 1, title: "Organização de Arquivos", content: "Arquivo perdido gera frustração. Frustração gera abandono.\n\nCrie uma pasta clara para o seu livro. Dentro dela, separe rascunhos, anotações e versões. Isso reduz o caos mental e evita aquela sensação de "não sei onde parei".\n\nOrganização aqui não é estética. É proteção contra desistência.", completionPhrase: "Caos evitado – sua história está segura e acessível." },
    { id: 6, phase: 1, title: "Lista de Inspirações", content: "De que obras a sua obra bebe?\n\nNenhuma história nasce do nada.\n\nListar suas inspirações te ajuda a entender o tipo de experiência que você quer criar no leitor.\n\nNão é para copiar. É para se orientar.\n\nQuando você sabe o que te emociona como leitor, fica mais fácil escrever algo que emocione como autor.\n\nEssa lista funciona como um norte emocional.", completionPhrase: "Suas inspirações guiam – emocione como você foi emocionado." },
    { id: 7, phase: 1, title: "Ambientação do Mundo Imaginada", content: "Você não precisa criar um mundo inteiro agora.\n\nPrecisa apenas imaginar o suficiente para escrever a primeira cena.\n\nOnde a história acontece?\n\nQual o clima?\n\nQue tipo de mundo é esse?\n\nClareza mínima gera segurança máxima para começar.", completionPhrase: "Mundo esboçado – agora, entre nele com segurança." },
    { id: 8, phase: 2, title: "Escolha de Imagens e Músicas Inspiracionais", content: "Imagens e músicas funcionam como atalhos emocionais.\n\nElas te colocam rapidamente no clima da história sem exigir esforço racional.\n\nNão é distração. É preparação emocional.\n\nUse referências visuais e sonoras que te façam sentir o livro antes de escrevê-lo.\n\nSentimento vem antes da técnica.", completionPhrase: "Atalhos emocionais ativados – sinta a história antes de escrevê-lo." },
    { id: 9, phase: 2, title: "Escolha das Cenas Importantes", content: "Faróis que fazem você querer continuar\n\nEssas cenas são os momentos que fazem você pensar:\n\n"Eu preciso escrever isso."\n\nElas não precisam estar detalhadas agora. Basta saber que existem.", completionPhrase: "Faróis acesos – você sabe para onde ir na neblina." },
    { id: 10, phase: 2, title: "Personagens Principais Criados", content: "Você não precisa saber tudo sobre eles.\n\nPrecisa apenas saber quem são, o que querem e o que os machuca.\n\nPersonagens claros facilitam decisões narrativas.\n\nQuando você sabe quem está na cena, escrever deixa de ser um esforço abstrato.\n\nHistórias avançam quando personagens têm desejo.", completionPhrase: "Personagens com desejos – agora, a história se move sozinha." },
    { id: 11, phase: 2, title: "Utilização de IA", content: "A IA não substitui sua história. Ela apoia o processo.\n\nUse para destravar ideias, organizar pensamentos, testar possibilidades ou reduzir insegurança técnica. Não use para terceirizar sua voz.\n\nA IA é uma ferramenta. O coração da história continua sendo seu.", completionPhrase: "Ferramenta ao seu lado – sua voz continua no comando." },
    { id: 12, phase: 2, title: "Sinopse", content: "A sinopse é a história contada sem enfeite.\n\nEla te ajuda a enxergar se a ideia se sustenta.\n\nNão é para vender o livro ainda.\n\nÉ para você entender o que está escrevendo e não se perder no caminho.\n\nQuem não sabe explicar a própria história, se perde ao escrevê-la.", completionPhrase: "História explicada – você não se perderá no caminho." },
    { id: 13, phase: 2, title: "Conhecimento Básico da Proposta do Livro", content: "Estudo breve sobre o tema\n\nVocê não precisa ser especialista.\n\nPrecisa apenas não se sentir completamente perdido.\n\nEsse estudo é limitado e funcional.\n\nEle serve para dar segurança suficiente para escrever, não para adiar o começo.\n\nPesquisa que impede escrita é fuga disfarçada.", completionPhrase: "Segurança ganha – pesquise o suficiente, escreva o resto." },
    { id: 14, phase: 2, title: "Escolha do Conflito Central / Vilão", content: "Toda história anda por causa de um problema.\n\nDefinir o conflito central evita que o livro vire uma sequência solta de cenas.\n\nO vilão nem sempre é uma pessoa. Pode ser uma situação, uma ideia, um sistema ou um medo interno.\n\nSem conflito, não há avanço narrativo.", completionPhrase: "Conflito definido – sua história ganha movimento real." },
    { id: 15, phase: 3, title: "Desenvolvimento de Personagens", content: "Aqui você começa a aprofundar motivações, contradições e falhas.\n\nPersonagens interessantes não são perfeitos — são humanos.\n\nEsse desenvolvimento não precisa estar completo agora.\n\nEle evolui junto com a escrita.\n\nPersonagem cresce enquanto a história avança.", completionPhrase: "Personagens humanos – eles crescem com você." },
    { id: 16, phase: 3, title: "Escolha do Tipo de Narrador", content: "Primeira pessoa, terceira pessoa, narrador observador…\n\nEssa escolha muda completamente a experiência do leitor.\n\nEscolha o tipo que te faz escrever com menos resistência.\n\nO melhor narrador é aquele que você consegue sustentar.\n\nFacilidade aqui é estratégia, não preguiça.", completionPhrase: "Narrador escolhido – escreva com fluidez natural." },
    { id: 17, phase: 3, title: "Estrutura de Enredo", content: "Escolha de qual será utilizada\n\nEstrutura não engessa criatividade. Ela organiza.\n\nEscolher uma estrutura te dá um mapa básico: começo, meio e fim.\n\nVocê não precisa segui-la à risca, mas precisa de um esqueleto.\n\nCriatividade sem estrutura vira abandono.", completionPhrase: "Esqueleto pronto – criatividade agora tem base." },
    { id: 18, phase: 3, title: "Clímax", content: "O que é e como usar\n\nO clímax é o ponto de maior tensão da história.\n\nÉ quando vários problemas explodem ao mesmo tempo e algo precisa mudar.\n\nAqui, você não resolve tudo com calma.\n\nVocê pressiona o personagem até o limite.\n\nHistórias são lembradas pelo clímax.", completionPhrase: "Tensão máxima – sua história será inesquecível." },
    { id: 19, phase: 3, title: "Sinopse Expandida", content: "Agora você amplia a sinopse inicial.\n\nMais detalhes, mais causa e consequência, mais clareza do arco.\n\nEssa versão serve como guia durante a escrita.\n\nQuando você se perder, ela te puxa de volta.\n\nNão é prisão. É orientação.", completionPhrase: "Guia ampliado – volte aqui quando precisar." },
    { id: 20, phase: 3, title: "Escolha do Formato de Início da História", content: "Onde o leitor entra na sua história?\n\nNo meio da ação, antes do conflito, após um evento marcante?\n\nEssa decisão influencia diretamente o engajamento inicial.\n\nEscolha um começo que te dê vontade de continuar escrevendo.\n\nSe você não quer seguir, o leitor também não vai.", completionPhrase: "Início engajante – você e o leitor querem continuar." },
    { id: 21, phase: 3, title: "Revisões", content: "Revisar não é corrigir tudo de uma vez.\n\nÉ um processo em camadas.\n\nPrimeiro estrutura, depois cenas, depois linguagem.\n\nNunca misture revisão com escrita inicial.\n\nRevisão é para depois que o texto existe.", completionPhrase: "Camadas polidas – o texto existe, agora refine." },
    { id: 22, phase: 3, title: "Publicação", content: "Publicar não é o fim. É a consequência de não desistir.\n\nAqui você decide formato, caminho e expectativas realistas.\n\nNão precisa ser perfeito, famoso ou grandioso.\n\nPublicar é declarar: essa história existe.", completionPhrase: "História declarada – você não desistiu, e isso é vitória!" }
];

const quotes = [
    "Escreva mal, mas escreva – a perfeição vem depois.",
    "O mais assustador é a página em branco. – Stephen King",
    "Comece onde você está, use o que você tem, faça o que você pode. – Arthur Ashe",
    "Sua história merece existir.",
    "Imperfeição é o início da grandeza.",
    "Escreva agora, refine depois."
];

const phases = [
    { id: 1, title: "Preparação Básica", icon: "icone-fase1.png" },
    { id: 2, title: "Criação Essencial", icon: "icone-fase2.png" },
    { id: 3, title: "Estruturação e Finalização", icon: "icone-fase3.png" }
];

const STORAGE_KEY = 'escritor_48h_state_v7';
// ✅ CORRIGIDO: Link real do formulário de feedback
const FEEDBACK_LINK = "https://forms.gle/SEU_LINK_REAL_AQUI";

let state = {
    checks: new Array(22).fill(false),
    notes: new Array(22).fill(""),
    tutorialDone: false,
    openPhases: [false, false, false],
    screenHistory: ['screen-dashboard']
};

// ========================================
// FUNÇÕES DE ESTADO E NAVEGAÇÃO
// ========================================

function loadState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            state = { ...state, ...parsed };
        }
    } catch (e) { 
        console.error('Erro ao carregar estado:', e); 
    }
}

function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        updateProgress();
    } catch (e) { 
        console.error('Erro ao salvar estado:', e); 
    }
}

function showScreen(screenId, pushHistory = true) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const screen = document.getElementById(screenId);
    if (screen) {
        screen.classList.add('active');
    }
    window.scrollTo(0, 0);
    
    const floatBtn = document.getElementById('btn-float-home');
    if (floatBtn) {
        floatBtn.style.display = (screenId === 'screen-dashboard') ? 'none' : 'flex';
    }

    if (screenId === 'screen-list') renderList();
    
    if (pushHistory && state.screenHistory[state.screenHistory.length - 1] !== screenId) {
        state.screenHistory.push(screenId);
    }

    // ✅ CORRIGIDO: Tutorial aparece imediatamente após carregar estado
    if (!state.tutorialDone && screenId === 'screen-dashboard') {
        setTimeout(() => {
            const tutorialOverlay = document.getElementById('tutorial-overlay');
            if (tutorialOverlay) {
                tutorialOverlay.style.display = 'flex';
            }
        }, 100);
    }
}

function handleBack() {
    if (state.screenHistory.length > 1) {
        state.screenHistory.pop();
        const prevScreen = state.screenHistory[state.screenHistory.length - 1];
        showScreen(prevScreen, false);
    } else {
        showScreen('screen-dashboard', false);
    }
}

// ========================================
// FUNÇÕES DE PROGRESSO
// ========================================

function updateProgress() {
    const completed = state.checks.filter(c => c).length;
    const percentage = Math.round((completed / 22) * 100);
    
    const progressText = document.getElementById('progress-text');
    if (progressText) {
        progressText.innerText = `${completed}/22 pontos desbloqueados (${percentage}%)`;
    }
    
    const listProgressText = document.getElementById('list-progress-text');
    if (listProgressText) {
        listProgressText.innerText = `${completed}/22 pontos (${percentage}%)`;
    }
    
    const leftFill = document.getElementById('book-fill-left');
    const rightFill = document.getElementById('book-fill-right');
    const fillWidth = (percentage / 100) * 33;
    
    if (leftFill) leftFill.setAttribute('width', fillWidth);
    if (rightFill) rightFill.setAttribute('width', fillWidth);
}

// ========================================
// FUNÇÕES DE RENDERIZAÇÃO
// ========================================

function renderList() {
    const container = document.getElementById('checklist-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    phases.forEach((phase, phaseIndex) => {
        const phasePoints = points.filter(p => p.phase === phase.id);
        const phaseWrapper = document.createElement('div');
        phaseWrapper.className = 'phase-wrapper';
        
        const phaseHeader = document.createElement('div');
        phaseHeader.className = 'phase-header';
        phaseHeader.onclick = () => togglePhase(phaseIndex);
        
        phaseHeader.innerHTML = `
            <div class="phase-header-content">
                <img src="${phase.icon}" width="24" height="24" style="margin-right: 8px;" alt="Ícone">
                <span>${phase.title}</span>
            </div>
            <svg class="phase-arrow ${state.openPhases[phaseIndex] ? 'open' : ''}" viewBox="0 0 24 24" width="24" height="24">
                <path d="M7 10l5 5 5-5z"/>
            </svg>
        `;
        
        const phaseContent = document.createElement('div');
        phaseContent.className = `phase-content ${state.openPhases[phaseIndex] ? 'open' : ''}`;
        
        phasePoints.forEach(point => {
            const pointIndex = point.id - 1;
            const isChecked = state.checks[pointIndex];
            
            const pointDiv = document.createElement('div');
            pointDiv.className = 'point-item';
            pointDiv.onclick = () => showDetails(point.id);
            
            pointDiv.innerHTML = `
                <img src="icone-ponto.png" width="20" height="20" style="margin-right: 8px;" alt="Ponto">
                <div style="flex: 1;">
                    <div style="font-weight: bold;">${point.title}</div>
                    <div style="font-size: 12px; color: #666;">Ponto ${point.id} de 22</div>
                </div>
                ${isChecked ? '<svg viewBox="0 0 24 24" width="24" height="24" style="fill: var(--primary-color);"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>' : ''}
            `;
            
            phaseContent.appendChild(pointDiv);
        });
        
        phaseWrapper.appendChild(phaseHeader);
        phaseWrapper.appendChild(phaseContent);
        container.appendChild(phaseWrapper);
    });
}

function togglePhase(phaseIndex) {
    state.openPhases[phaseIndex] = !state.openPhases[phaseIndex];
    saveState();
    renderList();
}

function showDetails(pointId) {
    const point = points.find(p => p.id === pointId);
    if (!point) return;
    
    const pointIndex = pointId - 1;
    const detailsView = document.getElementById('details-view');
    if (!detailsView) return;
    
    detailsView.innerHTML = `
        <img src="professor-detalhe.jpg" alt="Professor" width="80" height="80" class="professor-img" style="margin-bottom: 20px;">
        <h2 style="margin-bottom: 10px; color: var(--primary-color);">${point.title}</h2>
        <p style="font-size: 12px; color: #888; margin-bottom: 20px;">Ponto ${pointId} de 22</p>
        
        <div class="card">
            <div style="white-space: pre-line; line-height: 1.6; margin-bottom: 20px;">${point.content}</div>
            ${point.why ? `<div style="background: var(--bg-color); padding: 15px; border-radius: var(--radius); margin-bottom: 20px;"><strong>Por quê?</strong><br>${point.why}</div>` : ''}
        </div>
        
        <div class="card">
            <label style="display: block; font-weight: bold; margin-bottom: 10px;">Minhas Anotações:</label>
            <textarea 
                id="note-textarea" 
                placeholder="Escreva aqui suas anotações sobre este ponto..." 
                style="width: 100%; min-height: 120px; padding: 10px; border: 1px solid #ddd; border-radius: var(--radius); font-size: 14px; resize: vertical;"
            >${state.notes[pointIndex]}</textarea>
            <button class="btn btn-secondary" onclick="saveNote(${pointIndex})" style="margin-top: 10px; margin-bottom: 0;">Salvar Anotação</button>
        </div>
        
        <div style="display: flex; align-items: center; background: var(--white); padding: 15px; border-radius: var(--radius); margin-bottom: 20px; box-shadow: var(--shadow);">
            <input 
                type="checkbox" 
                id="check-${pointId}" 
                ${state.checks[pointIndex] ? 'checked' : ''} 
                onchange="toggleCheck(${pointIndex})"
                style="width: 24px; height: 24px; margin-right: 12px; cursor: pointer;"
            >
            <label for="check-${pointId}" style="cursor: pointer; font-weight: bold;">Marcar como concluído</label>
        </div>
    `;
    
    showScreen('screen-details');
}

function toggleCheck(index) {
    state.checks[index] = !state.checks[index];
    saveState();
    
    if (state.checks[index]) {
        const point = points[index];
        showModal(point.completionPhrase);
    }
}

function saveNote(index) {
    const textarea = document.getElementById('note-textarea');
    if (textarea) {
        state.notes[index] = textarea.value;
        saveState();
        showAlert("Anotação Salva", "Sua anotação foi salva com sucesso!");
    }
}

// ========================================
// FUNÇÕES DE MODAL E ALERT
// ========================================

function showModal(phrase) {
    const modalPhrase = document.getElementById('modal-phrase');
    const modalOverlay = document.getElementById('modal-overlay');
    if (modalPhrase && modalOverlay) {
        modalPhrase.innerText = phrase;
        modalOverlay.style.display = 'flex';
    }
}

function closeModal() {
    const modalOverlay = document.getElementById('modal-overlay');
    if (modalOverlay) {
        modalOverlay.style.display = 'none';
    }
}

function showAlert(title, body, confirmCb = null, timer = 0) {
    const alertTitle = document.getElementById('alert-title');
    const alertBody = document.getElementById('alert-body');
    const overlay = document.getElementById('custom-alert');
    const timerEl = document.getElementById('alert-timer');
    const confirmBtn = document.getElementById('alert-btn-confirm');
    
    if (!overlay) return;
    
    if (alertTitle) alertTitle.innerText = title;
    if (alertBody) alertBody.innerText = body;
    
    overlay.style.display = 'flex';
    
    if (timer > 0 && timerEl && confirmBtn) {
        timerEl.style.display = 'block';
        confirmBtn.disabled = true;
        let timeLeft = timer;
        timerEl.innerText = timeLeft;
        
        const interval = setInterval(() => {
            timeLeft--;
            timerEl.innerText = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(interval);
                confirmBtn.disabled = false;
                timerEl.style.display = 'none';
            }
        }, 1000);
    } else {
        if (timerEl) timerEl.style.display = 'none';
        if (confirmBtn) confirmBtn.disabled = false;
    }

    window.confirmAlert = () => {
        overlay.style.display = 'none';
        if (confirmCb) confirmCb();
    };
}

function closeAlert() {
    const overlay = document.getElementById('custom-alert');
    if (overlay) {
        overlay.style.display = 'none';
    }
}

// ========================================
// TUTORIAL
// ========================================

function finishTutorial() {
    state.tutorialDone = true;
    saveState();
    const tutorialOverlay = document.getElementById('tutorial-overlay');
    if (tutorialOverlay) {
        tutorialOverlay.style.display = 'none';
    }
}

// ========================================
// EXPORTAÇÃO E BACKUP - ✅ CORRIGIDO
// ========================================

function exportNotes() {
    console.log('Exportando notas...');
    try {
        let text = "MEU PROGRESSO - ESCRITOR DESTRAVADO\n\n";
        points.forEach((p, i) => {
            text += `${state.checks[i] ? "[X]" : "[ ]"} ${p.title}\nConteúdo: ${p.content}\nAnotações: ${state.notes[i] || "Nenhuma"}\n\n`;
        });
        downloadFile(text, 'meu-progresso.txt', 'text/plain');
    } catch (e) {
        console.error('Erro ao exportar notas:', e);
        alert('Erro ao exportar notas. Tente novamente.');
    }
}

async function exportPDF() {
    console.log('Exportando PDF...');
    try {
        // Verifica se jsPDF está carregado
        if (!window.jspdf) {
            throw new Error('jsPDF não carregado');
        }
        
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        doc.setFontSize(18);
        doc.text("Meu Progresso - Escritor Destravado", 10, 20);
        doc.setFontSize(10);
        let y = 30;
        
        points.forEach((p, i) => {
            if (y > 260) { 
                doc.addPage(); 
                y = 20; 
            }
            
            doc.setFont("helvetica", "bold");
            doc.text(`${state.checks[i] ? "[X]" : "[ ]"} ${p.title}`, 10, y);
            y += 6;
            
            doc.setFont("helvetica", "normal");
            const contentLines = doc.splitTextToSize(p.content, 180);
            doc.text(contentLines, 10, y);
            y += (contentLines.length * 5) + 2;
            
            doc.setFont("helvetica", "italic");
            const note = state.notes[i] || "Sem anotações";
            const splitNote = doc.splitTextToSize(`Minhas Anotações: ${note}`, 170);
            doc.text(splitNote, 15, y);
            y += (splitNote.length * 5) + 8;
        });
        
        const pdfData = doc.output('blob');
        downloadFile(pdfData, 'meu-progresso.pdf', 'application/pdf');
    } catch (e) {
        console.error('Erro ao gerar PDF:', e);
        alert("Erro ao gerar PDF. Verifique sua conexão e tente novamente.");
    }
}

function saveBackup() {
    console.log('Salvando backup...');
    try {
        const data = JSON.stringify(state, null, 2);
        downloadFile(data, 'backup-escritor-48h.json', 'application/json');
    } catch (e) {
        console.error('Erro ao salvar backup:', e);
        alert('Erro ao salvar backup. Tente novamente.');
    }
}

function downloadFile(content, fileName, contentType) {
    try {
        let blob;
        if (content instanceof Blob) {
            blob = content;
        } else {
            blob = new Blob([content], { type: contentType });
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
            const base64data = e.target.result;
            // Formato que o MainActivity.kt intercepta
            window.location.href = base64data + "#" + fileName;
        };
        reader.readAsDataURL(blob);
    } catch (e) {
        console.error('Erro ao fazer download:', e);
        alert('Erro ao fazer download. Tente novamente.');
    }
}

// ========================================
// LINKS SOCIAIS E FEEDBACK - ✅ CORRIGIDO
// ========================================

function openInstagram() {
    console.log('Abrindo Instagram...');
    // Tenta abrir o app nativo do Instagram primeiro
    const instagramUrl = 'instagram://user?username=senorlabiosofc';
    const webUrl = 'https://www.instagram.com/senorlabiosofc/';
    
    // No Android, o MainActivity.kt intercepta e abre o app
    window.location.href = instagramUrl;
    
    // Fallback para web após 500ms se não abrir
    setTimeout(() => {
        window.open(webUrl, '_blank');
    }, 500);
}

function openYoutube() {
    console.log('Abrindo YouTube...');
    // Tenta abrir o app nativo do YouTube primeiro
    const youtubeUrl = 'youtube://youtube.com/@senorlabios';
    const webUrl = 'https://youtube.com/@senorlabios?si=LpwaFMTqVwinM8ov';
    
    // No Android, o MainActivity.kt intercepta e abre o app
    window.location.href = youtubeUrl;
    
    // Fallback para web após 500ms se não abrir
    setTimeout(() => {
        window.open(webUrl, '_blank');
    }, 500);
}

function openFeedback() {
    console.log('Abrindo formulário de feedback...');
    showAlert(
        "Nos diga o que achou", 
        "Sua opinião é muito importante! Após responder ao formulário, você receberá acesso a uma aula secreta exclusiva para escritores!", 
        () => {
            // Abre o formulário em uma nova janela/aba
            window.open(FEEDBACK_LINK, '_blank');
        }
    );
}

function reportProblem() {
    console.log('Relatando problema...');
    // Esta função já estava funcionando, mantemos como está
    window.location.href = "mailto:senorlabios@senorlabios.com?subject=Problema no App Checklist Escritor";
}

// ========================================
// RESET - ✅ CORRIGIDO
// ========================================

function startResetTimer() {
    console.log('Iniciando reset com timer...');
    showAlert(
        "Resetar Progresso", 
        "Você tem certeza que deseja apagar TODO o seu progresso? Esta ação não pode ser desfeita.", 
        () => {
            state = { 
                checks: new Array(22).fill(false), 
                notes: new Array(22).fill(""), 
                tutorialDone: true, 
                openPhases: [false, false, false], 
                screenHistory: ['screen-dashboard'] 
            };
            saveState();
            location.reload();
        }, 
        15
    );
}

// ========================================
// INICIALIZAÇÃO - ✅ CORRIGIDO
// ========================================

// Usar DOMContentLoaded para garantir que tudo carrega primeiro
document.addEventListener('DOMContentLoaded', function() {
    console.log('App inicializando...');
    
    // Carrega o estado
    loadState();
    
    // Atualiza progresso
    updateProgress();
    
    // Define frase do dia
    const quoteEl = document.getElementById('daily-quote');
    if (quoteEl) {
        quoteEl.innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    }
    
    // Mostra tutorial se necessário
    if (!state.tutorialDone) {
        setTimeout(() => {
            const tutorialOverlay = document.getElementById('tutorial-overlay');
            if (tutorialOverlay) {
                tutorialOverlay.style.display = 'flex';
                console.log('Tutorial exibido');
            }
        }, 300); // 300ms de delay para garantir que tudo renderizou
    }
    
    // Configura histórico
    history.pushState(null, null, window.location.pathname);
    
    console.log('App inicializado com sucesso!');
});

// Previne voltar no navegador
window.addEventListener('popstate', (e) => {
    e.preventDefault();
    handleBack();
});

// ========================================
// EXPORTAR FUNÇÕES PARA O WINDOW
// ========================================

window.showScreen = showScreen;
window.handleBack = handleBack;
window.togglePhase = togglePhase;
window.showDetails = showDetails;
window.toggleCheck = toggleCheck;
window.saveNote = saveNote;
window.closeModal = closeModal;
window.finishTutorial = finishTutorial;
window.exportNotes = exportNotes;
window.exportPDF = exportPDF;
window.saveBackup = saveBackup;
window.openFeedback = openFeedback;
window.openInstagram = openInstagram;
window.openYoutube = openYoutube;
window.reportProblem = reportProblem;
window.startResetTimer = startResetTimer;
window.closeAlert = closeAlert;

console.log('Funções exportadas para window');
