const init = () => {
   let total = 0;
   let parent;

   const getTotalPrice = (item) => {
      total += Number(item.value) * item.getAttribute("itemCost");
   };

   const getInput = (node) => {
      return node.querySelector(".count-field__input");
   };

   const formatNumber = (x) => x.toLocaleString("ru-RU");

   const refreshPrice = (item) => {
      item.querySelector(".item__price").textContent = formatNumber(getInput(item).value 
      * getInput(item).getAttribute("itemCost")) + " $";
   };



	const refreshTotal = () => {
	   total = 0;
	   [...document.querySelectorAll(".item")].forEach(item => {
         getTotalPrice(getInput(item));
	      document.querySelector(".task__total span").textContent = formatNumber(total) + " $";
	   });
	};


	[...document.querySelectorAll(".count-field__btn")].forEach(btn => {
	   btn.addEventListener("click", () => {
	      parent = btn.parentNode;

	      if (btn.classList.contains("btn_plus")) {
            getInput(parent).value++;
            refreshPrice(parent.parentNode);
         }
	      else{
	         if (Number(getInput(parent).value) != 0) {
              	getInput(btn.parentNode).value--;
              	refreshPrice(parent.parentNode);
	         }
	      }

	      refreshTotal();
	   });

	});

   refreshTotal();
   [...document.querySelectorAll(".task__item")].forEach(item => {
      refreshPrice(item);
   });

};

init();