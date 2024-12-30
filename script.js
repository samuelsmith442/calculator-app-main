document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded');

    // DOM Elements
    const display = document.querySelector('.display');
    const keypad = document.querySelector('.keypad');
    const themeToggle = document.querySelector('.toggle-track');

    console.log('Display element:', display);
    console.log('Keypad element:', keypad);
    console.log('Theme toggle element:', themeToggle);

    // Calculator State
    let firstOperand = '';
    let secondOperand = '';
    let currentOperation = null;
    let shouldResetScreen = false;

    // Theme State
    let currentTheme = parseInt(localStorage.getItem('theme')) || 1;

    // Theme Functions
    function setTheme(theme) {
        console.log('Setting theme to:', theme);
        document.body.className = `theme-${theme}`;
        localStorage.setItem('theme', theme);
        currentTheme = theme;
    }

    // Initialize theme
    setTheme(currentTheme);

    // Theme toggle click handler
    themeToggle.addEventListener('click', (e) => {
        console.log('Theme toggle clicked');
        const nextTheme = currentTheme % 3 + 1;
        setTheme(nextTheme);
    });

    // Calculator Functions
    function resetCalculator() {
        display.textContent = '0';
        firstOperand = '';
        secondOperand = '';
        currentOperation = null;
    }

    function deleteNumber() {
        display.textContent = display.textContent.slice(0, -1) || '0';
    }

    function appendNumber(number) {
        console.log('Appending number:', number);
        if (display.textContent === '0' || shouldResetScreen) {
            resetScreen();
        }
        // Prevent multiple decimal points
        if (number === '.' && display.textContent.includes('.')) return;
        // Limit the number of digits
        if (display.textContent.length >= 12) return;
        display.textContent += number;
    }

    function resetScreen() {
        display.textContent = '';
        shouldResetScreen = false;
    }

    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function setOperation(operator) {
        console.log('Setting operation:', operator);
        if (currentOperation !== null) evaluate();
        firstOperand = display.textContent.replace(/,/g, '');
        currentOperation = operator;
        shouldResetScreen = true;
    }

    function evaluate() {
        if (currentOperation === null || shouldResetScreen) return;
        if (currentOperation === '/' && display.textContent === '0') {
            alert('Cannot divide by 0!');
            return;
        }
        secondOperand = display.textContent.replace(/,/g, '');
        const result = calculate(firstOperand, secondOperand, currentOperation);
        display.textContent = formatNumber(result);
        currentOperation = null;
    }

    function calculate(a, b, operation) {
        console.log('Calculating:', a, operation, b);
        a = parseFloat(a);
        b = parseFloat(b);
        switch (operation) {
            case '+':
                return roundResult(a + b);
            case '-':
                return roundResult(a - b);
            case '×':
                return roundResult(a * b);
            case '/':
                if (b === 0) return null;
                return roundResult(a / b);
            default:
                return null;
        }
    }

    function roundResult(number) {
        const precision = 1000000000;
        return Math.round(number * precision) / precision;
    }

    // Event Listeners
    keypad.addEventListener('click', e => {
        const button = e.target;
        if (!button.matches('button')) return;

        console.log('Button clicked:', button.textContent);

        if (button.classList.contains('number')) {
            appendNumber(button.dataset.value);
        }
        else if (button.classList.contains('operator')) {
            const action = button.dataset.action;
            if (action === 'delete') {
                deleteNumber();
            } else {
                setOperation(button.textContent);
            }
            return;
        }

        if (button.classList.contains('equals')) {
            evaluate();
            return;
        }

        if (button.classList.contains('reset')) {
            resetCalculator();
            return;
        }
    });

    // Keyboard support
    document.addEventListener('keydown', e => {
        if (e.key >= '0' && e.key <= '9' || e.key === '.') {
            appendNumber(e.key);
        }
        if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
            const operatorMap = { '*': '×', '/': '/' };
            setOperation(operatorMap[e.key] || e.key);
        }
        if (e.key === 'Enter' || e.key === '=') {
            e.preventDefault();
            evaluate();
        }
        if (e.key === 'Backspace') {
            deleteNumber();
        }
        if (e.key === 'Escape') {
            resetCalculator();
        }
    });

    // Initialize calculator
    resetCalculator();
    
    console.log('Calculator initialized');
});
