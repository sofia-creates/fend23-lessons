import { ProductCategory } from "@/data/webShopProducts";

export function lowerCaseCompare(a = "",b = "") {
    return a.toLowerCase().includes(b.toLowerCase())
}

export function validateProductData(data) {
    let errors = {}
    if(!data.name){
        errors.name = "Name is required";
    }
    if(!data.description || data.description.length < 10) {
        errors.description = "Description has to be 10 chars or longer"
    }
    if(!data.price || !Number(data.price) || data.price < 0) {
        errors.price = "A valid price number greater than 0 is required"
    }
    if(!ProductCategory.isCategory(data.category)) {
        errors.category = `A valid category has to be added [${ProductCategory.cattegories.join(", ")}]`
    }
    const hasErrors = Object.keys(errors).length > 0;
    return [hasErrors, errors]
} 