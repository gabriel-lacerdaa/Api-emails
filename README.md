Para acessar o post url/email
parametros = nenhum
body:{
  "nome": "<nome de quem enviou email>",
  "email": "<email de quem enviou>",
  "telefone": "<telefone>",
  "mensagem": "<mensagem do email>",
  "quem_enviou": "<url do site que enviou o email>"
}

Get
parametros opcional = ultimos
exemplo http://localhost:5000?ultimos=5
acessando essa rota a api ira retornar os ultimos 5 emails salvos no banco, caso não envie esse parametro, a api irá retornar todos