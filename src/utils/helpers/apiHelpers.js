

export function lowerCaseCompare(a = "",b = "") {
    return a.toLowerCase().includes(b.toLowerCase())
}

export function validateProductData(data) {
    let errors = {}
    if(!data.name){
        errors.name = "A name is required";
    }
    //TODO: descrtipion is required
    //TODO: description has to be 10 chars or longer
    //TODO: price has to be a number above 0
    //TODO: category has to either be "vegetables" or "dairy"
    const hasErrors = Object.keys(errors).length > 0;
    return [hasErrors, errors]
} 