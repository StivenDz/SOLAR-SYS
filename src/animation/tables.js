const tables = document.querySelector('.tables');
const buttonTables = document.getElementById('btn-tables');
const buttonTablesRes = document.getElementById('btn-tables-res');
const buttonTablesClose = document.querySelector('.close-tables');


buttonTables.addEventListener('click',(e)=>{
    tables.style.opacity = '1';
    tables.classList.add('pointer-event');
})
buttonTablesRes.addEventListener('click',(e)=>{
    tables.style.opacity = '1';
    tables.classList.add('pointer-event');
})

buttonTablesClose.addEventListener('click',(e)=>{
    tables.style.opacity = '0';
    tables.classList.remove('pointer-event');
})

