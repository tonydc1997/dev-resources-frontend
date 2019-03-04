import React, {Component} from 'react';


const urlParams = new URLSearchParams(window.location.search)
const key = urlParams.get('val');
const uid = urlParams.get('uid');
if(key == null) {
    console.log(localStorage.getItem("display"));
} else {
    localStorage.setItem("hoken", key);
    localStorage.setItem("uid", uid)
    window.location.href = "https://rustyresources.herokuapp.com/dashboard"
}
console.log(localStorage.getItem("hoken"));
console.log(localStorage.getItem("uid"));

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profile: {}
        }
    }

    componentDidMount() {

        fetch('https://dev-resources.herokuapp.com/profile', {
              method: 'post',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                hoken: localStorage.getItem("hoken"),
                uid: localStorage.getItem("uid")
              })
            })
              .then(response => response.json())
              .then(user => {
                  console.log('userrrrrrr', user);
                if (user.id) {
                    this.props.signer(true);
                    // this.isSignedIn= true;
                    this.setState({profile: user})
                }
              })
    }

    urlFormat = () => {

    }

    render() {

        const {username, id, avatar, discriminator, guilds} = this.state.profile;

        return(
            <div className="App">
                {
                    this.props.isSignedIn
                        ?   <div>
                                <h1 className="text-white text-center mt-3">User Page</h1>
                                <p className="text-white text-center">This page will eventually contain your favourite/bookmarked resources and various user options, if you logged in by authenticating with Discord</p>
                                <p className="text-white text-center">{username +'#'+ discriminator}</p>
                                <p className="text-white text-center" onClick={() => this.props.signer(false)}>logout</p>
                                <img className="text-center" src={`https://cdn.discordapp.com/avatars/${id}/${avatar}.png`} alt="avatar" />
                                <p className="text-white text-center">{guilds}</p>
                            </div>
                        :   <div>
                                <h1 className="text-white text-center mt-3">User Page</h1>
                                <p className="text-white text-center">This page will eventually contain your favourite/bookmarked resources and various user options, if you logged in by authenticating with Discord</p>
                                <p >
                                    <a href='https://discordapp.com/api/oauth2/authorize?client_id=537744904940683277&redirect_uri=https://dev-resources.herokuapp.com/user/auth/discord/callback&response_type=code&scope=identify%20guilds'>login</a>
                                </p>
                            </div>
                }
            </div>

        );

    }

}

export default Dashboard;
