// Show the box
$('nav ul li.container').on('mouseenter', ()=>{
    $("nav ul li.container .courses-options").slideDown("slow");
})


// Hide the box
$('nav ul li.container').on("mouseleave", ()=>{
    $("nav ul li.container .courses-options").slideUp("slow")
})
