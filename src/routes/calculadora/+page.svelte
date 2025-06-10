<script>
	import { preprocess } from "svelte/compiler";

    let display = $state('');

    function clear() {
        display=('');
    }

    function press(C) {
        display+=C;
    }

    function calc() {
        display=eval(display);
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
            <td><button type="button" class="btn btn-secondary w-100" onclick= { () =>press('/') }>/</button></td>
            <td><button type="button" class="btn btn-secondary w-100" onclick= { () =>press('*') }>+-</button></td>
        </tr>
        <tr>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(7) }>7</button></td>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(8) }>8</button></td>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(9) }>9</button></td>
            <td><button type="button" class="btn btn-secondary w-100" onclick= { () =>press('*') }>x</button></td>
            <td><button type="button" class="btn btn-secondary w-100" onclick= { () =>press('*') }>x²</button></td>
        </tr>
        <tr>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(4) }>4</button></td>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(5) }>5</button></td>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(6) }>6</button></td>
            <td><button type="button" class="btn btn-secondary w-100" onclick= { () =>press('-') }>-</button></td>
            <td><button type="button" class="btn btn-secondary w-100" onclick= { () =>press('√') }>√</button></td>
        </tr>
        <tr>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(1) }>1</button></td>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(2) }>2</button></td>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(3) }>3</button></td>
            <td rowspan="2" style="height: 0;">
                <button type="button" class="btn btn-secondary w-100 h-100" onclick={() => press('+')}>+</button>
            </td>
            <td><button type="button" class="btn btn-secondary w-100" onclick= { () =>press('*') }>x</button></td>
        </tr>
        <tr>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(0) }>0</button></td>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press('') }>00</button></td>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press('.') }>.</button></td>
            <td><button type="button" class="btn btn-secondary w-100" onclick= { () =>calc() }>=</button></td>
        </tr>
    </tbody>
</table>
</div>