import ArticleCard from "../articleCard";
import { render, screen } from '@testing-library/react'

describe('Article Card', () => {
  it('renders a heading', () => {
    render(<ArticleCard />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders homepage unchanged', () => {
  const { container } = render(<ArticleCard />)
  expect(container).toMatchSnapshot()
})

  
})