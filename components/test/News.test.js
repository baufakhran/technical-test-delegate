import { render, cleanup } from '@testing-library/react'
import News from '../News'
afterEach(cleanup)

let newsArticle = [
  {
    source: {
      id: null,
      name: 'Indozone.id',
    },
    author: 'Indozone.id',
    title:
      'Wah! Fans Hadirkan Kostum Karakter Final Fantasy VII di Game Animal Crossing - Indozone.id',
    description:
      'Game Animal Crossing New Horizons saat ini menjadi salah satu game paling populer di Nintendo Switch',
    url:
      'https://www.indozone.id/game/Z8sgDm/wah-fans-hadirkan-kostum-karakter-final-fantasy-vii-di-game-animal-crossing',
    urlToImage:
      'https://cdn03.indozone.id/content/2020/04/09/Z8sgDm/t_5e8ea59b1ba29_700.jpg',
    publishedAt: '2020-04-09T04:33:30Z',
    content:
      'INDOZONE.ID - Game Animal Crossing: New Horizons saat ini menjadi salah satu game paling populer di Nintendo Switch. Pasalnya game MMO ini hadir dengan berbagai fitur menarik yang membuat pemain dapat menunjukkan kreativitas mereka. Nah, baru-baru ini banyak… [+1201 chars]',
  },
  {
    source: {
      id: null,
      name: 'Inews.id',
    },
    author: 'Dini Listiyani',
    title: 'Huawei Luncurkan TV OLED Pertama, Dibanderol Rp57 Juta - iNews',
    description:
      'Huawei resmi mengumumkan kehadiran TV OLED pertama mereka. Dijuluki sebagai Vision X65, TV ini menggunakan panel OLED 65 inci dengan refresh rate 120Hz.',
    url:
      'https://www.inews.id/techno/elektronik/huawei-luncurkan-tv-oled-pertama-dibanderol-rp57-juta',
    urlToImage:
      'https://img.inews.id/media/600/files/inews_new/2020/04/09/huawei_tv.png',
    publishedAt: '2020-04-09T04:13:53Z',
    content:
      'BEIJING, iNews.id -Huawei resmi mengumumkan kehadiran TV OLED pertama mereka. Dijuluki sebagai Vision X65, TV Huawei ini menggunakan panel OLED 65 inci dengan refresh rate 120Hz. Tentu saja, Vision X65 juga telah mendukung HDR dan Huawei mengatakan smart TV … [+1065 chars]',
  },
]

test('Link changes the class when hovered', () => {
  const { getByText } = render(
    <News className="mb-4" country={'United States'} data={newsArticle}></News>
  )
  expect(getByText('United States')).toBeInTheDocument()
  expect(
    getByText(
      'Wah! Fans Hadirkan Kostum Karakter Final Fantasy VII di Game Animal Crossing - Indozone.id'
    )
  ).toBeInTheDocument()
  expect(
    getByText(
      'Game Animal Crossing New Horizons saat ini menjadi salah satu game paling populer di Nintendo Switch'
    )
  ).toBeInTheDocument()
  expect(
    getByText('Huawei Luncurkan TV OLED Pertama, Dibanderol Rp57 Juta - iNews')
  ).toBeInTheDocument()
  expect(
    getByText(
      'Huawei resmi mengumumkan kehadiran TV OLED pertama mereka. Dijuluki sebagai Vision X65, TV ini menggunakan panel OLED 65 inci dengan refresh rate 120Hz.'
    )
  ).toBeInTheDocument()
})
