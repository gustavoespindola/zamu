// $(function() {
//   var share = new Share("#share-button-top", {
//     networks: {
//       facebook: {
//         app_id: "1604147083144211",
//       }
//     }
//   });

//   // This is still buggy and just a band-aid
//   $(window).on('resize', function(){
//     $('.navbar').attr('style', '').removeData('pin');
//     $('.navbar').pin({
//       minWidth: 500
//     });
//   });

//   var sortAscending = {title: true};

//   $(".projects").isotope({
//     layoutMode: "fitRows",
//     getSortData: {
//       stars: "[data-stars] parseInt",
//       forks: "[data-forks] parseInt",
//       issues: "[data-issues] parseInt",
//       language: "[data-language]",
//       title: "[data-title]"
//     }
//   });

//   $('.landing .card').matchHeight();

//   $("select[name='filter']").change(function(e) {
//     console.log("Filter by: %o", $(this).val());
//     $(".projects").isotope({filter: $(this).val().replace(/^\.lang-\./, '.lang-')});
//   });

//   $("select[name='sort']").change(function(e) {
//     var val = $(this).val();
//     $(".projects").isotope({sortBy: val, sortAscending: sortAscending[val] || false});
//   });
// });

(function() {
 
    // Create input element for testing
    var input = document.createElement('input');
     
    // Create the supports object
    var supports = {};
     
    supports.autofocus   = 'autofocus' in input;
    supports.required    = 'required' in input;
    supports.placeholder = 'placeholder' in input;
 
    // Fallback for autofocus attribute
    if(!supports.autofocus) {
         
    }
     
    // Fallback for required attribute
    if(!supports.required) {
         
    }
 
    // Fallback for placeholder attribute
    if(!supports.placeholder) {
         
    }
     
    // Change text inside send button on submit
    var send = document.getElementById('contact-submit');
    if(send) {
        send.onclick = function () {
            this.innerHTML = '...Sending';
        }
    }
 
})();