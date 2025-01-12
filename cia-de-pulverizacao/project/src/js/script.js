function priceCalculate(type,quantity){
    quantity = parseFloat(quantity);

    if(type === 'Ervas Daninhas' && quantity>1000){
        var discount = 50*0.05;
        var real_price = 50-discount;
        return quantity*real_price;
    }

    if(type === 'Ervas Daninhas' && quantity<1000){
        var discount = 0;
        var real_price = 50 - discount;
        var result = quantity*real_price;

        if(result>750){
            var rest = result - 750;
            var discont_rest = rest*0.1;
            var aux = rest - discont_rest;
            return  aux + 750;
        }
    }

    if(type === 'Gafanhotos' && quantity>1000){
        var discount = 100*0.05;
        var real_price = 50-discount;
        return quantity*real_price;
    }

    if(type === 'Gafanhotos' && quantity<1000){
        var discount = 0;
        var real_price = 100 - discount;
        var result = quantity*real_price;

        if(result>750){
            var rest = result-750;
            var discont_rest = rest*0.1;
            var aux = rest - discont_rest;
            return  aux + 750;
        }
    }

    if(type === 'Broca' && quantity>1000){
        var discount = 150*0.05;
        var real_price = 50 - discount;
        return quantity*real_price;
    }

    if(type === 'Broca' && quantity<1000){
        var discount = 0;
        var real_price = 150 - discount;
        var result = quantity*real_price;
        
        if(result>750){
            var rest = result-750;
            var discont_rest = rest*0.1;
            var aux = rest - discont_rest;
            return  aux + 750;
        }
    }

    if(type === 'Todos' && quantity>1000){
        var discount = 250*0.05;
        var real_price = 50 - discount;
        return quantity*real_price;
    }

    if(type === 'Todos' && quantity<1000){
        var discount = 0;
        var real_price = 250 - discount;
        var result = quantity*real_price;
        
        if(result>750){
            var rest = result-750;
            var discont_rest = rest*0.1;
            var aux = rest - discont_rest;
            return  aux + 750;
        }
    }
}

function insertTable(){
    const div = document.getElementById('table');
    const selectType = document.getElementById('select').value;
    const quantityAcres = parseFloat(document.getElementById('quantity').value);
    const quantity_mounth = parseFloat(document.getElementById('select-months').value);


    if(quantity_mounth === 1.0){
        var price = 0;
        if(selectType ==='Ervas Daninhas'){
            
           price = 50;
        }

        if(selectType ==='Gafanhotos'){
             price = 100;
        }

        if(selectType ==='Broca'){
             price = 150;
        }

        if(selectType ==='Todos'){
             price = 250;
        }

        const table = `
        <table id="table">
            <thead>
                <tr>
                <th>Mês</th>
                <th>Tipo</th>
                <th>Preço por Ácre</th>
                <th>Quantidade de Ácres</th>
                <th>Total a Pagar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
            <td scope="row">1</td>
            <td>${selectType}</td>
            <td>R$${price},00</td>
            <td>${quantityAcres}</td>
            <td>R$${quantityAcres * price},00</td>
        </tr>
            </tbody>
        </table>
        `;
        div.innerHTML = table;
    }

    if(quantity_mounth === 2.0){
        var price = 0;
        if(selectType ==='Ervas Daninhas'){
                price = 50;
        }

        if(selectType ==='Gafanhotos'){
             price = 100;
        }

        if(selectType ==='Broca'){
             price = 150;
        }

        if(selectType ==='Todos'){
             price = 250;
        }

        const table = `
        <table id="table">
            <thead>
                <tr>
                <th>Mês</th>
                <th>Tipo</th>
                <th>Preço por Ácre</th>
                <th>Quantidade de Ácres</th>
                <th>Total a Pagar Acumulado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">1</td>
                    <td>${selectType}</td>
                    <td>R$${price},00</td>
                    <td>${quantityAcres}</td>
                    <td>R$${quantityAcres * price},00</td>
                </tr>
                <tr>
                   <td scope="row">2</td>
                        <td>${selectType}</td>
                        <td>R$${price},00</td>
                        <td>${quantityAcres}</td>
                        <td>R$${quantityAcres * price*2},00</td>
                    </tr>
            </tbody>
        </table>
        `;
        div.innerHTML = table;
    }

    if(quantity_mounth === 3.0){
        var price = 0;
        if(selectType ==='Ervas Daninhas'){
                price = 50;
        }

        if(selectType ==='Gafanhotos'){
             price = 100;
        }

        if(selectType ==='Broca'){
             price = 150;
        }

        if(selectType ==='Todos'){
             price = 250;
        }

        const table = `
        <table id="table">
            <thead>
                <tr>
                <th>Mês</th>
                <th>Tipo</th>
                <th>Preço por Ácre</th>
                <th>Quantidade de Ácres</th>
                <th>Total a Pagar Acumulado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">1</td>
                    <td>${selectType}</td>
                    <td>R$${price},00</td>
                    <td>${quantityAcres}</td>
                    <td>R$${quantityAcres * price},00</td>
                </tr>
                <tr>
                   <td scope="row">2</td>
                        <td>${selectType}</td>
                        <td>R$${price},00</td>
                        <td>${quantityAcres}</td>
                        <td>R$${quantityAcres * price*2},00</td>
                    </tr>
                    <tr>
                   <td scope="row">3</td>
                        <td>${selectType}</td>
                        <td>R$${price},00</td>
                        <td>${quantityAcres}</td>
                        <td>R$${quantityAcres * price*3},00</td>
                    </tr>
            </tbody>
        </table>
        `;
        div.innerHTML = table;
    }

    if(quantity_mounth === 4.0){
        var price = 0;
        if(selectType ==='Ervas Daninhas'){
                price = 50;
        }

        if(selectType ==='Gafanhotos'){
             price = 100;
        }

        if(selectType ==='Broca'){
             price = 150;
        }

        if(selectType ==='Todos'){
             price = 250;
        }

        const table = `
        <table id="table">
            <thead>
                <tr>
                <th>Mês</th>
                <th>Tipo</th>
                <th>Preço por Ácre</th>
                <th>Quantidade de Ácres</th>
                <th>Total a Pagar Acumulado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">1</td>
                    <td>${selectType}</td>
                    <td>R$${price},00</td>
                    <td>${quantityAcres}</td>
                    <td>R$${quantityAcres * price},00</td>
                </tr>
                <tr>
                   <td scope="row">2</td>
                        <td>${selectType}</td>
                        <td>R$${price},00</td>
                        <td>${quantityAcres}</td>
                        <td>R$${quantityAcres * price*2},00</td>
                    </tr>
                    <tr>
                   <td scope="row">3</td>
                        <td>${selectType}</td>
                        <td>R$${price},00</td>
                        <td>${quantityAcres}</td>
                        <td>R$${quantityAcres * price*3},00</td>
                    </tr>
                    <tr>
                   <td scope="row">4</td>
                        <td>${selectType}</td>
                        <td>R$${price},00</td>
                        <td>${quantityAcres}</td>
                        <td>R$${quantityAcres * price*4},00</td>
                    </tr>
            </tbody>
        </table>
        `;
        div.innerHTML = table;
    }

    if(quantity_mounth === 5.0){
        var price = 0;
        if(selectType ==='Ervas Daninhas'){
                price = 50;
        }

        if(selectType ==='Gafanhotos'){
             price = 100;
        }

        if(selectType ==='Broca'){
             price = 150;
        }

        if(selectType ==='Todos'){
             price = 250;
        }

        const table = `
        <table id="table">
            <thead>
                <tr>
                <th>Mês</th>
                <th>Tipo</th>
                <th>Preço por Ácre</th>
                <th>Quantidade de Ácres</th>
                <th>Total a Pagar Acumulado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">1</td>
                    <td>${selectType}</td>
                    <td>R$${price},00</td>
                    <td>${quantityAcres}</td>
                    <td>R$${quantityAcres * price},00</td>
                </tr>
                <tr>
                   <td scope="row">2</td>
                        <td>${selectType}</td>
                        <td>R$${price},00</td>
                        <td>${quantityAcres}</td>
                        <td>R$${quantityAcres * price*2},00</td>
                    </tr>
                    <tr>
                   <td scope="row">3</td>
                        <td>${selectType}</td>
                        <td>R$${price},00</td>
                        <td>${quantityAcres}</td>
                        <td>R$${quantityAcres * price*3},00</td>
                    </tr>
                    <tr>
                   <td scope="row">4</td>
                        <td>${selectType}</td>
                        <td>R$${price},00</td>
                        <td>${quantityAcres}</td>
                        <td>R$${quantityAcres * price*4},00</td>
                    </tr>
                    <tr>
                   <td scope="row">5</td>
                        <td>${selectType}</td>
                        <td>R$${price},00</td>
                        <td>${quantityAcres}</td>
                        <td>R$${quantityAcres * price*5},00</td>
                    </tr>
            </tbody>
        </table>
        `;
        div.innerHTML = table;
    }

    if(quantity_mounth === 6.0){
        var price = 0;
        if(selectType ==='Ervas Daninhas'){
                price = 50;
        }

        if(selectType ==='Gafanhotos'){
             price = 100;
        }

        if(selectType ==='Broca'){
             price = 150;
        }

        if(selectType ==='Todos'){
             price = 250;
        }

        const table = `
        <table id="table">
            <thead>
                <tr>
                <th>Mês</th>
                <th>Tipo</th>
                <th>Preço por Ácre</th>
                <th>Quantidade de Ácres</th>
                <th>Total a Pagar Acumulado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">6</td>
                    <td>${selectType}</td>
                    <td>R$${price},00</td>
                    <td>${quantityAcres}</td>
                    <td>R$${quantityAcres * price},00</td>
                </tr>
                <tr>
                   <td scope="row">2</td>
                        <td>${selectType}</td>
                        <td>R$${price},00</td>
                        <td>${quantityAcres}</td>
                        <td>R$${quantityAcres * price*2},00</td>
                    </tr>
                    <tr>
                   <td scope="row">3</td>
                        <td>${selectType}</td>
                        <td>R$${price},00</td>
                        <td>${quantityAcres}</td>
                        <td>R$${quantityAcres * price*3},00</td>
                    </tr>
                    <tr>
                   <td scope="row">4</td>
                        <td>${selectType}</td>
                        <td>R$${price},00</td>
                        <td>${quantityAcres}</td>
                        <td>R$${quantityAcres * price*4},00</td>
                    </tr>
                    <tr>
                   <td scope="row">5</td>
                        <td>${selectType}</td>
                        <td>R$${price},00</td>
                        <td>${quantityAcres}</td>
                        <td>R$${quantityAcres * price*5},00</td>
                    </tr>
                     <tr>
                   <td scope="row">6</td>
                        <td>${selectType}</td>
                        <td>R$${price},00</td>
                        <td>${quantityAcres}</td>
                        <td>R$${quantityAcres * price*6},00</td>
                    </tr>
            </tbody>
        </table>
        `;
        div.innerHTML = table;
    }

    
}

function Pdf(){
   const table = document.getElementById('table');
   html2canvas(table).then(canvas =>{
    const img = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = img;
    downloadLink.download = 'table.png';
    downloadLink.click();
   });
}

const button_at = document.getElementById('button-top');
const button_print = document.getElementById('button-pdf');
button_at.addEventListener('click', insertTable);
button_print.addEventListener('click', Pdf);