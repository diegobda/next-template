import { render, screen } from '@testing-library/react';

import Main from './Main';

describe('<Main />', () => {
  it('should render the component', () => {
    const { container } = render(
      <Main>
        <h1>Next Examplee</h1>
      </Main>
    );

    expect(
      screen.getByRole('heading', { name: /Next Example/i })
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
