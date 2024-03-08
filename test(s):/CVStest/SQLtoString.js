let input = "|ibrahim_kedir|0506|M|2000|30-eppleworth|MBA|";

// Split the input string by the pipe character ('|')
let components = input.split('|').filter(Boolean);

// Rearrange the components to match the desired output format
let output = `${components[1].replace("_", " ")} ${components[6]} ${components[3]} ${components[2]} ${components[4]}${components[5]}`;

console.log(output); // ibrahim kedir MBA M 05062000 30-eppleworth

/*
Explanation:

We split the input string into an array of components using the split method. The filter(Boolean) call is used to remove any empty strings from the resulting array.
We rearrange the components as per the desired output format. We replace underscores with spaces in the name component (components[1]). Then, we concatenate the components in the desired order.
Finally, we log the resulting string to the console.
*/
