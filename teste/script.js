var a = window.document.getElementById('area')

        a.addEventListener('click', clicar)

        a.addEventListener('mouseout', sair)

        function clicar() {
            a.innerText = 'Clicou!'
            a.style.background = 'red'
            a.style.height = '150px'
        }


        function sair() {
            a.innerText = 'sair'
            a.style.background = 'green'
            a.style.height = '50px'
        }