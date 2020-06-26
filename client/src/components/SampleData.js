const data = {
    "launch": {
        "flight_number": 1,
        "mission_name": "FalconSat",
        "launch_year": "2006",
        "launch_success": false,
        "launch_date_local": "2006-03-25T10:30:00+12:00",
        "rocket": {
            "rocket_id": "falcon1",
            "rocket_name": "Falcon 1",
            "rocket_type": "Merlin A",
            "__typename": "Rocket"
        },
        "__typename": "Launch"
    }
}

console.log(data.launch.mission_name)