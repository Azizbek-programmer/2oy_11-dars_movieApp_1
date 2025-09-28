import logo from "@/shared/assets/cardlogo22222222.png"

export const createImageUrl = (path: string | null) => {
  if (path) {
    return `https://image.tmdb.org/t/p/original${path}`
  }
  return logo // agar image kelmasa sayt logosi chiqadi
}
