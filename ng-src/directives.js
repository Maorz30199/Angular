angular.module("Rout")
.directive('myAutocomplete',function(){
  function Link(scope,element,attrs){
    $(element).autocomplete({
      source: scope.$eval(attrs.myAutocomplete),
      select: function(ev,ui){
        ev.preventDefault();
        if(ui.item){
          scope.optionSelected(ui.item.value);
        }
      },
      focus: function(ev,ui){
        ev.preventDefault();
        $(this).val(ui.item.label);
      }
    });
  };
  return{
    link: Link
  };
})
.directive('backImg',function(){
  return function(scope,element,attrs){
    attrs.$observe('backImg',function(value){
      element.css({
        'background': "url('"+value+"')",
        'background-size': 'cover',
        'background-position': 'center'
      });
    });
  };
});
