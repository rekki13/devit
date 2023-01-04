const accordionItems = document.querySelectorAll(".accordionItem");

accordionItems.forEach((accordionItem) => {
    accordionItem.addEventListener("click", () => {
        if (accordionItem.classList.contains("accordion-open")) {
            accordionItem.classList.remove("accordion-open");
        } else {
            const accordionItemsWithIsOpen = document.querySelectorAll(".accordion-open");
            accordionItemsWithIsOpen.forEach((accordionItemWithIsOpen) => {
                accordionItemWithIsOpen.classList.remove("accordion-open");
            });
            accordionItem.classList.add("accordion-open");
        }
    });
});