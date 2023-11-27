var Banco = {
    conta: "123456",
    saldo: 1000,
    tipoConta: "Corrente",
    agencia: "7890",
  
    buscarSaldo: function() {
        return this.saldo;
    },
  
    deposito: function(valor) {
        this.saldo += valor;
        return "Depósito de " + valor + " realizado. Novo saldo: " + this.saldo;
    },
  
    saque: function(valor) {
        if (valor > this.saldo) {
            return "Saldo insuficiente. Saque não realizado.";
        } else {
            this.saldo -= valor;
            return "Saque de " + valor + " realizado. Novo saldo: " + this.saldo;
        }
    },
  
    numeroDaConta: function() {
        return "Número da conta: " + this.conta;
    }
};

// Exemplos de uso
console.log(Banco.buscarSaldo()); // Imprime o saldo atual
console.log(Banco.deposito(200)); // Realiza um depósito de 200
console.log(Banco.saque(50)); // Realiza um saque de 50
console.log(Banco.numeroDaConta()); // Imprime o número da conta
