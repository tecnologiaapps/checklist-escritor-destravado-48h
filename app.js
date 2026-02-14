const points = [
    { id: 1, phase: 1, title: "Ambiente de Escrita", content: "Ambiente físico propício para a atividade literária\n\nO ambiente de escrita não precisa ser bonito, silencioso ou perfeito. Ele precisa ser reconhecível. Um lugar que o seu cérebro associe automaticamente com “agora eu escrevo”.\n\nPode ser uma mesa simples, um canto do quarto, a mesa da cozinha à noite. O importante é que esse espaço reduza distrações e facilite o início. Quanto menos esforço você precisa para começar, maior a chance de continuar.\n\nAmbiente não é luxo. É estratégia contra a procrastinação. Crie um esconderijo que tem essa aura, ela irá propiciar a atividade de escrita, a ideia é: Poucos itens para sua mente não ter tantos estímulos visuais.", why: "O ambiente importa! A energia desses ambientes propiciam a atividade, de maneira que ela acontece naturalmente, sem muito esforço!", completionPhrase: "Seu esconderijo está pronto – agora, as distrações somem!" },
    { id: 2, phase: 1, title: "Alinhamento de Mentalidade", content: "A — Você já tem tudo que precisa para começar\nB — Compromisso com a existência, não com a perfeição\n\nVocê não está travado porque falta talento, estudo ou inspiração.\n\nVocê está travado porque acredita que ainda não está pronto. Esse checklist existe para quebrar essa mentira.\n\nO compromisso aqui não é escrever bem. É escrever algo que exista.\n\nPerfeição é um problema da revisão, não da criação. Histórias boas só nascem depois que histórias imperfeitas existem.\n\nEnquanto você tentar acertar de primeira, você não começa.\n\nQuando você aceita escrever mal no início, você avança.", completionPhrase: "Você já tem tudo – comece imperfeito e avance!" },
    { id: 3, phase: 1, title: "Rotina de Escrita Bloqueada na Agenda", content: "Se a escrita não tem horário, ela vira desejo abstrato.\n\nBloquear um horário na agenda é um ato de respeito com a sua história.\n\nNão precisa ser longo: 20 ou 30 minutos já funcionam. O importante é que esse horário exista e seja tratado como compromisso real, não como “se sobrar tempo”.\n\nEscritores não escrevem quando dá vontade. Escrevem quando chega a hora.", completionPhrase: "Horário marcado é promessa cumprida – escreva quando chega a hora." },
    { id: 4, phase: 1, title: "Metas de Escrita", content: "Metas não existem para te pressionar, e sim para te orientar.\n\nSem meta, você nunca sabe se avançou ou não.\n\nDefina algo simples e mensurável:\n– número de palavras\n– número de páginas\n– ou tempo escrevendo\n\nMeta pequena, cumprida com constância, vence qualquer explosão ocasional de motivação.", completionPhrase: "Pequenas metas constroem grandes histórias – você avançou hoje!" },
    { id: 5, phase: 1, title: "Organização de Arquivos", content: "Arquivo perdido gera frustração. Frustração gera abandono.\n\nCrie uma pasta clara para o seu livro. Dentro dela, separe rascunhos, anotações e versões. Isso reduz o caos mental e evita aquela sensação de “não sei onde parei”.\n\nOrganização aqui não é estética. É proteção contra desistência.", completionPhrase: "Caos evitado – sua história está segura e acessível." },
    { id: 6, phase: 1, title: "Lista de Inspirações", content: "De que obras a sua obra bebe?\n\nNenhuma história nasce do nada.\n\nListar suas inspirações te ajuda a entender o tipo de experiência que você quer criar no leitor.\n\nNão é para copiar. É para se orientar.\n\nQuando você sabe o que te emociona como leitor, fica mais fácil escrever algo que emocione como autor.\n\nEssa lista funciona como um norte emocional.", completionPhrase: "Suas inspirações guiam – emocione como você foi emocionado." },
    { id: 7, phase: 1, title: "Ambientação do Mundo Imaginada", content: "Você não precisa criar um mundo inteiro agora.\n\nPrecisa apenas imaginar o suficiente para escrever a primeira cena.\n\nOnde a história acontece?\n\nQual o clima?\n\nQue tipo de mundo é esse?\n\nClareza mínima gera segurança máxima para começar.", completionPhrase: "Mundo esboçado – agora, entre nele com segurança." },
    { id: 8, phase: 2, title: "Escolha de Imagens e Músicas Inspiracionais", content: "Imagens e músicas funcionam como atalhos emocionais.\n\nElas te colocam rapidamente no clima da história sem exigir esforço racional.\n\nNão é distração. É preparação emocional.\n\nUse referências visuais e sonoras que te façam sentir o livro antes de escrevê-lo.\n\nSentimento vem antes da técnica.", completionPhrase: "Atalhos emocionais ativados – sinta a história antes de escrevê-lo." },
    { id: 9, phase: 2, title: "Escolha das Cenas Importantes", content: "Faróis que fazem você querer continuar\n\nEssas cenas são os momentos que fazem você pensar:\n\n“Eu preciso escrever isso.”\n\nElas não precisam estar detalhadas agora. Basta saber que existem.", completionPhrase: "Faróis acesos – você sabe para onde ir na neblina." },
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

const tutorialSteps = [
    { title: "Bem-vindo!", body: "Este app vai te ajudar a destravar sua escrita em 48h. Vamos te mostrar como ele funciona." },
    { title: "Dashboard", body: "Aqui você vê seu progresso geral através do Livro Mágico e recebe frases motivacionais diárias." },
    { title: "Checklist", body: "A lista é dividida em 3 fases. Clique em cada ponto para ver detalhes, dicas e anotar suas ideias." },
    { title: "Exportação e Backup", body: "Você pode exportar seu progresso em TXT, PDF ou fazer um backup local para nunca perder seus dados." }
];

const STORAGE_KEY = 'escritor_48h_state_v3';
const FEEDBACK_LINK = "https://forms.gle/exemplo"; // EDITAR ESTE LINK

let state = {
    checks: new Array(22).fill(false),
    notes: new Array(22).fill(""),
    tutorialDone: false,
    openPhases: [false, false, false] // Persistência de fases abertas
};

let currentTutorialStep = 0;

function loadState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            state = { ...state, ...parsed };
        }
    } catch (e) { console.error(e); }
}

function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        updateProgress();
    } catch (e) { console.error(e); }
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);
    
    const floatBtn = document.getElementById('btn-float-home');
    floatBtn.style.display = (screenId === 'screen-dashboard') ? 'none' : 'flex';

    if (screenId === 'screen-list') renderList();
    
    if (!state.tutorialDone && screenId === 'screen-dashboard') {
        startTutorial();
    }
}

function updateProgress() {
    const completed = state.checks.filter(c => c).length;
    const total = points.length;
    const percent = Math.round((completed / total) * 100);
    
    const progTextEl = document.getElementById('progress-text');
    const listProgTextEl = document.getElementById('list-progress-text');
    if (progTextEl) progTextEl.innerText = `${completed}/${total} pontos desbloqueados (${percent}%)`;
    if (listProgTextEl) listProgTextEl.innerText = `${completed}/${total} pontos (${percent}%)`;
    
    const fillLeft = document.getElementById('book-fill-left');
    const fillRight = document.getElementById('book-fill-right');
    if (fillLeft && fillRight) {
        const halfTotal = total / 2;
        fillLeft.setAttribute('width', Math.min(33, (completed / halfTotal) * 33));
        fillRight.setAttribute('width', completed > halfTotal ? ((completed - halfTotal) / halfTotal) * 33 : 0);
    }
}

function togglePhase(phaseId) {
    const index = phaseId - 1;
    state.openPhases[index] = !state.openPhases[index];
    saveState();
    renderList();
}

function renderList() {
    const container = document.getElementById('checklist-container');
    if (!container) return;
    container.innerHTML = '';
    
    phases.forEach(phase => {
        const isOpen = state.openPhases[phase.id - 1];
        const phaseWrapper = document.createElement('div');
        phaseWrapper.className = 'phase-wrapper';
        
        phaseWrapper.innerHTML = `
            <div class="phase-header ${!isOpen ? 'collapsed' : ''}" onclick="togglePhase(${phase.id})">
                <div class="phase-header-content">
                    <img src="${phase.icon}" alt="Fase" width="30" style="margin-right:10px;"> 
                    Fase ${phase.id}: ${phase.title}
                </div>
                <svg class="phase-toggle-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 9l6 6 6-6"/>
                </svg>
            </div>
            <div class="phase-content ${!isOpen ? 'collapsed' : ''}">
                ${points.filter(p => p.phase === phase.id).map(point => `
                    <div class="point-card" onclick="showDetails(${point.id})">
                        <img src="icone-ponto.png" alt="Ponto" width="30" style="margin-right:10px;">
                        <div class="point-title">${point.title}</div>
                        <div class="custom-checkbox ${state.checks[point.id - 1] ? 'checked' : ''}">
                            <svg viewBox="0 0 24 24"><path d="M20 6L9 17L4 12" /></svg>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(phaseWrapper);
    });
}

function showDetails(id) {
    const point = points.find(p => p.id === id);
    const container = document.getElementById('details-view');
    container.innerHTML = `
        <div class="details-header">
            <img src="icone-ponto.png" alt="Ícone" width="80" height="80">
            <h2>${point.title}</h2>
        </div>
        <div class="card details-content">
            <p>${point.content.replace(/\n/g, '<br>')}</p>
            ${point.why ? `<br><strong>Por quê?</strong><p>${point.why}</p>` : ''}
        </div>
        <div class="large-check-container" onclick="toggleCheck(${id})">
            <div class="custom-checkbox ${state.checks[id - 1] ? 'checked' : ''}" id="detail-checkbox">
                <svg viewBox="0 0 24 24"><path d="M20 6L9 17L4 12" /></svg>
            </div>
            <span style="font-weight:bold;">Marcar como concluído</span>
        </div>
        <textarea class="notes-area" placeholder="Minhas ideias para este ponto..." oninput="saveNote(${id}, this.value)">${state.notes[id - 1]}</textarea>
    `;
    showScreen('screen-details');
}

function toggleCheck(id) {
    state.checks[id - 1] = !state.checks[id - 1];
    if (state.checks[id - 1]) showModal(points[id - 1].completionPhrase);
    saveState();
    showDetails(id);
}

function saveNote(id, value) {
    state.notes[id - 1] = value;
    saveState();
}

function showModal(phrase) {
    document.getElementById('modal-phrase').innerText = phrase;
    document.getElementById('modal-overlay').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}

// Tutorial Logic
function startTutorial() {
    currentTutorialStep = 0;
    updateTutorialUI();
    document.getElementById('tutorial-overlay').style.display = 'flex';
}

function nextTutorialStep() {
    currentTutorialStep++;
    if (currentTutorialStep >= tutorialSteps.length) {
        finishTutorial();
    } else {
        updateTutorialUI();
    }
}

function updateTutorialUI() {
    const step = tutorialSteps[currentTutorialStep];
    document.getElementById('tutorial-step-indicator').innerText = `Passo ${currentTutorialStep + 1} de ${tutorialSteps.length}`;
    document.getElementById('tutorial-title').innerText = step.title;
    document.getElementById('tutorial-body').innerText = step.body;
}

function skipTutorial() {
    state.tutorialDone = true;
    saveState();
    document.getElementById('tutorial-overlay').style.display = 'none';
}

function finishTutorial() {
    state.tutorialDone = true;
    saveState();
    document.getElementById('tutorial-overlay').style.display = 'none';
    alert("Tutorial concluído! Agora você está pronto para começar.");
}

// Export & Backup
function exportNotes() {
    let text = "MEU PROGRESSO - ESCRITOR DESTRAVADO\n\n";
    points.forEach((p, i) => {
        text += `${state.checks[i] ? "[X]" : "[ ]"} ${p.title}\nAnotações: ${state.notes[i] || "Nenhuma"}\n\n`;
    });
    downloadFile(text, 'meu-progresso.txt', 'text/plain');
    alert("Anotações exportadas com sucesso! Verifique a pasta de Downloads do seu celular.");
}

async function exportPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Meu Progresso - Escritor Destravado", 10, 20);
    doc.setFontSize(12);
    let y = 30;
    points.forEach((p, i) => {
        if (y > 270) { doc.addPage(); y = 20; }
        doc.text(`${state.checks[i] ? "[X]" : "[ ]"} ${p.title}`, 10, y);
        y += 7;
        const note = state.notes[i] || "Sem anotações";
        const splitNote = doc.splitTextToSize(`Anotações: ${note}`, 180);
        doc.text(splitNote, 15, y);
        y += (splitNote.length * 5) + 5;
    });
    doc.save('meu-progresso.pdf');
    alert("PDF gerado com sucesso! Verifique sua pasta de Downloads.");
}

function saveBackup() {
    const data = JSON.stringify(state);
    downloadFile(data, 'backup-escritor-48h.json', 'application/json');
    alert("Seu backup está sendo salvo! Guarde este arquivo para restaurar seu progresso futuramente na pasta de Downloads.");
}

function downloadFile(content, fileName, contentType) {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function openFeedback() {
    alert("Após responder ao formulário, você receberá acesso a uma aula secreta para escritores!");
    window.open(FEEDBACK_LINK, '_blank');
}

function resetProgress() {
    if (confirm("Deseja resetar todo o progresso?")) {
        state = { checks: new Array(22).fill(false), notes: new Array(22).fill(""), tutorialDone: true, openPhases: [false, false, false] };
        saveState();
        location.reload();
    }
}

window.onload = () => {
    loadState();
    updateProgress();
    const quoteEl = document.getElementById('daily-quote');
    if (quoteEl) quoteEl.innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    if (!state.tutorialDone) startTutorial();
};

// Global Exposure
window.showScreen = showScreen;
window.togglePhase = togglePhase;
window.showDetails = showDetails;
window.toggleCheck = toggleCheck;
window.saveNote = saveNote;
window.closeModal = closeModal;
window.nextTutorialStep = nextTutorialStep;
window.skipTutorial = skipTutorial;
window.exportNotes = exportNotes;
window.exportPDF = exportPDF;
window.saveBackup = saveBackup;
window.openFeedback = openFeedback;
window.resetProgress = resetProgress;
