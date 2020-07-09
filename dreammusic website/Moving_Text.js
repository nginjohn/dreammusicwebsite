function Conversion(ObjectID, NameOfClass)
{
    var parameter1 = document.getElementById(ObjectID);
    parameter1.className = NameOfClass;
}

textString = 'Sample of moving text...';
move = false;

function Text_Moving()
{
    textString=document.getElementById("MovingText").value;

    textString = textString.substring(1, textString.length) + textString.substring(0, 1)

    var parameter2 = document.getElementById("MovingText");

    parameter2.value = textString;

    if (move)
        setTimeout('Text_Moving()', 200);
}