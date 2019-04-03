$(".end").click(function(){
    var Age=$(".Age").val();
    var food=$(".food").val();
    if(Age< 18 && food==="pizza"){
        $(".Chandler").append("You Got Chandler");
    }
    else if(Age<18 && food==="cookies"){
        $(".Monica").append("YOU GOT MONICA!");
    }
    else if(Age>18 && food==="cookies"){
        $(".phoebe").append("You got Phoebe!");
    }
    else if(Age>=18 && food==="pizza"){
        $(".Joey").append("You got Joey!");
    }
    else{
    }
    
});

