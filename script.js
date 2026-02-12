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
    
    console.log('Plataforma detectada:', { isIOS, isAndroid, isMobile });
    
    if (isIOS) {
        // iOS - Mostrar instruções visuais
        console.log('Dispositivo iOS detectado');
        iosInstructions.style.display = 'block';
        installButton.style.display = 'none';
        desktopMessage.style.display = 'none';
        
    } else if (isAndroid || isMobile) {
        // Android/Mobile - Preparar botão de instalação
        console.log('Dispositivo Android/Mobile detectado');
        iosInstructions.style.display = 'none';
        desktopMessage.style.display = 'none';
        
        // Configurar sistema de instalação
        setupInstallButton();
        
        // Timeout: Se após 3 segundos o botão ainda não apareceu,
        // significa que o beforeinstallprompt não disparou
        setTimeout(function() {
            if (installButton.style.display === 'none') {
                console.warn('beforeinstallprompt não disparou - mostrando instruções manuais');
                showManualInstructions();
            }
        }, 3000);
        
    } else {
        // Desktop - Mostrar mensagem
        console.log('Desktop detectado');
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
    const iosInstructions = document.getElementById('ios-instructions');
    
    // IMPORTANTE: Botão começa escondido até evento estar pronto
    installButton.style.display = 'none';
    
    // Capturar evento beforeinstallprompt
    window.addEventListener('beforeinstallprompt', function(e) {
        console.log('Evento beforeinstallprompt capturado');
        
        // Prevenir o prompt automático
        e.preventDefault();
        
        // Salvar o evento para usar depois
        deferredPrompt = e;
        
        // AGORA SIM mostrar botão de instalação
        installButton.style.display = 'block';
        
        // Esconder instruções iOS se estavam visíveis
        if (iosInstructions) {
            iosInstructions.style.display = 'none';
        }
    });
    
    // Ao clicar no botão de instalação
    installButton.addEventListener('click', async function() {
        console.log('Botão de instalação clicado');
        
        if (!deferredPrompt) {
            console.error('deferredPrompt não está disponível');
            // Mostrar instruções manuais como fallback
            showManualInstructions();
            return;
        }
        
        // Desabilitar botão temporariamente
        installButton.disabled = true;
        installButton.textContent = '⏳ Instalando...';
        
        try {
            // Mostrar prompt de instalação
            await deferredPrompt.prompt();
            
            // Aguardar escolha do usuário
            const choiceResult = await deferredPrompt.userChoice;
            
            if (choiceResult.outcome === 'accepted') {
                console.log('Usuário aceitou a instalação');
                installButton.textContent = '✅ Instalado!';
                
                // Aguardar um pouco e mostrar o app
                setTimeout(function() {
                    showApp();
                }, 1500);
            } else {
                console.log('Usuário cancelou a instalação');
                // Reabilitar botão
                installButton.disabled = false;
                installButton.textContent = '📱 INSTALAR APLICATIVO';
            }
        } catch (error) {
            console.error('Erro ao instalar:', error);
            // Reabilitar botão
            installButton.disabled = false;
            installButton.textContent = '📱 INSTALAR APLICATIVO';
            
            // Mostrar instruções manuais
            showManualInstructions();
        }
        
        // Limpar o prompt
        deferredPrompt = null;
    });
    
    // Detectar quando o app for instalado
    window.addEventListener('appinstalled', function(e) {
        console.log('PWA foi instalado com sucesso!');
        
        // Mostrar o app após instalação
        setTimeout(function() {
            showApp();
        }, 1000);
    });
}

// ========================================
// MOSTRAR INSTRUÇÕES MANUAIS (FALLBACK)
// ========================================

function showManualInstructions() {
    const installButton = document.getElementById('install-button');
    const manualInstructions = document.createElement('div');
    
    manualInstructions.className = 'manual-instructions';
    manualInstructions.innerHTML = `
        <div style="background-color: #fff3e6; border-left: 4px solid #fc8337; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <h3 style="color: #fc8337; margin-bottom: 10px;">📌 Instalação Manual</h3>
            <p style="color: #343436; margin-bottom: 10px; font-size: 15px;">
                No navegador Chrome, toque nos <strong>3 pontos</strong> no canto superior direito.
            </p>
            <p style="color: #343436; margin-bottom: 10px; font-size: 15px;">
                Depois toque em <strong>"Adicionar à tela inicial"</strong> ou <strong>"Instalar app"</strong>.
            </p>
            <p style="color: #343436; font-size: 15px;">
                O ícone do app aparecerá na sua tela inicial!
            </p>
        </div>
    `;
    
    // Adicionar instruções após o botão
    if (installButton.parentNode) {
        // Verificar se já não existe
        const existing = document.querySelector('.manual-instructions');
        if (existing) {
            existing.remove();
        }
        
        installButton.parentNode.insertBefore(manualInstructions, installButton.nextSibling);
        
        // Esconder o botão
        installButton.style.display = 'none';
    }
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
