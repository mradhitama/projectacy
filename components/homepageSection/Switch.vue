<template>
    <div class="text-center">
        <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" class="sr-only peer" :checked="isDarkMode" @change="toggleDarkMode" />
            <div
                class="w-20 h-12 bg-gray-500 rounded-full border-8 border-gray-500 peer-checked:bg-yellow-500 peer-checked:border-gray-500 transition-all">
            </div>
            <div
                class="w-8 h-8 bg-yellow-500 rounded-full absolute left-10 peer-checked:left-6 peer-checked:bg-gray-500 peer-checked:w-14 peer-checked:h-10 transition-all flex items-center justify-center">
            </div>

        </label>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isDarkMode: false,
            usingSystemTheme: true
        };
    },
    mounted() {
        console.log('[Theme] Component mounted, initializing theme...');
        this.initTheme();
    },
    methods: {
        initTheme() {
            console.groupCollapsed('[Theme] Initializing theme');
            
            const savedTheme = localStorage.getItem('theme');
            console.log(`[Theme] Saved theme from localStorage: ${savedTheme || 'none'}`);
            
            if (savedTheme) {
                this.isDarkMode = savedTheme === 'dark';
                this.usingSystemTheme = false;
                console.log(`[Theme] Using saved preference: ${savedTheme}`);
            } else {
                console.log('[Theme] No saved preference, detecting system theme');
                this.detectSystemTheme();
            }
            
            console.log(`[Theme] Final mode: ${this.isDarkMode ? 'dark' : 'light'} (${this.usingSystemTheme ? 'system' : 'manual'})`);
            this.applyTheme();
            this.setupSystemListener();
            
            console.groupEnd();
        },

        detectSystemTheme() {
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            console.log(`[Theme] System prefers dark mode: ${systemPrefersDark}`);
            
            this.isDarkMode = systemPrefersDark;
            this.usingSystemTheme = true;
        },

        setupSystemListener() {
            console.log('[Theme] Setting up system theme listener');
            
            const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
            
            colorSchemeQuery.addEventListener('change', (e) => {
                console.groupCollapsed(`[Theme] System theme changed to ${e.matches ? 'dark' : 'light'}`);
                console.log(`[Theme] Currently using system theme: ${this.usingSystemTheme}`);
                
                if (this.usingSystemTheme) {
                    console.log('[Theme] Applying system theme change');
                    this.isDarkMode = e.matches;
                    this.applyTheme();
                } else {
                    console.log('[Theme] Ignoring system change (using manual preference)');
                }
                
                console.groupEnd();
            });
        },

        applyTheme() {
            console.groupCollapsed(`[Theme] Applying ${this.isDarkMode ? 'dark' : 'light'} theme`);
            
            if (this.isDarkMode) {
                document.documentElement.classList.add('dark');
                console.log('[Theme] Added "dark" class to documentElement');
            } else {
                document.documentElement.classList.remove('dark');
                console.log('[Theme] Removed "dark" class from documentElement');
            }
            
            console.log('[Theme] Current document classes:', document.documentElement.classList);
            console.groupEnd();
        },

        toggleDarkMode() {
            console.groupCollapsed('[Theme] Toggling theme');
            
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            console.log(`[Theme] Current system preference: ${systemPrefersDark ? 'dark' : 'light'}`);
            console.log(`[Theme] Current state: ${this.isDarkMode ? 'dark' : 'light'} (${this.usingSystemTheme ? 'system' : 'manual'})`);
            
            const togglingToSystem = (!this.isDarkMode && systemPrefersDark) || 
                                    (this.isDarkMode && !systemPrefersDark);
            
            this.isDarkMode = !this.isDarkMode;
            this.usingSystemTheme = togglingToSystem;
            
            console.log(`[Theme] New state: ${this.isDarkMode ? 'dark' : 'light'} (${this.usingSystemTheme ? 'system' : 'manual'})`);
            
            if (togglingToSystem) {
                localStorage.removeItem('theme');
                console.log('[Theme] Removed theme from localStorage (reverting to system)');
            } else {
                localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
                console.log(`[Theme] Saved ${this.isDarkMode ? 'dark' : 'light'} theme to localStorage`);
            }
            
            this.applyTheme();
            console.groupEnd();
        }
    }
};
</script>

<style scoped></style>