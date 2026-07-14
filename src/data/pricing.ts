export const pricing = {
  basePrice: 200, // R per child
  siblingPrice: '50%', // R flat for each child marked as a sibling
}

/**
 * Input: one boolean per child = "is this child a sibling of another in this booking".
 * The first child can never be a sibling and always pays full price;
 * every other child marked as a sibling pays the flat sibling price.
 *
 *   [false, true]        -> [200, 100]      (total 300)
 *   [false, true, true]  -> [200, 100, 100] (total 400)
 *   [false, true, false] -> [200, 100, 200] (total 500)
 *   [false, false]       -> [200, 200]      (total 400)
 */
export function priceForChildren(siblingFlags: boolean[]): number[] {
  return siblingFlags.map((isSibling, i) =>
    i > 0 && isSibling ? pricing.siblingPrice : pricing.basePrice,
  )
}
