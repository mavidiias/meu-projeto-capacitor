<script>
	import { preprocess } from "svelte/compiler";

    let display = $state('');

    function press(C) {
        display+=C;
    }
    
    function clear() {
        display=('');
    }

    function backspace() {
        display = display.length > 1 ? display.slice(0, -1) : '';
    }

    function invert() {
        try {
            let result = eval(display);
            display = (-result).toString();
        } catch {
            display = 'Erro';
        }
    }

    function roundNumber() {
        try {
            let result = eval(display);
            display = Math.round(result).toString();
        } catch {
            display = 'Erro';
        }
    }

    function square() {
        const match = display.match(/(\d+)(?!.*\d)/);
        if (match) {
            display = display.slice(0, match.index + match[0].length) + '²';
        }
    }

    function sqrt() {
        display += '√(';
    }

    function log10() {
        display += 'log(';
    }

    function modulo() {
    display += ' mod ';
}

function calc() {
        try {
            let expr = display
                .replace(/√\(/g, 'Math.sqrt(')
                .replace(/(\d+)%/g, '($1*0.01)')
                .replace(/(\d+)\²/g, '($1**2)')
                .replace(/log\(/g, 'Math.log10(')
                .replace(/ mod /g, '%');
            display = eval(expr);
        } catch {
            display = 'Erro';
        }
    }
</script>
<div class="text-center mt-3">
<input class="form-control form-control-lg" readonly bind:value={display} />
<table class="table  table-borderless"> 
    <tbody>
        <tr>
            <td><button type="button" class="btn btn-secondary w-100" onclick= { () =>clear() }>C</button></td>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press('(') }>&lpar;</button></td>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(')') }>&rpar;</button></td>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>invert() }>+/-</button></td>
            <td><button type="button" class="btn btn-secondary w-100" onclick= { () =>roundNumber() }>◯</button></td>
        </tr>
        <tr>
            <td><button type="button" class="btn btn-secondary w-100" onclick= { () =>backspace() }>⌫</button></td>
            <td><button type="button" class="btn btn-secondary w-100" onclick= { () =>square() }>x²</button></td>
            <td><button type="button" class="btn btn-secondary w-100" onclick= { () =>sqrt() }>√</button></td>
            <td><button type="button" class="btn btn-secondary w-100" onclick= { () =>log10() }>log</button></td>
            <td><button type="button" class="btn btn-secondary w-100" onclick= { () =>modulo() }>mod</button></td>
        </tr>
        <tr>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(7) }>7</button></td>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(8) }>8</button></td>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(9) }>9</button></td>
            <td><button type="button" class="btn btn-secondary w-100" onclick= { () =>press('*') }>x</button></td>
            <td><button type="button" class="btn btn-secondary w-100" onclick= { () =>press('/') }>÷</button></td>
        </tr>
        <tr>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(4) }>4</button></td>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(5) }>5</button></td>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(6) }>6</button></td>
            <td><button type="button" class="btn btn-secondary w-100" onclick= { () =>press('-') }>-</button></td>
            <td><button type="button" class="btn btn-secondary w-100" onclick= { () =>press('%') }>%</button></td>
        </tr>
        <tr>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(1) }>1</button></td>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(2) }>2</button></td>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(3) }>3</button></td>
            <td rowspan="2" style="height: 0;">
                <button type="button" class="btn btn-secondary w-100 h-100" onclick={() => press('+')}>+</button>
            </td>
            <td rowspan="2" style="height: 0;">
                <button type="button" class="btn btn-secondary w-100 h-100" onclick= { () =>calc() }>=</button></td>
        </tr>
        <tr>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(0) }>0</button></td>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press('00') }>00</button></td>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press('.') }>.</button></td>
            
        </tr>
    </tbody>
</table>
</div>