import { getCategories } from './requests'
import dynamic from 'next/dynamic'
const Carousel = dynamic(() => import('./carousel'), { ssr: false })

import { Video, Category } from './types'

// type Props = {
//   categories: Category[]
// }

export default async function videosCatalog() {
  const categories = await getCategories()
  // console.log(JSON.stringify(categories[0], null, 2))
  // create a page populated by data from the categories array above. 
  // Each category should be in a list item. Each list item should have the category name as a title and a link to the category page.
  // Under the category there should be a list of videos in that category. Each movie should link to the movie page. this list should be in a horizontal carousel. netflix style
  // The category page should be a dynamic route.

  return (
    <div>
      <h1>Filmkatalog</h1>
      <Carousel categories={categories} />
    </div>
  )
}