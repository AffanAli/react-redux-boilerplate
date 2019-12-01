import React, {Component, Fragment} from 'react';
import TableRenderer from './table_renderer';
import Card from './card';


class DynamicList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data_list: [],
            col_list: {
                'name': { label:'Name', render: true },
                'description': { label:'Desc.', render: true },
                'price': { label:'Price', render: true }
            }
        }

        this.__render_input_card = this.__render_input_card.bind(this);
    }

    __render_input_card() {
        return (
            <Card showHeader={false}>

            </Card>
        )
    }

    render() {
        var tableData = [
            {name: 'F1'},
            {name: 'R2', price: 'T4'}
        ]

        return (
            <Fragment>
                <TableRenderer usePagination={false} showSno={true} tableHeaders={this.state.col_list} tableData={tableData} />
            </Fragment>
        )
    }

}

export default DynamicList;