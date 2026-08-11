export type TCategory = {
   id?: number;
   img: string;
   title: string;
   prefix: string;
}

export type TLoading = "idle" | "succeeded" | "pending" | "failed"

export type TError = string | null

export type TProduct = {
   id?: number,
   title: string;
   price: string;
   cat_category: string;
   img: string
}