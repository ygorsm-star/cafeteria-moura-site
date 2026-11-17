/*
 CAFETERIA MOURA — CONFIGURAÇÃO DE VENDA
 Troque APENAS dados confirmados. Não inclua números pessoais de outras empresas.
 WhatsApp: número completo, somente dígitos, no formato 5587999999999.
 Preço: null = sob consulta, 12.5 = R$ 12,50. Nunca invente preços.
 Foto: use imagem REAL do produto. Em branco, aparece um cartão ilustrativo.
*/
window.MOURA_CONFIG = {
  nome: "Cafeteria Moura",
  subtitulo: "Cafeteria & Lanchonete",
  cidade: "Centro de Petrolina, PE",
  horario: "08h às 18h — confirme dias e feriados",
  whatsapp: "5587991521925",
  entregaAtiva: false,
  aviso: "Pedido sujeito à confirmação de produtos, preços e horário pelo atendimento.",
  produtos: [
    {id:"sal-01", categoria:"salgados", nome:"Salgados artesanais", descricao:"Consulte os sabores disponíveis no dia.", preco:null, imagem:"", destaque:true, ativo:true},
    {id:"sal-02", categoria:"salgados", nome:"Bandeja de salgados", descricao:"Encomendas para encontros e reuniões.", preco:null, imagem:"", destaque:false, ativo:true},
    {id:"caf-01", categoria:"cafes", nome:"Café da casa", descricao:"Consulte os tamanhos e as opções de preparo.", preco:null, imagem:"", destaque:true, ativo:true},
    {id:"tap-01", categoria:"tapiocas", nome:"Tapioca preparada na hora", descricao:"Recheios sob consulta.", preco:null, imagem:"", destaque:true, ativo:true},
    {id:"bol-01", categoria:"bolos", nome:"Bolo caseiro", descricao:"Sabores disponíveis sob consulta.", preco:null, imagem:"", destaque:false, ativo:true},
    {id:"suc-01", categoria:"sucos", nome:"Suco de frutas", descricao:"Sabores e tamanhos disponíveis sob consulta.", preco:null, imagem:"", destaque:false, ativo:true},
    {id:"com-01", categoria:"combos", nome:"Café + salgado", descricao:"Uma combinação prática para o dia a dia. Consulte disponibilidade.", preco:null, imagem:"", destaque:true, ativo:true},
    {id:"enc-01", categoria:"encomendas", nome:"Coffee break para empresas", descricao:"Bandejas e bebidas para reuniões e treinamentos, mediante orçamento.", preco:null, imagem:"", destaque:false, ativo:true}
  ]
};
