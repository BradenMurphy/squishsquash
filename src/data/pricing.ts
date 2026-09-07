export const pricing = {
  basePrice: 'R150', // R per child
  siblingPrice: 'R100', // R flat for each child marked as a sibling
}

/**
 * Input: one boolean per child = "is this child a sibling of another in this booking".
 * The first child can never be a sibling and always pays full price;
 * every other child marked as a sibling pays the flat sibling price.
 *
 *   [false, true]        -> [150, 100]      (total 250)
 *   [false, true, true]  -> [150, 100, 100] (total 350)
 *   [false, true, false] -> [150, 100, 150] (total 400)
 *   [false, false]       -> [150, 150]      (total 300)
 */
export function priceForChildren(siblingFlags: boolean[]): string[] {
  return siblingFlags.map((isSibling, i) =>
    i > 0 && isSibling ? pricing.siblingPrice : pricing.basePrice,
  )
}
