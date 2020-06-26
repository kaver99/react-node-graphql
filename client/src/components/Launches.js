import React from 'react';
import gql from 'graphql-tag'; // apollo-boost 쓰면 bind 오류나므로 graphql-tag를 사용 필수
import { useQuery } from '@apollo/react-hooks';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
    {
        launches {
            flight_number,
            launch_year,
            launch_success,
            launch_date_local,
            mission_name,
        }
    }
`;

export default function Launches() {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);
    if(error) console.error(error);

    return (
        <>
            <h1 className="display-4 my-3">Launches</h1>
            <MissionKey />
            {
                loading ? <h4>Loading...</h4> : 
                data.launches.map(launch => (
                    <LaunchItem key={launch.flight_number} launch={launch} />
                ))
            }
        </>
    )
}
