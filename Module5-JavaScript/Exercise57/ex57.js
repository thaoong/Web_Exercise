function calculateitem1()
{
    qty1=document.getElementById('qty1').value
    item1=document.getElementById('item1')
    item1.value=(eval(qty1)*19.95).toFixed(2)
}
function calculateitem2()
{
    qty2=document.getElementById('qty2').value
    item2=document.getElementById('item2')
    item2.value=(eval(qty2)*29.95).toFixed(2)
}
function calculateitem3()
{
    qty3=document.getElementById('qty3').value
    item3=document.getElementById('item3')
    item3.value=(eval(qty3)*39.95).toFixed(2)
}
function sumitem()
{
    total=document.getElementById('total')
    total.value=(eval(item1.value)+eval(item2.value)+eval(item3.value)).toFixed(2)
}