import React, {Component} from 'react';

class Stats extends Component {
    render() {
        return (<>
                <div className="ui four statistics">
                    <div className="statistic">
                        <div className="value">
                            22
                        </div>
                        <div className="label">
                            Saves
                        </div>
                    </div>
                    <div className="statistic">
                        <div className="text value">
                            Three<br/>
                            Thousand
                        </div>
                        <div className="label">
                            Signups
                        </div>
                    </div>
                    <div className="statistic">
                        <div className="value">
                            <i className="plane icon"></i> 5
                        </div>
                        <div className="label">
                            Flights
                        </div>
                    </div>
                    <div className="statistic">
                        <div className="value">
                            42
                        </div>
                        <div className="label">
                            Team Members
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Stats;