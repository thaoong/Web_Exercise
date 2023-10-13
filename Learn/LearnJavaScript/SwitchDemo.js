function changeColor(value)
    {
        //alert(value)
        value=parseInt(value)
        mydiv=document.getElementById("mydiv")
        switch(value)
        {
            case 0:
                mydiv.style="background-color: yellow; width: 100; height: 100;"
                break
            case 1:
                mydiv.style.background='blue'
                break
            case 2:
                mydiv.style.background='pink'
                break
            default:
                break
        }
    }