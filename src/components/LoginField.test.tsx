import renderer from 'react-test-renderer'
import LoginField from './LoginField'

const { raw } = String

it('basic', () => {
    const component = renderer.create(<LoginField label="login" value="" onChange={() => {}} />)
    expect(component.toJSON()).toMatchInlineSnapshot(raw`
      <label>
        <span
          className="LoginField___StyledSpan-sc-1ktbcqn-0 hanQrF"
        >
          login
        </span>
        <input
          className="LoginField___StyledInput-sc-1ktbcqn-1 crNECz"
          onChange={[Function]}
          value=""
        />
      </label>
    `)
})

it('collapsed', () => {
    const component = renderer.create(<LoginField isCollapsed label="login" value="" onChange={() => {}} />)
    expect(component.toJSON()).toMatchInlineSnapshot(raw`
      <label>
        <span
          className="LoginField___StyledSpan-sc-1ktbcqn-0 hanQrF"
        >
          login
        </span>
      </label>
    `)
})
