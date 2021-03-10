import { Container, Option } from './styles'

function Select(props) {
    const settings = {
        options: '<option value="00.0000">00/0000</option>',
    }

    return (
        <Container onChange={props.onChange}> 
            {props.options.map(option => <Option key={option.value} value={option.value}>{option.label}</Option>) || settings.options}
        </Container>
    )
}

export default Select
