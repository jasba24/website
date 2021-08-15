export type NumberOfPagesProps = {
  total: number
  limit: number
}

export function* numberOfPages({
  total,
  limit,
}: NumberOfPagesProps): Generator<number, void, unknown> {
  let page = 1
  let offset = 0

  while (offset < total) {
    yield page

    page++
    offset += limit
  }
}
