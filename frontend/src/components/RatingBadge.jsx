import Badge from 'react-bootstrap/Badge';

const RatingBadge = ({ rating }) => {
    return <Badge style={{ backgroundColor: '#388e3c' }} bg='#388e3c' >{rating}&#11088;</Badge>
}

export default RatingBadge
