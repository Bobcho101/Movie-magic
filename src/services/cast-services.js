import Cast from "../models/CastsModel.js";

export function createCast(formData){
    Cast.create(formData);
}

export async function getCasts() {
    const casts = await Cast.find({});
    return casts;
}
