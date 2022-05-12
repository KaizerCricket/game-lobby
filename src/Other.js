import { Link } from 'react-router-dom'

const Other = () => {
    return (
        <footer>
            <p>
                Copyright &copy; 2022
            </p>
            <Link to='/'>
                <p>
                    Go Back
                </p>
            </Link>
        </footer>
    )
}

export default Other