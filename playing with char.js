function characters(s){
    var s = s.toLowerCase();
    s = s.replace(/[^a-z]/g,'');
   // (/[^a-z0-9]/g, ''); 
    console.log(s);
}

characters("aBCDA 1 !! 22.//")