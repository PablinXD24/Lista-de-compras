const products = [
    // Frutas
    "Abacate Hass", "Abacate Manteiga", "Abacaxi Pérola", "Abacaxi Gold", "Acerola", "Ameixa Preta", "Ameixa Vermelha",
    "Amora", "Banana Nanica", "Banana Prata", "Banana Maçã", "Caju", "Caqui Rama Forte", "Caqui Chocolate",
    "Cereja", "Damasco Seco", "Figo Roxo", "Figo da Índia", "Framboesa", "Goiaba Branca", "Goiaba Vermelha",
    "Jabuticaba", "Jaca Mole", "Jaca Dura", "Kiwi Verde", "Kiwi Gold", "Laranja Lima", "Laranja Pêra", "Laranja Bahia",
    "Limão Siciliano", "Limão Tahiti", "Maçã Gala", "Maçã Fuji", "Maçã Verde", "Mamão Papaya", "Mamão Formosa",
    "Manga Palmer", "Manga Tommy", "Maracujá Azedo", "Maracujá Doce", "Melancia", "Melão Amarelo", "Melão Cantaloupe",
    "Morango", "Nectarina", "Pêra Williams", "Pêra Portuguesa", "Pêssego", "Pitanga", "Romã", "Tangerina Ponkan",
    "Tangerina Murcott", "Uva Thompson", "Uva Crimson",

    // Vegetais e Legumes
    "Abóbora Japonesa", "Abóbora Paulista", "Abobrinha Italiana", "Abobrinha Brasileira", "Acelga", "Agrião",
    "Alface Americana", "Alface Crespa", "Alface Romana", "Alho Branco", "Alho Roxo", "Alho-poró", "Batata Inglesa",
    "Batata-doce Roxa", "Batata-doce Branca", "Berinjela", "Beterraba", "Brócolis Ninja", "Brócolis Comum", "Cebola Branca",
    "Cebola Roxa", "Cebolinha", "Cenoura", "Chuchu", "Coentro", "Couve Manteiga", "Couve-flor", "Espinafre", "Ervilha",
    "Gengibre", "Inhame", "Jiló", "Lentilha", "Mandioca", "Milho Verde", "Nabo", "Palmito Pupunha", "Palmito Açaí",
    "Pepino Japonês", "Pepino Comum", "Pimentão Verde", "Pimentão Vermelho", "Pimentão Amarelo", "Quiabo", "Rabanete",
    "Repolho Verde", "Repolho Roxo", "Rúcula", "Salsa", "Tomate Italiano", "Tomate Cereja", "Tomate Débora", "Tomate Caqui",

    // Laticínios
    "Leite Integral", "Leite Desnatado", "Leite Semidesnatado", "Queijo Mussarela", "Queijo Prato", "Queijo Cheddar",
    "Queijo Parmesão", "Queijo Gorgonzola", "Queijo Brie", "Queijo Gouda", "Iogurte Natural", "Iogurte de Morango",
    "Iogurte Grego", "Manteiga com Sal", "Manteiga sem Sal", "Requeijão Cremoso", "Creme de Leite", "Leite Condensado",

    // Carnes
    "Frango Inteiro", "Filé de Frango", "Coxa de Frango", "Sobrecoxa de Frango", "Peito de Frango", "Asa de Frango",
    "Carne Bovina Patinho", "Carne Bovina Alcatra", "Carne Bovina Filé Mignon", "Carne Suína Costela", "Carne Suína Lombo",
    "Peixe Tilápia", "Peixe Salmão", "Peixe Bacalhau", "Camarão Cinza", "Camarão Rosa", "Bacon", "Linguiça Toscana",
    "Linguiça Calabresa", "Presunto Cozido", "Presunto Cru", "Salsicha",

    // Bebidas
    "Água Mineral", "Água com Gás", "Refrigerante Cola", "Refrigerante Guaraná", "Refrigerante Laranja", "Suco de Laranja",
    "Suco de Uva", "Suco de Maçã", "Cerveja Pilsen", "Cerveja Lager", "Cerveja IPA", "Vinho Tinto", "Vinho Branco",
    "Cachaça", "Vodka", "Whisky", "Energético", "Chá Mate", "Chá Verde", "Chá de Camomila",

    // Grãos e Cereais
    "Arroz Branco", "Arroz Integral", "Feijão Carioca", "Feijão Preto", "Grão-de-bico", "Lentilha", "Milho Verde",
    "Farinha de Trigo", "Farinha de Mandioca", "Aveia em Flocos", "Trigo para Kibe", "Cevada",

    // Produtos de Panificação
    "Pão de Forma Branco", "Pão de Forma Integral", "Pão de Forma de Aveia", "Pão de Forma de Linhaça",
    "Pão de Forma de Centeio", "Pão de Forma de Milho", "Pão de Forma de 12 Grãos", "Pão de Forma de Cebola",
    "Pão de Forma de Batata", "Pão de Forma de Nozes", "Pão de Forma de Mel", "Pão de Forma de Azeite",
    "Pão Francês", "Pão de Milho", "Pão de Batata", "Pão de Queijo", "Pão Integral", "Pão de Cenoura",
    "Pão de Mandioca", "Pão de Leite", "Pão de Aveia", "Pão de Linhaça", "Pão de Centeio", "Pão de 12 Grãos",
    "Pão de Cebola", "Pão de Nozes", "Pão de Mel", "Pão de Azeite", "Pão de Hambúrguer", "Pão de Hot Dog",
    "Pão de Cachorro Quente", "Pão de Brioche", "Pão de Alho", "Pão de Milho Verde", "Pão de Milho Amarelo",
    "Pão de Queijo na Chapa", "Pão de Queijo de Minas", "Pão de Queijo Recheado", "Pão de Queijo Congelado",
    "Pão de Queijo Congelado com Recheio", "Baguete Francesa", "Ciabatta", "Focaccia", "Croissant",
    "Rosca Doce", "Rosca Salgada", "Torrada de Pão de Forma", "Torrada de Pão Integral", "Torrada de Pão Francês",
    "Torrada de Pão de Milho", "Pão de Forma sem Glúten", "Pão Francês sem Glúten", "Pão de Hambúrguer sem Glúten",
    "Pão de Hot Dog sem Glúten", "Pão de Forma Integral sem Glúten", "Pão de Milho sem Glúten",


    // Produtos Diversos
    "Sal Refinado", "Sal Grosso", "Açúcar Refinado", "Açúcar Mascavo", "Óleo de Soja", "Óleo de Girassol",
    "Vinagre de Maçã", "Vinagre de Vinho", "Molho de Tomate", "Mostarda Amarela", "Ketchup Tradicional",
    "Maionese Tradicional", "Maionese Light",

    // Produtos de Higiene
    "Sabonete em Barra", "Sabonete Líquido", "Shampoo Anticaspa", "Shampoo Hidratante", "Condicionador Reconstrutor",
    "Creme Dental com Flúor", "Creme Dental Branqueador", "Escova de Dentes Média", "Escova de Dentes Macia",
    "Fio Dental", "Desodorante Aerosol", "Desodorante Roll-on",

    // Comidas de Festa
    "Coxinha de Frango", "Coxinha de Calabresa", "Quibe de Carne", "Quibe de Queijo", "Empada de Frango",
    "Empada de Palmito", "Pastel de Carne", "Pastel de Queijo", "Esfirra de Carne", "Esfirra de Frango",
    "Bolinha de Queijo", "Pão de Queijo", "Mini Pizza de Calabresa", "Mini Pizza de Queijo", "Enroladinho de Salsicha",
    "Brigadeiro Tradicional", "Brigadeiro de Morango", "Beijinho de Coco", "Cajuzinho", "Bolo de Aniversário",
    "Torta Salgada de Frango", "Docinho de Coco", "Docinho de Amendoim", "Docinho de Leite Ninho", "Pipoca Doce",
    "Pipoca Salgada", "Gelatina Colorida", "Sorvete de Creme", "Sorvete de Chocolate", "Picolé de Fruta",
    "Picolé de Chocolate", "Bombom", "Trufa de Chocolate", "Salada de Frutas"
];
const foodSectors = {
    "Frutas": "#ffcccc",
    "Vegetais e Legumes": "#ccffcc",
    "Laticínios": "#ccccff",
    "Carnes": "#ffff99",
    "Bebidas": "#ff99ff",
    "Grãos e Cereais": "#99ccff",
    "Produtos de Panificação": "#ffcc99",
    "Produtos Diversos": "#ccffff",
    "Produtos de Higiene": "#ffccff",
    "Comidas de Festa": "#ccff99"
};


let shoppingList = [];

function addItem() {
    const itemInput = document.getElementById('item');
    const quantityInput = document.getElementById('quantity');
    const itemValue = itemInput.value.trim();
    const quantityValue = quantityInput.value.trim();

    if (itemValue === '' || quantityValue === '') {
        alert('Por favor, preencha ambos os campos.');
        return;
    }

    const newItem = {
        item: itemValue,
        quantity: quantityValue
    };

    shoppingList.push(newItem);
    renderShoppingList();

    itemInput.value = '';
    quantityInput.value = '';
}

function renderShoppingList() {
    const listContainer = document.getElementById('shopping-list');
    listContainer.innerHTML = '';
    shoppingList.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.item} - Quantidade: ${item.quantity}`;
        listContainer.appendChild(listItem);
    });
}

function updateSuggestions() {
    const suggestionsList = document.getElementById('product-suggestions');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product;
        suggestionsList.appendChild(option);
    });
}

function exportList() {
    if (shoppingList.length === 0) {
        alert('A lista de compras está vazia.');
        return;
    }

    const formattedList = shoppingList.map(item => `${item.item} - Quantidade: ${item.quantity}`).join('\n');

    // Abrir a função de impressão do navegador
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`<html><head><title>Lista de Compras</title></head><body><pre>${formattedList}</pre></body></html>`);
    printWindow.document.close();
    printWindow.print();
}

function getSector(productName) {
    for (const sector in foodSectors) {
        if (products.includes(productName)) {
            if (products.slice(products.indexOf(productName)).includes(productName)) {
                return sector;
            }
        }
    }
    return "Outros";
}

// Função para renderizar a lista de compras
function renderShoppingList() {
    const listContainer = document.getElementById('shopping-list');
    listContainer.innerHTML = '';
    shoppingList.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.item} - Quantidade: ${item.quantity}`;
        const sector = getSector(item.item);
        listItem.style.backgroundColor = foodSectors[sector];
        listContainer.appendChild(listItem);
    });
}



document.addEventListener('DOMContentLoaded', updateSuggestions);
