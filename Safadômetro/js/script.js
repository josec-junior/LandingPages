let original;

window.onload = function() {
    let form = window.document.getElementById("formulario")
    original = form.innerHTML
    window.alert("Olá, visitante! Para prosseguir digite a sua data de nascimento no formato (dd/mm/aa), exemplo: (20/03/03)")
    mostrarAnoAtual()
}

function mostrarAnoAtual() {
    let rodape = window.document.getElementsByTagName("footer")[0]
    let paragrafo = rodape.children[0]
    let dataAtual = new Date()
    let anoAtual = dataAtual.getFullYear()
    paragrafo.innerHTML += ` &copy; ${anoAtual}`
}

function verificarAnoBissexto(ano) {
    if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
        return true
    }
    return false
}

function validar(dia, mes, ano) {
    if ((dia < 1 || dia > 31) || (mes < 1 || mes > 12) || (ano < 0 || ano > 99)) {
        return 0
    }

    else if (mes == 2) {
        if (dia > 29) {
            return 0
        } else if (dia == 29) {
            bissexto = verificarAnoBissexto(ano)
            if (bissexto) {
                return 1
            }
            return 0
        } else {
            return 1
        }
    } else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
        if (dia > 30) {
            return 0
        } else {
            return 1
        }
    } else {
        return 1
    }
}

function somatorio(mes) {
    soma = 0
    for (let i = 0; i <= mes; i++) {
        soma += i
    }
    return soma
}

function recalcular() {
    window.document.querySelector("section#formulario").innerHTML = original
}

function wesley_safadao() {
    let dia = window.document.getElementById("txtdia")
    dia = Number(dia.value)
    let mes = window.document.getElementById("txtmes")
    mes = Number(mes.value)
    let ano = window.document.getElementById("txtano")
    ano = Number(ano.value)
    valida = validar(dia, mes, ano)
    if (valida == 1) {
        let form = window.document.getElementById("formulario")
        soma = somatorio(mes)
        let safado = soma + (ano / 100) * (50 - dia)
        let anjo = 100 - safado
        form.innerHTML = `
            <p> <strong>${anjo.toFixed(2)}%</strong> ANJO, mas aquele <br> <strong>${safado.toFixed(2)}%</strong> é VAGABUNDO! </p>
            <input type="button" value="Recalcular" onclick="recalcular()">
        `
    } else {
        window.alert("Data inválida! Preencha os dados corretamente e tente de novo. Formato (dd/mm/aa).")
        window.document.getElementsByTagName("form")[0].reset()
    }
}