$("#body-color-changer").on("click", ()=>{
    $("body").css("background-color", "#101010");
    $("body").css("color", "white");
});

$("#change-text").on("click", ()=>{
    $('#head-1').text("World's Largest Pizza.");
    $('#head-2').text("Blue Coloured Elephant Discovered");
})


// Select the paragraph with its id, then apply the class bigger, if it was not there already,
// otherwise remove this class.
$("#change-font").click(()=>{
    $('p').toggleClass('bigger');
})


// When 'Hide' button is clicked, we want it to do its work, then hide and show the 'Show' button.
// So that user cannot click on the 'Hide' button when the paragraph is already hidden.
$("#hide-btn").click(()=>{
    $('p.hide-n-show').hide();
    $("#hide-btn").hide();
    $("#show-btn").show();
})


// When 'Show' button is clicked, we want it to do its work, then hide and show the 'Hide' button.
// So that user cannot click on the 'Show' button when the paragraph is already shown.
$("#show-btn").click(()=>{
    $('p.hide-n-show').show();
    $("#show-btn").hide();
    $("#hide-btn").show();
})

$("#toggle-btn").click(()=>{
    $('p.toggle').toggle();
})

$("#btn").click(()=>{
    $("#para").slideUp(1000).slideDown(1000);
})


// USE CASE CODE

$('nav ul li.container').on('mouseenter', ()=>{
    $("nav ul li.container .courses-options").slideDown("slow");
})

$('nav ul li.container').on("mouseleave", ()=>{
    $("nav ul li.container .courses-options").slideUp("slow")
})