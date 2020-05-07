$(document).ready(function () {
var currentTimeDiv=$("#currentDay");
var currentTime=moment().format('hh:mm a')
currentTimeDiv.text(currentTime);

var items=[];
var hours=[
    {
        hour: moment().startOf("day").add(7, "hours").format("hh:mm a"),
        task:""
    },
    {
        hour: moment().startOf("day").add(8, "hours").format("hh:mm a"),
        task:""
    },
    {
        hour: moment().startOf("day").add(9, "hours").format("hh:mm a"),
        task:""
    },
    {
        hour: moment().startOf("day").add(10, "hours").format("hh:mm a"),
        task:""
    },
    {
        hour: moment().startOf("day").add(11, "hours").format("hh:mm a"),
        task:""
    },
    {
        hour: moment().startOf("day").add(12, "hours").format("hh:mm a"),
        task:""
    },
    {
        hour: moment().startOf("day").add(13, "hours").format("hh:mm a"),
        task:""
    },
    {
        hour: moment().startOf("day").add(14, "hours").format("hh:mm a"),
        task:""
    },
    {
        hour: moment().startOf("day").add(15, "hours").format("hh:mm a"),
        task:""
    },
    {
        hour: moment().startOf("day").add(16, "hours").format("hh:mm a"),
        task:""
    },
    {
        hour: moment().startOf("day").add(17, "hours").format("hh:mm a"),
        task:""
    },
    {
        hour: moment().startOf("day").add(18, "hours").format("hh:mm a"),
        task:""
    }
];


for(var b=0; b<hours.length; b++){
    var storedItems = JSON.parse(localStorage.getItem("itemHour"+b));
    //console.log(storedItems);
    if(storedItems !== null){
        hours[b]=storedItems;
    }
    //console.log(hours[b]);
}

var i=0;
hours.forEach(element => {

    var newRow=$("<form>");
    newRow.attr("class","row");
    newRow.attr("method","POST");
    $(".container").append(newRow);

    var newColHour=$("<div>");
    newColHour.addClass("col-2 time-block hour row");
    newColHour.text(element.hour);
    newRow.append(newColHour);

    var newColText=$("<div>");
    newColText.addClass("col-9 row past textarea");
    newRow.append(newColText);

    var newInput=$("<textarea>");
    newInput.attr("name","planner-text");
    //newInput.attr("id",element);
    newInput.addClass("inputWidth")
    newInput.text(hours[i].task);
    newColText.append(newInput);


    var newColSave=$("<div>");
    newColSave.addClass("col-1 row saveBtn");
    newRow.append(newColSave);

    var saveIcon=$("<button>");
    saveIcon.addClass("fas fa-save clicked");
    saveIcon.attr("data-index",i);

    newColSave.append(saveIcon);
    i++;
});


$(".clicked").on("click", storeItems);

function storeItems() {
    event.preventDefault();
    var elemento=($(this).attr("data-index"));
    var tempHour=($(".container").children().eq(elemento).children().eq(0).text());
    var item=($(".container").children().eq(elemento).children().eq(1).children().val());
    
    //items.splice(elemento,1,item);
    //var si=typeof(item);
    console.log(tempHour);
    console.log(item);
    console.log(elemento);

    var itemsTempArr = {
        hour: tempHour,
        task: item
      };
    
    hours[elemento]=itemsTempArr;

    console.log(itemsTempArr);
    var itemsTempArrObj=JSON.stringify(itemsTempArr);
    console.log(itemsTempArrObj);

    var key="itemHour" + elemento;
    localStorage.setItem(key,itemsTempArrObj);
  }
});