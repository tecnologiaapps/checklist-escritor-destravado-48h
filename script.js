// ========================================
// VARIÁVEIS GLOBAIS
// ========================================

// Número total de itens no checklist
const TOTAL_ITEMS = 22;

// ========================================
// INICIALIZAÇÃO
// ========================================

// Executar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Função principal de inicialização
function initializeApp() {
    loadProgress();
    setupEventListeners();
    updateProgress();
    registerServiceWorker();
}

// ========================================
// REGISTRAR SERVICE WORKER (PWA)
// ========================================

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then(function(registration) {
                console.log('Service Worker registrado com sucesso:', registration);
            })
            .catch(function(error) {
                console.log('Falha ao registrar Service Worker:', error);
            });
    }
}

// ========================================
// CONFIGURAR EVENT LISTENERS
// ========================================

function setupEventListeners() {
    // Checkboxes
    for (let i = 1; i <= TOTAL_ITEMS; i++) {
        const checkbox = document.getElementById(`check-${i}`);
        if (checkbox) {
            checkbox.addEventListener('change', function() {
                saveCheckboxState(i, this.checked);
                updateProgress();
            });
        }
    }
    
    // Botões de expandir/recolher
    const expandButtons = document.querySelectorAll('.expand-btn');
    expandButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            toggleContent(target, this);
        });
    });
    
    // Áreas de texto (anotações)
    for (let i = 1; i <= TOTAL_ITEMS; i++) {
        const textarea = document.getElementById(`notes-${i}`);
        if (textarea) {
            textarea.addEventListener('input', function() {
                saveNotes(i, this.value);
                updateNotesIndicator(i);
            });
        }
    }
    
    // Botão de resetar
    const resetButton = document.getElementById('btn-reset');
    if (resetButton) {
        resetButton.addEventListener('click', resetProgress);
    }
    
    // Botão voltar ao topo
    const topButton = document.getElementById('btn-top');
    if (topButton) {
        topButton.addEventListener('click', scrollToTop);
    }
}

// ========================================
// EXPANDIR/RECOLHER CONTEÚDO
// ========================================

function toggleContent(itemNumber, button) {
    const content = document.getElementById(`content-${itemNumber}`);
    
    if (content) {
        // Alternar classe 'active'
        content.classList.toggle('active');
        button.classList.toggle('active');
    }
}

// ========================================
// SALVAR E CARREGAR PROGRESSO
// ========================================

// Carregar progresso salvo
function loadProgress() {
    const savedData = localStorage.getItem('checklistProgress');
    
    if (savedData) {
        try {
            const progress = JSON.parse(savedData);
            
            // Restaurar checkboxes
            for (let i = 1; i <= TOTAL_ITEMS; i++) {
                const itemData = progress[`item${i}`];
                if (itemData) {
                    // Restaurar checkbox
                    const checkbox = document.getElementById(`check-${i}`);
                    if (checkbox && itemData.completed) {
                        checkbox.checked = true;
                    }
                    
                    // Restaurar anotações
                    const textarea = document.getElementById(`notes-${i}`);
                    if (textarea && itemData.notes) {
                        textarea.value = itemData.notes;
                        updateNotesIndicator(i);
                    }
                }
            }
        } catch (error) {
            console.error('Erro ao carregar progresso:', error);
        }
    }
}

// Salvar estado do checkbox
function saveCheckboxState(itemNumber, isChecked) {
    const savedData = localStorage.getItem('checklistProgress');
    let progress = {};
    
    if (savedData) {
        try {
            progress = JSON.parse(savedData);
        } catch (error) {
            console.error('Erro ao ler dados salvos:', error);
        }
    }
    
    // Criar ou atualizar item
    if (!progress[`item${itemNumber}`]) {
        progress[`item${itemNumber}`] = {
            completed: false,
            notes: ''
        };
    }
    
    progress[`item${itemNumber}`].completed = isChecked;
    
    // Salvar no localStorage
    localStorage.setItem('checklistProgress', JSON.stringify(progress));
}

// Salvar anotações
function saveNotes(itemNumber, notesText) {
    const savedData = localStorage.getItem('checklistProgress');
    let progress = {};
    
    if (savedData) {
        try {
            progress = JSON.parse(savedData);
        } catch (error) {
            console.error('Erro ao ler dados salvos:', error);
        }
    }
    
    // Criar ou atualizar item
    if (!progress[`item${itemNumber}`]) {
        progress[`item${itemNumber}`] = {
            completed: false,
            notes: ''
        };
    }
    
    progress[`item${itemNumber}`].notes = notesText;
    
    // Salvar no localStorage
    localStorage.setItem('checklistProgress', JSON.stringify(progress));
}

// ========================================
// ATUALIZAR PROGRESSO
// ========================================

function updateProgress() {
    let completedCount = 0;
    
    // Contar quantos checkboxes estão marcados
    for (let i = 1; i <= TOTAL_ITEMS; i++) {
        const checkbox = document.getElementById(`check-${i}`);
        if (checkbox && checkbox.checked) {
            completedCount++;
        }
    }
    
    // Atualizar texto
    const progressText = document.getElementById('progress-text');
    if (progressText) {
        progressText.textContent = `${completedCount} / ${TOTAL_ITEMS} concluídos`;
    }
    
    // Atualizar barra de progresso
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        const percentage = (completedCount / TOTAL_ITEMS) * 100;
        progressFill.style.width = `${percentage}%`;
    }
}

// ========================================
// INDICADOR DE ANOTAÇÕES
// ========================================

function updateNotesIndicator(itemNumber) {
    const textarea = document.getElementById(`notes-${itemNumber}`);
    const indicator = document.getElementById(`indicator-${itemNumber}`);
    
    if (textarea && indicator) {
        if (textarea.value.trim().length > 0) {
            indicator.textContent = '(com anotações)';
        } else {
            indicator.textContent = '';
        }
    }
}

// ========================================
// RESETAR PROGRESSO
// ========================================

function resetProgress() {
    // Confirmar antes de apagar
    const confirmed = confirm('Tem certeza que deseja resetar todo o progresso? Esta ação não pode ser desfeita.');
    
    if (confirmed) {
        // Limpar localStorage
        localStorage.removeItem('checklistProgress');
        
        // Desmarcar todos os checkboxes
        for (let i = 1; i <= TOTAL_ITEMS; i++) {
            const checkbox = document.getElementById(`check-${i}`);
            if (checkbox) {
                checkbox.checked = false;
            }
            
            // Limpar anotações
            const textarea = document.getElementById(`notes-${i}`);
            if (textarea) {
                textarea.value = '';
            }
            
            // Limpar indicadores
            updateNotesIndicator(i);
        }
        
        // Atualizar barra de progresso
        updateProgress();
        
        // Feedback visual
        alert('Progresso resetado com sucesso!');
    }
}

// ========================================
// VOLTAR AO TOPO
// ========================================

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
