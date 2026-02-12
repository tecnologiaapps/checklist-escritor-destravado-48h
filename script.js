// ========================================
// VARIÁVEIS GLOBAIS
// ========================================

const TOTAL_ITEMS = 22;
let deferredPrompt = null;

// ========================================
// INICIALIZAÇÃO
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    checkInstallStatus();
});

// ========================================
// VERIFICAR STATUS DE INSTALAÇÃO
// ========================================

function checkInstallStatus() {
    // Verificar se está rodando como PWA instalado
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                         window.navigator.standalone === true ||
                         document.referrer.includes('android-app://');
    
    if (isStandalone) {
        // App está instalado - mostrar conteúdo principal
        showApp();
    } else {
        // Mostrar tela de instalação
        showInstallScreen();
    }
}

// ========================================
// MOSTRAR TELA DE INSTALAÇÃO
// ========================================

function showInstallScreen() {
    const installScreen = document.getElementById('install-screen');
    const appScreen = document.getElementById('app-screen');
    
    installScreen.style.display = 'flex';
    appScreen.style.display = 'none';
    
    // Detectar plataforma e mostrar opção apropriada
    detectPlatformAndShowInstallOption();
}

// ========================================
// MOSTRAR APLICATIVO
// ========================================

function showApp() {
    const installScreen = document.getElementById('install-screen');
    const appScreen = document.getElementById('app-screen');
    
    installScreen.style.display = 'none';
    appScreen.style.display = 'block';
    
    // Inicializar funcionalidades do app
    initializeApp();
}

// ========================================
// DETECTAR PLATAFORMA E MOSTRAR INSTALAÇÃO
// ========================================

function detectPlatformAndShowInstallOption() {
    const installButton = document.getElementById('install-button');
    const iosInstructions = document.getElementById('ios-instructions');
    const desktopMessage = document.getElementById('desktop-message');
    
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isAndroid = /android/.test(userAgent);
    const isMobile = /mobile|android|iphone|ipad|ipod/.test(userAgent);
    
    if (isIOS) {
        // Mostrar instruções para iOS
        iosInstructions.style.display = 'block';
        installButton.style.display = 'none';
        desktopMessage.style.display = 'none';
        
    } else if (isAndroid || isMobile) {
        // Preparar botão de instalação para Android/Mobile
        installButton.style.display = 'block';
        iosInstructions.style.display = 'none';
        desktopMessage.style.display = 'none';
        
        setupInstallButton();
        
    } else {
        // Desktop - mostrar mensagem para acessar no celular
        desktopMessage.style.display = 'block';
        installButton.style.display = 'none';
        iosInstructions.style.display = 'none';
    }
}

// ========================================
// CONFIGURAR BOTÃO DE INSTALAÇÃO (ANDROID)
// ========================================

function setupInstallButton() {
    const installButton = document.getElementById('install-button');
    
    // Capturar evento beforeinstallprompt
    window.addEventListener('beforeinstallprompt', function(e) {
        // Prevenir o prompt automático
        e.preventDefault();
        
        // Salvar o evento para usar depois
        deferredPrompt = e;
        
        // Mostrar botão de instalação
        installButton.style.display = 'block';
    });
    
    // Ao clicar no botão de instalação
    installButton.addEventListener('click', function() {
        if (deferredPrompt) {
            // Mostrar prompt de instalação
            deferredPrompt.prompt();
            
            // Aguardar escolha do usuário
            deferredPrompt.userChoice.then(function(choiceResult) {
                if (choiceResult.outcome === 'accepted') {
                    console.log('PWA instalado com sucesso');
                } else {
                    console.log('Instalação cancelada');
                }
                
                // Limpar o prompt
                deferredPrompt = null;
            });
        }
    });
    
    // Detectar quando o app for instalado
    window.addEventListener('appinstalled', function() {
        console.log('PWA foi instalado');
        // Mostrar o app após instalação
        setTimeout(function() {
            showApp();
        }, 1000);
    });
}

// ========================================
// INICIALIZAR APLICATIVO
// ========================================

function initializeApp() {
    loadProgress();
    setupEventListeners();
    updateProgress();
    registerServiceWorker();
}

// ========================================
// REGISTRAR SERVICE WORKER
// ========================================

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then(function(registration) {
                console.log('Service Worker registrado:', registration);
            })
            .catch(function(error) {
                console.log('Erro ao registrar Service Worker:', error);
            });
    }
}

// ========================================
// CONFIGURAR EVENT LISTENERS DO APP
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
        content.classList.toggle('active');
        button.classList.toggle('active');
    }
}

// ========================================
// SALVAR E CARREGAR PROGRESSO
// ========================================

function loadProgress() {
    const savedData = localStorage.getItem('checklistProgress');
    
    if (savedData) {
        try {
            const progress = JSON.parse(savedData);
            
            for (let i = 1; i <= TOTAL_ITEMS; i++) {
                const itemData = progress[`item${i}`];
                if (itemData) {
                    const checkbox = document.getElementById(`check-${i}`);
                    if (checkbox && itemData.completed) {
                        checkbox.checked = true;
                    }
                    
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

function saveCheckboxState(itemNumber, isChecked) {
    const savedData = localStorage.getItem('checklistProgress');
    let progress = {};
    
    if (savedData) {
        try {
            progress = JSON.parse(savedData);
        } catch (error) {
            console.error('Erro ao ler dados:', error);
        }
    }
    
    if (!progress[`item${itemNumber}`]) {
        progress[`item${itemNumber}`] = {
            completed: false,
            notes: ''
        };
    }
    
    progress[`item${itemNumber}`].completed = isChecked;
    localStorage.setItem('checklistProgress', JSON.stringify(progress));
}

function saveNotes(itemNumber, notesText) {
    const savedData = localStorage.getItem('checklistProgress');
    let progress = {};
    
    if (savedData) {
        try {
            progress = JSON.parse(savedData);
        } catch (error) {
            console.error('Erro ao ler dados:', error);
        }
    }
    
    if (!progress[`item${itemNumber}`]) {
        progress[`item${itemNumber}`] = {
            completed: false,
            notes: ''
        };
    }
    
    progress[`item${itemNumber}`].notes = notesText;
    localStorage.setItem('checklistProgress', JSON.stringify(progress));
}

// ========================================
// ATUALIZAR PROGRESSO
// ========================================

function updateProgress() {
    let completedCount = 0;
    
    for (let i = 1; i <= TOTAL_ITEMS; i++) {
        const checkbox = document.getElementById(`check-${i}`);
        if (checkbox && checkbox.checked) {
            completedCount++;
        }
    }
    
    const progressText = document.getElementById('progress-text');
    if (progressText) {
        progressText.textContent = `${completedCount} / ${TOTAL_ITEMS} concluídos`;
    }
    
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
    const confirmed = confirm('Tem certeza que deseja resetar todo o progresso? Esta ação não pode ser desfeita.');
    
    if (confirmed) {
        localStorage.removeItem('checklistProgress');
        
        for (let i = 1; i <= TOTAL_ITEMS; i++) {
            const checkbox = document.getElementById(`check-${i}`);
            if (checkbox) {
                checkbox.checked = false;
            }
            
            const textarea = document.getElementById(`notes-${i}`);
            if (textarea) {
                textarea.value = '';
            }
            
            updateNotesIndicator(i);
        }
        
        updateProgress();
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
