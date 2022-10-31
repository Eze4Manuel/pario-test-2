import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import * as actionCreators from "../redux/actions/index";
import { Column } from '@ant-design/plots';

import "./box.scss";

const BoxCon = (props) => {
    const transformedArray = []

    useEffect(() => {
        props.getCovidData();
    }, [])

    const formatStateData = (states) => {
        states?.forEach(elem => {
            transformedArray.push(...[{
                'state': elem.state,
                type: 'Confirmed cases',
                'value': elem.confirmedCases
            },
            {
                'state': elem.state,
                type: 'Cases on Admission',
                'value': elem.casesOnAdmission
            },
            {
                'state': elem.state,
                type: 'Discharged cases',
                'value': elem.discharged
            },
            {
                'state': elem.state,
                type: 'Death',
                'value': elem.death
            }]);
        });

    }
    return (
        <div className='box'>
            <div className='total-container'>
                <div className='total-container-title'>
                    <h3>Total Covid-19 Data</h3>
                </div>
                <div className='total-container-content'>
                    <div className='total-container-content-item'>
                        <span className='total-container-content-item-title'>TotalSamplesTested:</span>
                        <span className='total-container-content-item-value'>{props.data.totalSamplesTested}</span>
                    </div>
                    <div className='total-container-content-item'>
                        <span className='total-container-content-item-title'>TotalConfirmedCases:</span>
                        <span className='total-container-content-item-value'>{props.data.totalConfirmedCases}</span>
                    </div>
                    <div className='total-container-content-item'>
                        <span className='total-container-content-item-title'>TotalActiveCases:</span>
                        <span className='total-container-content-item-value'>{props.data.totalActiveCases}</span>
                    </div>
                    <div className='total-container-content-item'>
                        <span className='total-container-content-item-title'>Discharged:</span>
                        <span className='total-container-content-item-value'>{props.data.discharged}</span>
                    </div>
                    <div className='total-container-content-item'>
                        <span className='total-container-content-item-title'>Death:</span>
                        <span className='total-container-content-item-value'>{props.data.death}</span>
                    </div>
                </div>
            </div>
            <div className='state-container'>
                <div className='state-container-title'>
                    <h3>State Covid-19 Data</h3>
                </div>
                <div className='state-container-content'>
                    {props.data !== undefined ?
                        formatStateData(props.data.states) : console.log('nulll')
                    }
                    {transformedArray.length !== 0 ?
                        <StateChart transformedArray={transformedArray} /> : console.log('fetching')
                    }
                </div>
            </div>
        </div >
    )
}


const StateChart = ({ transformedArray }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(transformedArray);
    }, []);

    const config = {
        data,
        xField: 'state',
        yField: 'value',
        seriesField: 'type',
        isGroup: true,
        columnStyle: {
            radius: [20, 20, 0, 0],
        },
    };
    return (
        <Column {...config} />
    )
}


const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, actionCreators)(BoxCon);