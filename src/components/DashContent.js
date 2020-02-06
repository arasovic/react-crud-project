import React, {Component} from 'react'
import {Header} from 'semantic-ui-react'
import MyNavb from './semantic/MyNavb'
import Stats from './semantic/Stats'
import Draggable from 'react-draggable'
import {
    VictoryBar,
    VictoryPie,
    VictoryChart,
    VictoryTheme,
    VictoryLine,
    VictoryVoronoiContainer
} from 'victory'

class DashContent extends Component {


    render() {
        return (
            <div>
                <MyNavb/>
                <div style={{margin: '10px 25px'}}>
                    <Header as='h3'>General Statistic</Header>
                    <div className="ui horizontal segments">
                        <Draggable>
                            <div className="ui segment">
                                <VictoryPie
                                    events={[{
                                        target: "data",
                                        eventHandlers: {
                                            onClick: () => {
                                                return [
                                                    {
                                                        target: "data",
                                                        mutation: (props) => {
                                                            const fill = props.style && props.style.fill;
                                                            return fill === "#c43a31" ? null : {style: {fill: "#c43a31"}};
                                                        }
                                                    }, {
                                                        target: "labels",
                                                        mutation: (props) => {
                                                            return props.text === "clicked" ? null : {text: "clicked"};
                                                        }
                                                    }
                                                ];
                                            }
                                        }
                                    }]}
                                    data={[
                                        {x: "Tenants", y: 20},
                                        {x: "Users", y: 40},
                                        {x: "Roles", y: 10},
                                        {x: "Auth", y: 30}
                                    ]}
                                    colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                                />
                            </div>
                        </Draggable>
                        <Draggable>
                            <div className="ui segment">
                                <VictoryChart
                                    domainPadding={25}
                                    containerComponent={
                                        <VictoryVoronoiContainer
                                            voronoiDimension="x"
                                            labels={(d) => ` x: ${d.x} \n y: ${d.y}`}
                                        />
                                    }
                                >
                                    <VictoryBar
                                        categories={{
                                            x: ["birds", "cats", "dogs", "fish", "frogs"]
                                        }}
                                        data={[
                                            {x: "cats", y: 1},
                                            {x: "dogs", y: 2},
                                            {x: "birds", y: 3},
                                            {x: "fish", y: 2},
                                            {x: "frogs", y: 1}
                                        ]}
                                        animate={{
                                            duration: 2000,
                                            onLoad: {duration: 1000}
                                        }}
                                    />
                                </VictoryChart>
                            </div>
                        </Draggable>
                        <Draggable>
                            <div className="ui segment">
                                <VictoryChart
                                    theme={VictoryTheme.material}
                                    containerComponent={
                                        <VictoryVoronoiContainer
                                            voronoiDimension="x"
                                            labels={(d) => ` x: ${d.x} \n y: ${d.y}`}
                                        />
                                    }
                                >
                                    <VictoryLine
                                        style={{
                                            data: {stroke: "#c43a31"},
                                            parent: {border: "1px solid #ccc"}
                                        }}
                                        data={[
                                            {x: 1, y: 2},
                                            {x: 2, y: 3},
                                            {x: 3, y: 5},
                                            {x: 4, y: 4},
                                            {x: 5, y: 7}
                                        ]}
                                        animate={{
                                            duration: 2000,
                                            onLoad: {duration: 1000}
                                        }}
                                    />
                                </VictoryChart>
                            </div>
                        </Draggable>
                    </div>
                    <div className="ui segment">
                        <Stats/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashContent