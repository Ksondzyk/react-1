import React from 'react';
import User from './User.jsx';



class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sorting: null,
        }
    }

    toggleSorting = () => {
        const newSorting = this.state.sorting === 'asc' ? 'desc' : 'asc';
        this.setState({
            sorting: newSorting
        })
    }

    render() {
        let usersList;
        if (this.state.sorting) {
            usersList = this.props.users.slice().sort((a, b) => {
                return this.state.sorting === 'asc' ? a.age - b.age : b.age - a.age;
            })
        } else {
            usersList = this.props.users;
        }
        return (
            <div>
                <button onClick={this.toggleSorting} className="btn">
                    {this.state.sorting || '-'}
                </button>
                <ul className='users'>
                    {
                        usersList.map((user) => {
                            return <User key={user.id} {...user} />

                        })
                    }
                </ul>
            </div>

        )
    }
}


export default UsersList;

// import React from 'react';
// import User from './User.jsx'

// class UsersList extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             sorting: null,
//         }
//     }

//     toggleBtn = () => {
//         this.setSorting = this.state.sorting === 'asc' ? 'desc' : 'asc';

//         this.setState({
//             sorting: this.setSorting,
//         })
//     }



//     render() {
//         let sorting;
//         if (this.state.sorting) {
//             sorting = this.props.users.slice().sort((a, b) => {
//                 return this.state.sorting === 'asc' ? a.age - b.age : b.age - a.age;
//             })
//         } else {
//             sorting = this.props.users;
//         }

//         return (
//             <div>
//                 <button className="btn" onClick={this.toggleBtn} >{this.state.sorting || '-'}</button>
//                 {
//                     sorting.map((user) => {
//                         return (
//                             <ul key={user.id} className='users'>
//                                 <User {...user} />
//                             </ul>
//                         )
//                     })
//                 }
//             </div>
//         )
//     }
// }

// export default UsersList;