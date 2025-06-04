<script>
	import { preprocess } from "svelte/compiler";

</script>
<div class="text-center mt-3">
<input class="form-control" readonly />
<table class="table  table-borderless"> 
    <tbody>
        <tr>
            <td><button type="button" class="btn btn-secondary w-100" onclick= { () =>press('C') }>C</button></td>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press('(') }>&lpar;</button></td>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(')') }>&rpar;</button></td>
            <td><button type="button" class="btn btn-secondary w-100" onclick= { () =>press('/') }>/</button></td>
        </tr>
        <tr>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(7) }>7</button></td>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(8) }>8</button></td>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(9) }>9</button></td>
            <td><button type="button" class="btn btn-secondary w-100" onclick= { () =>press('x') }>x</button></td>
        </tr>
        <tr>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(4) }>4</button></td>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(5) }>5</button></td>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(6) }>6</button></td>
            <td><button type="button" class="btn btn-secondary w-100" onclick= { () =>press('-') }>-</button></td>
        </tr>
        <tr>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(1) }>1</button></td>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(2) }>2</button></td>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press('+') }>3</button></td>
            <td rowspan="2" style="height: 0;">
                <button type="button" class="btn btn-secondary w-100 h-100">+</button>
            </td>
        </tr>
        <tr>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press(0) }>0</button></td>
            <td><button type="button" class="btn bg-primary-subtle w-100" onclick= { () =>press('.') }>.</button></td>
            <td><button type="button" class="btn btn-secondary w-100" onclick= { () =>calc() }>=</button></td>
        </tr>
    </tbody>
</table>
</div>