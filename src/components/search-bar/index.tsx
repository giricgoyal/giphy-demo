import * as React from 'react'
import { Form } from 'react-bootstrap'
import Icon from '../icon'

export type Props = {
    value: string
    onChange: (string) => void
}

export default function SearchBar(props: Props): React.ReactElement {
    const { value, onChange } = props

    const handleValueChange = (event) => {
        onChange(event.target.value)
    }

    const handleClearClick = () => {
        onChange('')
    }

    return (
        <Form className="search">
            <Form.Control
                className="search__input"
                data-testid="input"
                type="text"
                placeholder="Search"
                value={value}
                onChange={handleValueChange}
            />
            <Icon icon="search" className="search__icon" />
            {value && <Icon icon="cross" className="search__clear" onClick={handleClearClick} data-testid="clear" />}
        </Form>
    )
}
