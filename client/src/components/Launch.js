import React from 'react'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Moment from 'react-moment';


const LAUNCH_QUERY = gql`
    query Launch($flightNumber: Int!) {
        launch(flight_number: $flightNumber) {
            flight_number,
            mission_name,
            launch_year,
            launch_success,
            launch_date_local,
            rocket {
                rocket_id,
                rocket_name,
                rocket_type
            }
        }
    }
`

export default function Launch(props) {
    let { flightNumber } = props.match.params;
    flightNumber = parseInt(flightNumber);

    const { loading, error, data } = useQuery(LAUNCH_QUERY, {
        variables: { flightNumber },
    });
    if(error) console.error(error);
    const {flight_number, mission_name, launch_year, launch_success, launch_date_local} = (loading || data.launch);
    const {rocket_id, rocket_name, rocket_type} = (loading || data.launch.rocket);
    const isMission = classNames({
        'text-success': launch_success,
        'text-danger': !launch_success
    });

    return (
        <>
            <h1 className="display-4 my-3">
                <span className="text-dark">Mission:</span>{' '}{ loading || mission_name }
            </h1>
            <div>
                <h4 className="mb-3">Launch Details</h4>
                {
                    loading ? <div>Loading...</div> :
                    <ul className="list-group">
                        <li className="list-group-item">Flight Number: { flight_number }</li>
                        <li className="list-group-item">Launch Year: { launch_year }</li>
                        <li className="list-group-item">Launch Successful: <span className={ isMission }>{ launch_success ? 'Yes' : 'No' }</span></li>
                        <li className="list-group-item">Launch Date: <Moment format='YYYY-MM-DD HH:mm'>{ launch_date_local }</Moment></li>
                    </ul>
                }
                <h4 className="my-3">Rocket Details</h4>
                {
                    loading ? <div>Loading...</div> :
                    <ul className="list-group">
                        <li className="list-group-item">Rocket ID: { rocket_id }</li>
                        <li className="list-group-item">Rocket Name: { rocket_name }</li>
                        <li className="list-group-item">Rocket Type: { rocket_type }</li>
                    </ul>
                }
            </div>
            <hr />
            <Link to="/" className="btn btn-secondary">Back</Link>
        </>
    )
}
